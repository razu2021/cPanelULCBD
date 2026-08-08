<?php
namespace App\Models;

use App\Observers\CategoryPageObserver;
use App\Traits\CacheBuster;
use App\Traits\HandleMorphDelete;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
#[ObservedBy([CategoryPageObserver::class])]
class CategoryPage extends Model
{

    use SoftDeletes,CacheBuster;
    use HandleMorphDelete;

    protected $primaryKey = 'id';
    protected $guarded = [];

    public $cascadeRelations = ['subCategory'];

    // --------- 

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id', 'id');
    }

    public function editor()
    {
        return $this->belongsTo(User::class, 'editor_id', 'id');
    }
    

    //--------------- Relationship with sub category model 

    public function subCategory(){
        return $this->hasMany(SubCategoryPage::class,'category_id','id')->active()->ordered();
    }



    /**===========  section get === */

    public function getCategorySection(){
        return $this->morphMany(PageSection::class, 'sectionable')->where('public_status',1)->orderBy('order','asc');
    }


    // get active data 
    public function scopeActive($query){
        return $query->where('public_status',1);
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
