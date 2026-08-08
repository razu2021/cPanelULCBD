<?php

namespace App\Exports\sitesetting;

use App\Models\Tramscondition;
use Maatwebsite\Excel\Concerns\FromCollection;

class TermsConditionExport implements FromCollection
{
    /**
    * @return \Illuminate\Support\Collection
    */
    public function collection()
    {
        return Tramscondition::all();
    }
}
