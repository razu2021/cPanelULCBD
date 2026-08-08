<?php

namespace App\Exports;

use App\Models\PageSection;
use Maatwebsite\Excel\Concerns\FromCollection;

class PageSectionExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return PageSection::all();
    }
}
