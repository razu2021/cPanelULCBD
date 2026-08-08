<?php

namespace App\Models;

use App\Observers\ChildCategoryPageObserver;
use App\Traits\CacheBuster;
use App\Traits\HandleMorphDelete;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
#[ObservedBy([ChildCategoryPageObserver::class])]
class ChildCategoryPage extends Model
{
    use SoftDeletes;
    use HandleMorphDelete;
    use CacheBuster;

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

    //----- category relationship --
       //----- category relationship --
    public function subcategory(){
        return $this->belongsTo(SubCategoryPage::class);
    }


    /**===========  section get === */

    public function getCategorySection(){
        return $this->morphMany(PageSection::class, 'sectionable')->where('public_status',1)->orderBy('order','asc');
    }

    // get active data 
    public function scopeActive($query){
        return $query->where('public_status',1)->where('is_nav',1);
    }
        // get data by assending order 
    public function scopeOrdered($query){
        return $query->orderBy('order','asc');
    }

    public function seo()
    {
        return $this->morphOne(Seo::class, 'seoable');
    }

}
