<?php

namespace App\Exports\sitesetting;

use App\Models\SiteAddress;
use Maatwebsite\Excel\Concerns\FromCollection;

class SiteAddressExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return SiteAddress::all();
    }
}
