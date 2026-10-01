<?php 
namespace App\Domains\Chatbot\Services\chatbot;

use App\Domains\Chatbot\Services\chatbot\DTO\ChatbotResponse ;
use App\Domains\Chatbot\Services\chatbot\Support\TextNormalizer;
use App\Domains\Chatbot\Services\chatbot\Contracts\ChatbotHandlerInterface;
use App\Domains\Chatbot\Services\chatbot\DTO\ChatbotContext;

class customeChatbotService{

/**
 * --------------------------------------------------------------
 * 
 * --------------------------------------------------------------
 */

protected array $handlers ;

public function __construct(protected TextNormalizer $normalizer)
{
   $this->handlers = $this->resolveHandlers();
}



    public function getBotResponse(string $userText): ChatbotResponse
    {

     /*
        |--------------------------------------------------------------------------
        | 1. Normalize user input
        |--------------------------------------------------------------------------
        */

        $text = $this->normalizer->normalize($userText);

       
        /*
        |--------------------------------------------------------------------------
        | 2. Empty input
        |--------------------------------------------------------------------------
        */

        if ($text === '') {
            return $this->fallbackResponse();
        }


        $context = new ChatbotContext(text:$text);


        /*
        |--------------------------------------------------------------------------
        | 3. Execute chatbot handlers
        |--------------------------------------------------------------------------
        */

        foreach ($this->handlers as $handler) {
            $context = $handler->handle($context);
        }



       return $this->buildResponse($context);

    }


    /**
     * --------------------------------------------------------------------
     * Resolve all registered chatbot handlers.
     * --------------------------------------------------------------------
     */
    protected function resolveHandlers(): array
    {
        $handlers = [];

        foreach(config('chatbot.handlers',[]) as $handlerClass){
            
            $handler = app($handlerClass);

                if (! $handler instanceof ChatbotHandlerInterface) {
                    throw new \RuntimeException(
                        "{$handlerClass} must implement ChatbotHandlerInterface."
                    );
                }
            $handlers[] = $handler;
        }
        return $handlers;
    }



    /**
     * --------------------------------------------------------
     * 
     * --------------------------------------------------------
     */
    protected function buildResponse(ChatbotContext $context): ChatbotResponse
    {
        /*
        |--------------------------------------------------------------------------
        | Knowledge answer
        |--------------------------------------------------------------------------
        */

        if ($context->knowledge) {
            
            return new ChatbotResponse(
                answer: $context->knowledge->answer,
                confidence: $context->confidence,
                source: 'knowledge',
            );
        }

                /*
        |--------------------------------------------------------------------------
        | Scout answer
        |--------------------------------------------------------------------------
        |
        | পরে এখানে Scout result handle করবো।
        |
        */

        if ($context->searchResult) {
                $formattedAnswer = $this->formatDatabaseResults($context->searchResult);

                return new ChatbotResponse(
                    answer: $formattedAnswer,
                    confidence: $context->confidence,
                    source: 'database_search',
                );
            }

        /*
        |--------------------------------------------------------------------------
        | Fallback
        |--------------------------------------------------------------------------
        */
        return $this->fallbackResponse();

    }
    
    /**
     * ডাটাবেস থেকে আসা কালেকশনকে চ্যাটবটের সুন্দর টেক্সটে রূপান্তর করা
     */
       protected function formatDatabaseResults($results): string
        {
            if ($results->isEmpty()) {
                return "দুঃখিত, এই বিষয়ে আমার কাছে কোনো সুনির্দিষ্ট তথ্য নেই।";
            }

            $output = "🔍 **আপনার অনুসন্ধানের সাথে মিলে যায় এমন কিছু তথ্য:**\n";
            $output .= "─────────\n";
            
            $transformer = new ChatbotDataTransformer();

            foreach ($results as $index => $item) {
                // সেন্ট্রাল ট্রান্সফরমার থেকে ডাইনামিক ডেটা নিয়ে আসা
                $data = $transformer->transform($item);

                // নাম্বারিং বা বুলেট পয়েন্ট যোগ করা (যেমন: ১. ২. ৩.)
                $serial = $index + 1;
                $output .= "**{$serial}. " . e($data['title']) . "**\n";
                
                if (!empty($data['content'])) {
                    // কন্টেন্ট বেশি বড় হলে ট্রান্সেট বা কাটছাঁট করার লজিকও রাখতে পারেন (опционально)
                    $output .= "   📌 " . e($data['content']) . "\n";
                }

                if (!empty($data['url']) && $data['url'] !== '#') {
                    $output .= "   🔗 [বিস্তারিত দেখুন]({$data['url']})\n";
                }

                $output .= "\n"; // প্রতিটি আইটেমের মাঝে গ্যাপ
            }

            $output .= "───────────\n";
            $output .= "_আশা করি এটি আপনার উপকারে আসবে! অন্য কিছু জানার থাকলে বলতে পারেন।_";

            return trim($output);
        }



    /**
     * ----------------------------------------------------------
     * Fallback Response functionality start here 
     * ----------------------------------------------------------
     */
    protected function fallbackResponse(): ChatbotResponse
    {
        return new ChatbotResponse(
            answer: 'দুঃখিত, আপনার প্রশ্নের উপযুক্ত উত্তর খুঁজে পাইনি। 
            অনুগ্রহ করে প্রশ্নটি অন্যভাবে লিখুন অথবা আমাদের সাপোর্ট টিমের সাথে যোগাযোগ করুন।',
            confidence: 0,
            source: 'fallback',
        );
    }


}