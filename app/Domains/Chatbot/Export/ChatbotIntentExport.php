<?php

namespace App\Domains\Chatbot\Export;

use App\Domains\Chatbot\Models\ChatbotIntent;
use Maatwebsite\Excel\Concerns\FromCollection;

class ChatbotIntentExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return ChatbotIntent::all();
    }
}
