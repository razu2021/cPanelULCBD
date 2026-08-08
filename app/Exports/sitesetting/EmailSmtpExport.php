<?php

namespace App\Exports\sitesetting;

use App\Models\Emailsmtp;
use Maatwebsite\Excel\Concerns\FromCollection;

class EmailSmtpExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Emailsmtp::all();
    }
}
