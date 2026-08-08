<?php

namespace App\Exports\sitesetting;

use App\Models\SitePhone;
use Maatwebsite\Excel\Concerns\FromCollection;

class SitePhoneExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return SitePhone::all();
    }
}
