<?php

namespace App\Exports\sitesetting;

use App\Models\Customescript;
use Maatwebsite\Excel\Concerns\FromCollection;

class CustomScriptExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Customescript::all();
    }
}
