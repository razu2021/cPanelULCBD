<?php

namespace App\Exports\sitesetting;

use App\Models\SiteInfo;
use Maatwebsite\Excel\Concerns\FromCollection;

class SiteInfromationExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return SiteInfo::all();
    }
}
