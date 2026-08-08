<?php

namespace App\Exports\sitesetting;

use App\Models\Copyright;
use Maatwebsite\Excel\Concerns\FromCollection;

class CopyrightExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Copyright::all();
    }
}
