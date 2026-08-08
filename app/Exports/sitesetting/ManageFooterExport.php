<?php

namespace App\Exports\sitesetting;

use App\Models\Managefooter;
use Maatwebsite\Excel\Concerns\FromCollection;

class ManageFooterExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Managefooter::all();
    }
}
