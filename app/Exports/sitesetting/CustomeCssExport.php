<?php

namespace App\Exports\sitesetting;

use App\Models\Customcss;
use Maatwebsite\Excel\Concerns\FromCollection;

class CustomeCssExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Customcss::all();
    }
}
