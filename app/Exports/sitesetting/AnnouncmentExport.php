<?php

namespace App\Exports\sitesetting;

use App\Models\Announcment;
use Maatwebsite\Excel\Concerns\FromCollection;

class AnnouncmentExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Announcment::all();
    }
}
