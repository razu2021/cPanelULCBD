<?php

namespace App\Exports\sitesetting;

use App\Models\Cooliepolicy;
use Maatwebsite\Excel\Concerns\FromCollection;

class CookieExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Cooliepolicy::all();
    }
}
