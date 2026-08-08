<?php

namespace App\Exports\sitesetting;

use App\Models\SiteSocial;
use Maatwebsite\Excel\Concerns\FromCollection;

class SiteSocialExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return SiteSocial::all();
    }
}
