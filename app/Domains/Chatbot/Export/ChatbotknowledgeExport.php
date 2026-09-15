<?php

namespace App\Domains\Chatbot\Export;

use App\Domains\Chatbot\Models\Chatbotknowledge;
use Maatwebsite\Excel\Concerns\FromCollection;

class ChatbotknowledgeExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Chatbotknowledge::all();
    }
}
