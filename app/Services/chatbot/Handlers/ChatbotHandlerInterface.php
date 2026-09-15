<?php

namespace App\Services\chatbot\Handlers;


interface ChatbotHandlerInterface
{
    public function handle(string $userText): ?string;
}