<?php

namespace App\Exports;

use App\Models\ChildCategoryPage;
use Maatwebsite\Excel\Concerns\FromCollection;

class ChildCategoryPageExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return ChildCategoryPage::all();
    }
}
