<?php

namespace App\Exports\sitesetting;

use App\Models\SiteEmail;
use Maatwebsite\Excel\Concerns\FromCollection;

class SiteEmailExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return SiteEmail::all();
    }
}
