<?php
namespace App\Domains\Chatbot\Services\chatbot\Contracts;

use App\Domains\Chatbot\Services\chatbot\DTO\ChatbotContext;
use App\Domains\Chatbot\Services\chatbot\DTO\ChatbotResponse;

interface ChatbotHandlerInterface
{
    public function handle(ChatbotContext $context): ChatbotContext;
}