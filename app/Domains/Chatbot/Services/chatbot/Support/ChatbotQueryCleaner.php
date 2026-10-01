<?php 
namespace App\Domains\Chatbot\Services\chatbot\Support;

class ChatbotQueryCleaner{
    public static function clean(string $sentence): string
    {
        
        // ১. কনফিগ থেকে স্টপ-ওয়ার্ডগুলোর অ্যারে নিয়ে নেওয়া
        $stopWords = config('stopword.words', []);
      
        // ২. সেন্টেন্সকে লোয়ারকেস করা এবং শব্দে (explode) রূপান্তর করা
        $words = explode(' ', strtolower(trim($sentence)));
 
        // ৩. অপ্রয়োজনীয় বা কমন শব্দগুলো বাদ দেওয়া
        $filteredWords = array_diff($words, $stopWords);

        // ৪. ফাঁকা বা ছোট শব্দ (যেমন ১-২ অক্ষরের) বাদ দিয়ে ক্লিন স্ট্রিং বানানো
        $validWords = array_filter($filteredWords, function ($word) {
            return mb_strlen(trim($word)) > 2; // ৩ অক্ষরের বেশি বড় শব্দগুলোকে প্রাধান্য দেওয়া
        });
    

        // ৫. শব্দগুলোকে আবার একসাথে জোড়া লাগিয়ে (implode) ফাইনাল কুয়েরি রিটার্ন করা
        return implode(' ', $validWords);
    }
}
