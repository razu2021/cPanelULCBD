<?php

namespace App\Exports\sitesetting;

use App\Models\Noticeboard;
use Maatwebsite\Excel\Concerns\FromCollection;

class NoticeBoardExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Noticeboard::all();
    }
}
