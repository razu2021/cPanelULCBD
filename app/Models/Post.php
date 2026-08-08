<?php

namespace App\Models;

use App\Traits\CacheBuster;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Post extends Model
{
    use SoftDeletes,CacheBuster;

    protected $primaryKey = 'id';
    protected $guarded = [];


    // --------- 

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id', 'id');
    }

    public function editor()
    {
        return $this->belongsTo(User::class, 'editor_id', 'id');
    }
    // get active data 
    public function scopeActive($query){
        return $query->where('public_status',1);
    }

    // get data by assending order 
    public function scopeOrdered($query){
        return $query->orderBy('order','asc');
    }



    // ------------ relations design with parent model pagesection model 
    public function pageSection(){
        return $this->belongsTo(PageSection::class,'page_section_id','id');
    }
}
