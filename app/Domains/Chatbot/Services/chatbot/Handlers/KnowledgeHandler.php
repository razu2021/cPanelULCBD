<?php 
namespace App\Domains\Chatbot\Services\chatbot\Handlers;
use App\Domains\Chatbot\Models\ChatbotKnowledge;
use App\Domains\Chatbot\Services\chatbot\Contracts\ChatbotHandlerInterface;
use App\Domains\Chatbot\Services\chatbot\DTO\ChatbotResponse;
use App\Domains\Chatbot\Services\chatbot\DTO\ChatbotContext;

class KnowledgeHandler implements ChatbotHandlerInterface{
    
    public function handle(ChatbotContext $context): ChatbotContext
    {

        // Intent পাওয়া যায়নি
        if (!$context->intent) {
            return $context;
        }
       
        $knowledge = ChatbotKnowledge::query()
            ->where('intent_id', $context->intent->id)
            ->where('status', 1)
            ->where('public_status', 1)
            ->orderBy('order')
            ->first();

        if(!$knowledge) {
            return $context;
        }
      
        $context->knowledge = $knowledge;

        

        return $context;

    }

}