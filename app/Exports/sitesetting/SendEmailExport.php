<?php

namespace App\Exports\sitesetting;

use App\Models\SendEmail;
use Maatwebsite\Excel\Concerns\FromCollection;

class SendEmailExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return SendEmail::all();
    }
}
