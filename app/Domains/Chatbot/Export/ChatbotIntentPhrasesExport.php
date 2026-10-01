<?php

namespace App\Domains\Chatbot\Export;

use App\Domains\Chatbot\Models\ChatbotIntentPhrases;
use Maatwebsite\Excel\Concerns\FromCollection;

class ChatbotIntentPhrasesExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return ChatbotIntentPhrases::all();
    }
}
