<?php

namespace App\Exports\sitesetting;

use App\Models\Manageheader;
use Maatwebsite\Excel\Concerns\FromCollection;

class ManageHeaderExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Manageheader::all();
    }
}
