<?php

namespace App\Exports;

use App\Models\SubCategoryPage;
use Maatwebsite\Excel\Concerns\FromCollection;

class SubCategoryPageExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return SubCategoryPage::all();
    }
}
