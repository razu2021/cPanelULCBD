<?php

namespace App\Exports\sitesetting;

use App\Models\Apisetting;
use Maatwebsite\Excel\Concerns\FromCollection;

class ApiExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Apisetting::all();
    }
}
