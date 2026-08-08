<?php

namespace App\Http\Controllers\frontend;

use App\Http\Controllers\Controller;
use App\Models\Blog;
use App\Models\Casestudy;
use App\Models\CategoryPage;
use App\Models\ChildCategoryPage;
use App\Models\Countrydestination;
use App\Models\Event;
use App\Models\News;
use App\Models\Post;
use App\Models\Promot;
use App\Models\Protfolio;
use App\Models\sectionx;
use App\Models\Service;
use App\Models\SubCategoryPage;
use App\Models\Team;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;

class frontendController extends Controller
{
    //---------- home page function start here 

    public function index(){
        $cacheKey = 'frontend_home_page_data';
        $category = Cache::rememberForever($cacheKey, function () {
            $data = CategoryPage::with(['seo','getCategorySection'])->active()->Ordered()->first();
            // ---------- call private function 
            
            return $this->loadPageSections($data);
        });
        


        // if (!$category) {
        //     return "No data found for 'home'.";
        // }

    
        return view('frontend.index',compact('category'));

    }



/**
 * ===============================================================
 * category page functionality start here -
 * ===============================================================
 */
    public function categoryPage($category) {
        $cacheKey = "frontend_page_{$category}";
        $categoryData = Cache::rememberForever($cacheKey, function () use ($category) {
            $data = CategoryPage::with(['seo', 'getCategorySection'])
            ->active()
            ->ordered()
            ->where('url', $category) // এখানে $category স্লাগটি কাজ করবে
            ->first();
            return $this->loadPageSections($data);
        });

        if (!$categoryData) {
            abort(404); // ডাটা না থাকলে ৪MD৪ পেজ দেখাবে
        }

     
        return view('frontend.category', ['category' => $categoryData]);
    }


    /**==
     * ============== Subcategory page functionality start here -=============
     * ======================
     */

    public function subCategoryPage($category,$subcategory){
        $cacheKey = "frontend_subcategory_{$category}_{$subcategory}";

        $subcategoryData = Cache::rememberForever($cacheKey,function() use ($category,$subcategory){
            $category = CategoryPage::where('url',$category)->first();
            if(!$category){
                return null;
            }

            $data = subCategoryPage::with(['seo','getCategorySection'])->where('category_id',$category->id)->where('url',$subcategory)->active()->ordered()->first();

            return $this->loadPageSections($data);

        });
       return view('frontend.category', ['subcategorys' => $subcategoryData,'category'=>$subcategoryData]);
    }





   /**==
     * ====================================================
     * child category page functionality start here 
     * ======================
     */

public function childCategoryPage($category, $subcategory, $childcategory) {
    $cacheKey = "frontend_childcategory_{$category}_{$subcategory}_{$childcategory}";

    $childcategoryData = Cache::rememberForever($cacheKey, function() use ($category, $subcategory, $childcategory) {
        $categoryData = CategoryPage::where('url', $category)->active()->first();
        if (!$categoryData) {
            return null;
        }

        $subcategoryData = SubCategoryPage::where('category_id', $categoryData->id)
            ->where('url', $subcategory)
            ->active()
            ->first();

        if (!$subcategoryData) {
            return null;
        }

        $data = ChildCategoryPage::with(['seo', 'getCategorySection'])
            ->where('subcategory_id', $subcategoryData->id)
            ->where('url', $childcategory)
            ->active()
            ->first();

        return $data ? $this->loadPageSections($data) : null;
    });
    if (!$childcategoryData) {
        abort(404);
    }

    return view('frontend.childcategory', [
        'childCategorys' => $childcategoryData,
        'category' => $childcategoryData 
    ]);
}

    


    /**
     * ===============================================================
     * All Details page functionality is start here 
     * ===============================================================
     */

    public function serviceDetails($id,$slug){
        $allservice = Service::where('public_status', 1)->where('id', '!=', $id)->inRandomOrder()->take(6)->get();
        $data = Service::where('id',$id)->where('url',$slug)->firstOrFail();
       
        return view('frontend.detailsPages.service_details',compact('data','allservice'));
    }
    // ================= service functionality end hre =================
    public function blogDetails($id,$slug){
        $all = Blog::where('public_status', 1)->where('id', '!=', $id)->inRandomOrder()->take(6)->get();
        $data = Blog::where('id',$id)->where('url',$slug)->firstOrFail();
        return view('frontend.detailsPages.blog_details',compact('data','all'));
    }
    // ================= service functionality end hre =================

    public function eventDetails($id,$slug){
        $all = Event::where('public_status', 1)->where('id', '!=', $id)->inRandomOrder()->take(6)->get();
        $data = Event::where('id',$id)->where('url',$slug)->firstOrFail();
       
        return view('frontend.detailsPages.event_details',compact('data','all'));
    }
    // ================= event functionality end hre =================
    public function postDetails($id,$slug){
        $all = Post::where('public_status', 1)->where('id', '!=', $id)->inRandomOrder()->take(6)->get();
        $data = Post::where('id',$id)->where('url',$slug)->firstOrFail();
        return view('frontend.detailsPages.post_details',compact('data','all'));
    }
    // ================= Post functionality end hre =================
    public function newsDetails($id,$slug){
        $all = News::where('public_status', 1)->where('id', '!=', $id)->inRandomOrder()->take(6)->get();
        $data = News::where('id',$id)->where('url',$slug)->firstOrFail();
        return view('frontend.detailsPages.news_details',compact('data','all'));
    }
    // ================= News functionality end hre =================
    public function promotDetails($id,$slug){
        $all = Promot::where('public_status', 1)->where('id', '!=', $id)->inRandomOrder()->take(6)->get();
        $data = Promot::where('id',$id)->where('url',$slug)->firstOrFail();
        return view('frontend.detailsPages.promot_details',compact('data','all'));
    }
    // ================= News functionality end hre =================

    public function casestudyDetails($id,$slug){
        $all = Casestudy::where('public_status', 1)->where('id', '!=', $id)->inRandomOrder()->take(6)->get();
        $data = Casestudy::where('id',$id)->where('url',$slug)->firstOrFail();
        return view('frontend.detailsPages.casestudy_details',compact('data','all'));
    }
    // ================= News functionality end hre =================

    public function countryDetails($id,$slug){
        $all = Countrydestination::where('public_status', 1)->where('id', '!=', $id)->inRandomOrder()->take(6)->get();
        $data = Countrydestination::where('id',$id)->where('url',$slug)->firstOrFail();
        return view('frontend.detailsPages.country_details',compact('data','all'));
    }
    // ================= News functionality end hre =================
    public function sectionxDetails($id,$slug){
        $all = sectionx::where('public_status', 1)->where('id', '!=', $id)->inRandomOrder()->take(6)->get();
        $data = sectionx::where('id',$id)->where('url',$slug)->firstOrFail();
        return view('frontend.detailsPages.sectionx_details',compact('data','all'));
    }
    // ================= News functionality end hre =================
    public function teamDetails($id,$slug){
        $all = Team::where('public_status', 1)->where('id', '!=', $id)->inRandomOrder()->take(6)->get();
        $data = Team::where('id',$id)->where('url',$slug)->firstOrFail();
        return view('frontend.detailsPages.team_details',compact('data','all'));
    }
    // ================= News functionality end hre =================



// ============= loaded page section private function start here ================
// ata ekta private function just page er section gulo load kora junno 

private function loadPageSections($data) {
    if ($data && $data->getCategorySection) {
        foreach ($data->getCategorySection as $section) {
            $relation = $section->getDynamicRelationName();
           
            if ($relation && method_exists($section, $relation)) {
                $section->load($relation);
            } 
        }
    }
    return $data;
}




// ======================================
// html sitemap function 
//==================================================

public function htmlSitemap(){

    $data = Cache::rememberForever('html_sitemap_data',function(){
        return[
            'blogs'=> Blog::where('public_status',1)->get(),
            'events' => Event::where('public_status',1)->get(),
            'posts' => Post::where('public_status',1)->get(),
            'newss' => News::where('public_status',1)->get(),
            'portfolios' => Protfolio::where('public_status',1)->get(),
            'promotes' => Promot::where('public_status',1)->get(),
            'casestudy' => Casestudy::where('public_status',1)->get(),
            'teams' => Team::where('public_status',1)->get(),
            'services' => Service::where('public_status',1)->get()
        ];
    });

    return view('frontend.html_sitemap',compact('data'));

}



    public function section(){
        return view('frontend.section');
    }

}
