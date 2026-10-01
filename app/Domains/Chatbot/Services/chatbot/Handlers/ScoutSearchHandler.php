<?php
namespace App\Domains\Chatbot\Services\chatbot\Handlers;

use App\Domains\Chatbot\Services\chatbot\Contracts\ChatbotHandlerInterface;
use App\Domains\Chatbot\Services\chatbot\DTO\ChatbotCont;
use App\Domains\Chatbot\Services\chatbot\DTO\ChatbotContext;
use App\Domains\Chatbot\Services\chatbot\Support\ChatbotQueryCleaner;
use App\Models\Faq;

class ScoutSearchHandler implements ChatbotHandlerInterface {
    public function handle(ChatbotContext $context): ChatbotContext 
    {
        if ($context->knowledge) {
            return $context;
        }

        $query = $context->text;
        $allResults = collect();

       $models = config('chatbot.searchable_models', []);

  

        foreach ($models as $modelClass) {
            // চেক করা যে ক্লাসে Searchable ট্রেইট আছে কি না
            if (method_exists($modelClass, 'search')) {
                $results = $modelClass::search($query)->take(3)->get();
                    
                // jodi kono result na ase tahole 
                if($results->isEmpty()){
                    // রিইউজেবল ক্লিনার ক্লাস দিয়ে সেন্টেন্স ক্লিন করা
                    $cleanedQuery = ChatbotQueryCleaner::clean($query);
                   
                    // jodi query empty na hoy or keyword jodi thake tahole again scout search hobe keyword diye 
                    if (!empty($cleanedQuery) && $cleanedQuery !== strtolower(trim($query))) {
                        $results = $modelClass::search($cleanedQuery)->take(3)->get();
                    }
                }



                if ($results->isNotEmpty()) {
                    // সব মডেলের রেজাল্টগুলো একটি கலেকশনে একত্র করা
                    $allResults = $allResults->concat($results);
                }
            }
        }

        if ($allResults->isNotEmpty()) {
            // রিলেভেন্স বা প্রয়োজন অনুযায়ী ট্রাংকেট বা সর্ট করে নিতে পারেন
            $context->searchResult = $allResults->take(3); 
            $context->confidence = 0.85;
        }
        

        return  $context;
    }
}