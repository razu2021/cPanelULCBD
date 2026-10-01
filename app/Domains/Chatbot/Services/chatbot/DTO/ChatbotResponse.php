<?php 
namespace App\Domains\Chatbot\Services\chatbot\DTO;

class ChatbotResponse{
     public function __construct(
        public readonly string $answer,
        public readonly float|int $confidence,
        public readonly string $source,
    ) {}
}