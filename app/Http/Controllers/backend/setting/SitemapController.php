<?php
namespace App\Http\Controllers\backend\setting;

use App\Http\Controllers\Controller;
use Spatie\Sitemap\Sitemap;
use Spatie\Sitemap\Tags\Url;
use App\Models\CategoryPage;
use App\Models\Service;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB; // উপরে এটি অ্যাড করুন

class SitemapController extends Controller{

    public function generateSitemap() {
        $path = public_path('sitemap.xml');
        $sitemap = Sitemap::create();

        // হোম পেজ
        $sitemap->add(Url::create('/')->setPriority(1.0));

        // get category from category database 
        $categories = DB::table('category_pages')->select('url','id')->get();
        //=================================  category sub category childcategoy =======================================
        foreach ($categories as $category) {
            // ------------- create category sitemap --------
            $sitemap->add(Url::create("/{$category->url}")->setPriority(0.9));

            // get subcategory from subcategory databse relaton with category id 
            $subcategorys = DB::table('sub_category_pages')->where('category_id',$category->id)->select('url','id')->get();

            foreach( $subcategorys as $sub){
                // ------------- create category sitemap --------
                $sitemap->add(Url::create("/{$category->url}/$sub->url")->setPriority(0.8));

                //------------------
                $childcategorys = DB::table('child_category_pages')->where('subcategory_id',$sub->id ?? 0)->select('url')->get();

                //----------- 
                foreach($childcategorys as $child){
                    $sitemap->add(Url::create("/{$category->url}/$sub->url/$child->url")->setPriority(0.7));

                }
            }
        }

        //=================================  category sub category childcategoy =======================================



        /**
         * =============================================================
         * create other page site map here 
         * =============================================================================
         */

        $services = DB::table('services')->select('id','url')->get();
        foreach($services as $service){
            $sitemap->add(Url::create("/service/details/{$service->id}/{$service->url}")->setPriority(0.8));
        }
        // ===================    sevice url end here ======================


        $blogs = DB::table('blogs')->select('id','url')->get();
        foreach($blogs as $blog){
            $sitemap->add(Url::create("/blog/details/{$blog->id}/{$blog->url}")->setPriority(0.8));
        }
        // ===================    blog url end here ======================

        $events = DB::table('events')->select('id','url')->get();
        foreach($events as $event){
            $sitemap->add(Url::create("/event/details/{$event->id}/{$event->url}")->setPriority(0.8));
        }
        // ===================    blog url end here ======================
        $posts = DB::table('posts')->select('id','url')->get();
        foreach($posts as $post){
            $sitemap->add(Url::create("/post/details/{$post->id}/{$post->url}")->setPriority(0.8));
        }
        // ===================    blog url end here ======================
        $newss = DB::table('news')->select('id','url')->get();
        foreach($newss as $news){
            $sitemap->add(Url::create("/news/details/{$news->id}/{$news->url}")->setPriority(0.8));
        }
        // ===================    blog url end here ======================

        $promots = DB::table('promots')->select('id','url')->get();
        foreach($promots as $promot){
            $sitemap->add(Url::create("/promot/details/{$promot->id}/{$promot->url}")->setPriority(0.8));
        }
        // ===================    promot url end here ======================
        $protflios = DB::table('protfolios')->select('id','url')->get();
        foreach($protflios as $protfolio){
            $sitemap->add(Url::create("/protfolio/details/{$protfolio->id}/{$protfolio->url}")->setPriority(0.8));
        }
        // ===================    promot url end here ======================

        $casestudy = DB::table('casestudies')->select('id','url')->get();
        foreach($casestudy as $case){
            $sitemap->add(Url::create("/case-study/details/{$case->id}/{$case->url}")->setPriority(0.8));
        }
        // ===================    promot url end here ======================
        $countys = DB::table('countrydestinations')->select('id','url')->get();
        foreach($countys as $county){
            $sitemap->add(Url::create("/our-preferable-country/details/{$county->id}/{$county->url}")->setPriority(0.8));
        }
        // ===================    promot url end here ======================
        $teams = DB::table('teams')->select('id','url')->get();
        foreach($teams as $team){
            $sitemap->add(Url::create("/meet-our-expertise/details/{$team->id}/{$team->url}")->setPriority(0.8));
        }
        // ===================    promot url end here ======================





           















        $sitemap->writeToFile($path);
        return "Done!";
    }

}