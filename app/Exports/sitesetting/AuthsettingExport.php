<?php

namespace App\Exports\sitesetting;

use App\Models\Authsetting;
use Maatwebsite\Excel\Concerns\FromCollection;

class AuthsettingExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Authsetting::all();
    }
}
