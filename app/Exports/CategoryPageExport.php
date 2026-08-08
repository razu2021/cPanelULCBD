<?php

namespace App\Exports;

use App\Models\CategoryPage;
use Maatwebsite\Excel\Concerns\FromCollection;
use Maatwebsite\Excel\Concerns\WithHeadings;
class CategoryPageExport implements FromCollection , WithHeadings
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return CategoryPage::all();
    }


    public function headings(): array
    {
        return [
            'ID',           // 1st column heading
            'name',  // 4th column heading
            'url',  // 4th column heading
            'title',  // 4th column heading
            'description',  // 4th column heading
            'order',  // 4th column heading

            'Slug', 
            'careator', 
            'editor', 
            'status', 
            'public_status', 
            'careated_at', 
            'updated_at', 
            
        ];
    }
}
