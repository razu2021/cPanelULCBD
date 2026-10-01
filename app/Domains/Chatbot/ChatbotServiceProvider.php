<?php 
namespace App\Domains\Chatbot;

use Illuminate\Support\ServiceProvider;

class ChatbotServiceProvider extends ServiceProvider{

    public function register(): void
    {
        $this->mergeConfigFrom(
            __DIR__ . '/Services/chatbot/config/chatbot.php',
            'chatbot'
        );

        // ২. আপনার স্টপ-ওয়ার্ড কনফিগ ফাইলটি এখানে রেজিস্টার করে দিন
        $this->mergeConfigFrom(
            __DIR__ . '/Services/chatbot/config/stopword.php', 
            'stopword' 
        );
    }

    public function boot(): void
    {
        //
    }
}