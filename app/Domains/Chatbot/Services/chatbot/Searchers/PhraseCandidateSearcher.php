<?php
namespace App\Domains\Chatbot\Services\chatbot\Searchers;

use App\Domains\Chatbot\Models\ChatbotIntentPhrases;
use App\Domains\Chatbot\Services\chatbot\Support\ChatbotQueryCleaner;
use Illuminate\Support\Collection;
class PhraseCandidateSearcher{


    public function search(string $text): Collection
    {

        $phrases =  ChatbotIntentPhrases::query()
            ->with('intent')
            ->where('public_status', 1)
            ->where(function ($query) use ($text) {
                $query->where('phrase', 'LIKE', "%{$text}%");
            })
            ->limit(20)
            ->get();

          
        // যদি ফুল টেক্সটে ডেটা পাওয়া যায়, তবে সেটাই রিটার্ন করে দিন
        if ($phrases->isNotEmpty()) {
            return $phrases;
        }
 

        $cleanedQuery = ChatbotQueryCleaner::clean($text);

     
        // যদি ক্লিন করার পর কিছু বাকি থাকে এবং তা অরিজিনাল টেক্সট থেকে আলাদা হয়
        if (!empty($cleanedQuery) && $cleanedQuery !== $text) {
            $phrases = ChatbotIntentPhrases::query()
                ->with('intent')
                ->where('public_status', 1)
                ->where('phrase', 'LIKE', "%{$cleanedQuery}%")
                ->limit(20)
                ->get();
           // dd($phrases);
            
            if ($phrases->isNotEmpty()) {
                return $phrases;
            }

            
        }

        return collect();

    }

}