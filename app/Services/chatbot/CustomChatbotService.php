<?php
namespace App\Services\chatbot;

use App\Services\chatbot\Handlers\faqHandler;

class CustomChatbotService
{

    protected array $handlers = [];

    public function __construct()
    {
        $this->handlers = [
            new faqHandler(),
        ];
    }




    public function getBotResponse(string $userText): string
    {
        $text = strtolower(trim($userText));

        // ২. ডাইনামিক হ্যান্ডলার লুপ (এখানে ৫০/১00 টেবিল খুব সহজে ম্যানেজ হবে)
        foreach ($this->handlers as $handler) {
            $response = $handler->handle($text);
            if ($response !== null) {
                return $response;
            }
        }

       return "আপনার বিষয়টি আমি বুঝতে পারিনি। আমাদের সাপোর্ট টিমের সাথে কথা বলতে পারেন।";
    }
}
