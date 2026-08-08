<?php

namespace App\Exports\sitesetting;

use App\Models\Maintenancemode;
use Maatwebsite\Excel\Concerns\FromCollection;

class MaintenanceExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Maintenancemode::all();
    }
}
