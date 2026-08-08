<?php

namespace App\Exports\sitesetting;

use App\Models\AdminEmail;
use Maatwebsite\Excel\Concerns\FromCollection;

class AdminEmailExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return AdminEmail::all();
    }
}
