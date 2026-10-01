<?php 
namespace App\Domains\Chatbot\Services\chatbot\DTO;

use App\Domains\Chatbot\Models\ChatbotIntent;
use App\Domains\Chatbot\Models\ChatbotIntentPhrases;
use App\Domains\Chatbot\Models\ChatbotKnowledge;

class ChatbotContext{
    public function __construct(
        public readonly string $text,
        public ?ChatbotIntent $intent = null,
        public ?ChatbotIntentPhrases $matchedPhrase = null,
        public ?ChatbotKnowledge $knowledge = null,
        public array $entities = [], 
        public float $confidence = 0,
        public mixed $searchResult = null,
    ){}
}
