<?php

namespace App\Domains\Chatbot\Export;

use App\Domains\Chatbot\Models\ChatbotConversation;
use Maatwebsite\Excel\Concerns\FromCollection;

class ChatbotConversationExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return ChatbotConversation::all();
    }
}
