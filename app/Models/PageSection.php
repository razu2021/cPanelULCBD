<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\Hero;
use App\Traits\CacheBuster;
use App\Traits\HandleMorphDelete;
use Illuminate\Support\Facades\Log;
class PageSection extends Model
{
    use SoftDeletes , HandleMorphDelete,CacheBuster;

    protected $casts = [
    'payload_json' => 'array',
    ];
    protected $primaryKey = 'id';
    protected $guarded = [];

    public $cascadeRelations = ['postSection'];
    // --------- 

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id', 'id');
    }

    public function editor()
    {
        return $this->belongsTo(User::class, 'editor_id', 'id');
    }
    


    //=== define Relationship with Section Content model  start here =========
    public function aboutSection(){
        return $this->hasMany(About::class,'page_section_id','id')->with(['features' =>function($q){$q->active()->ordered();}])->where('public_status', 1)->orderBy('order','desc');
    }
    public function blogSection(){
        return $this->hasMany(Blog::class,'page_section_id','id')->active()->ordered();
    }
    public function breadcrumbSection(){
        return $this->hasMany(Breadcrumb::class,'page_section_id','id')->active()->ordered();
    }
    public function casestudySection(){
        return $this->hasMany(Casestudy::class,'page_section_id','id')->active()->ordered();
    }
    public function countrydestinationSection(){
        return $this->hasMany(Countrydestination::class,'page_section_id','id')->active()->ordered();
    }
    public function ctaSection(){
        return $this->hasMany(Cta::class,'page_section_id','id')->active()->ordered();
    }
    public function eventSection(){
        return $this->hasMany(Event::class,'page_section_id','id')->active()->ordered();
    }
    public function faqSection(){
        return $this->hasMany(Faq::class,'page_section_id','id')->active()->ordered();
    }
    public function heroSection(){
        return $this->hasMany(Hero::class,'page_section_id','id')->active()->ordered();
    }
    public function imagegallerySection(){
        return $this->hasMany(Imagegallery::class,'page_section_id','id')->active()->ordered();
    }
    public function newsSection(){
        return $this->hasMany(News::class,'page_section_id','id')->active()->ordered();
    }
    public function postSection(){
        return $this->hasMany(Post::class,'page_section_id','id')->active()->ordered();
    }
    public function partnerSection(){
        return $this->hasMany(Partner::class,'page_section_id','id')->active()->ordered();
    }
    public function protfoliioSection(){
        return $this->hasMany(Protfolio::class,'page_section_id','id')->active()->ordered();
    }
    public function promotSection(){
        return $this->hasMany(Promot::class,'page_section_id','id')->active()->ordered();
    }
    public function roadmapSection(){
        return $this->hasMany(Roadmap::class,'page_section_id','id')->active()->ordered();
    }
    public function sectionxSection(){
        return $this->hasMany(sectionx::class,'page_section_id','id')->active()->ordered();
    }
    public function serviceSection(){
        return $this->hasMany(Service::class,'page_section_id','id')->active()->ordered();
    }
    public function teamSection(){
        return $this->hasMany(Team::class,'page_section_id','id')->active()->ordered();
    }
    public function testimonialSection(){
        return $this->hasMany(Testimonial::class,'page_section_id','id')->active()->ordered();
    }
    public function videogallerySection(){
        return $this->hasMany(Videogallery::class,'page_section_id','id')->active()->ordered();
    }
    public function whychooseusSection(){
        return $this->hasMany(Whychooseus::class,'page_section_id','id')->with(['features' =>function($q){$q->active()->ordered();}])->active()->ordered();
    }

    protected array $sectionRelations = [
        'about_manage' => 'aboutSection',
        'blog_manage' => 'blogSection',
        'breadcrumb_manage' => 'breadcrumbSection',
        'casestudy_manage' => 'casestudySection',
        'cta_manage' => 'ctaSection',
        'countrydestination_manage' => 'countrydestinationSection',
        'event_manage' => 'eventSection',
        'faq_manage' => 'faqSection',
        'hero_manage' => 'heroSection',
        'imagegallery_manage' => 'imagegallerySection',
        'news_manage' => 'newsSection',
        'globalsection_manage' => 'sectionxSection',
        'post_manage' => 'postSection',
        'partner_manage' => 'partnerSection',
        'protfolio_manage' => 'protfoliioSection',
        'promot_manage' => 'promotSection',
        'roadmap_manage' => 'roadmapSection',
        'service_manage' => 'serviceSection',
        'team_manage' => 'teamSection',
        'testimonial_manage' => 'testimonialSection',
        'videogallery_manage' => 'videogallerySection',
        'whychooseus_manage' => 'whychooseusSection',

        // future 50+ models
    ];

    public function getDynamicRelationName()
    {
        return $this->sectionRelations[$this->dynamic_route] ?? null;
    }    

    public function getContentsAttribute()
    {

        $relation = $this->sectionRelations[$this->dynamic_route] ?? null;
       
        if (!$relation || !method_exists($this, $relation)) {
            return collect(); // empty collection if no relation
        }

        if (!$this->relationLoaded($relation)) {
            $this->load($relation); // eager load if not already loaded
        }

     
  
        return $this->$relation;

      
    }
        
   















    //=== define Relationship with Section Content model ->>>>>>>> emd here =========




    //--------------- Relationship with sub category model 

    public function subCategory(){
        return $this->hasMany(SubCategoryPage::class,'category_id','id');
    }


    public function sectionable()
    {
        return $this->morphTo();
    }
    
    
    //---category page relationship 
    public function isCategory(){
        return $this->sectionable_type === \App\Models\CategoryPage::class;
    }

    //---category page relationship 
    public function isSubCategory(){
        return $this->sectionable_type === \App\Models\SubCategoryPage::class;
    }
    //---category page relationship 
    public function isChildCategory(){
        return $this->sectionable_type === \App\Models\ChildCategoryPage::class;
    }









}
