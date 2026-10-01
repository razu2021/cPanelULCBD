<?php 
namespace App\Domains\Chatbot\Services\chatbot;

use App\Domains\Chatbot\Services\chatbot\Contracts\ScoutSearchableInterface;
use App\Models\Faq;
use App\Models\SitePhone;

class ChatbotDataTransformer{
    
    /**
     * ---------------------------------------------------------
     * model instance 
     * ---------------------------------------------------------
     */
    public function transform($item): array
    {

        // 
        if($item instanceof ScoutSearchableInterface){
            return $item->getSearchableData();
        }

        // যদি কোনো মডেলের নির্দিষ্ট কন্ডিশন না থাকে, তবে কমন ফলব্যাক
        // যদি কোনো মডেলের নির্দিষ্ট ইন্টারফেস না থাকে, তবে স্ট্যাটিক ফলব্যাক
        return [
            'title' => 'অজ্ঞাত তথ্য',
            'content' => 'কোনো বিবরণ পাওয়া যায়নি',
            'url' => '#',
        ];

    }
}