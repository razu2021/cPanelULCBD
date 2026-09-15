<?php   
namespace App\Services\chatbot\Handlers;

use App\Models\Faq;

class faqHandler implements ChatbotHandlerInterface
{
    public function handle(string $userText): ?string
    {
        $text = strtolower(trim($userText));

        $keywords = array_filter(explode(' ', $text), function($word) {
            return strlen($word) > 2; // ৩ অক্ষরের ছোট শব্দ (যেমন: is, to) বাদ দিয়ে কাজের শব্দগুলো নেওয়া
        });

        if (empty($keywords)) {
            return null;
        }

      $faq = Faq::query()
            ->where(function ($query) use ($keywords) {
                foreach ($keywords as $word) {
                    $query->Where('title', 'like', "%{$word}%");
                          
                }
            })
            ->first();


        if($faq){
            return $faq->short_des;
        }


        return null;
    }
}