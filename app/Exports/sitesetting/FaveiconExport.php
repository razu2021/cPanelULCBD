<?php

namespace App\Exports\sitesetting;

use App\Models\Faveicon;
use Maatwebsite\Excel\Concerns\FromCollection;

class FaveiconExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Faveicon::all();
    }
}
