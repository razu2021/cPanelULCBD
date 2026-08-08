<?php

namespace App\Exports\sitesetting;

use App\Models\AnaliticsTracking;
use Maatwebsite\Excel\Concerns\FromCollection;

class AnaliticTrackingExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return AnaliticsTracking::all();
    }
}
