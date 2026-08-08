<?php

namespace App\Exports\sitesetting;

use App\Models\Preloader;
use Maatwebsite\Excel\Concerns\FromCollection;

class PreloaderExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Preloader::all();
    }
}
