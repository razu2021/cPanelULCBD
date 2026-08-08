<?php

namespace App\Providers;

use App\Models\AnaliticsTracking;
use App\Models\Announcment;
use App\Models\CategoryPage;
use App\Models\Copyright;
use App\Models\Customcss;
use App\Models\Customescript;
use App\Models\Managefooter;
use App\Models\Manageheader;
use App\Models\Preloader;
use App\Models\SiteAddress;
use App\Models\SiteEmail;
use App\Models\SiteInfo;
use App\Models\SitePhone;
use App\Models\SiteSocial;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\View;

class DataServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        

    /**
     * ===========================
     * ============== Share data globaly for all view vlade, or component or partials ============
     * =============================
     */
    $frontendData = cache()->rememberForever('global_frontend_site_data', function () {
        $csripts =  Customescript::where('public_status',1)->orderBy('order','ASC')->get(['custom_script','type']);
        return [
            'manageheader' => Manageheader::where('public_status',1)->orderBy('order','ASC')->get(),
            'managefooter' => Managefooter::where('public_status',1)->orderBy('order','ASC')->get(),
            'customscript'  => [
                'header_script' => $csripts->where('type', 'header')->pluck('custom_script')->implode("\n"),
                'footer_script' => $csripts->where('type', 'footer')->pluck('custom_script')->implode("\n"),
            ],
            'customcss'    => Customcss::where('public_status',1)->orderBy('order','ASC')->pluck('custom_css')->implode("\n"),
            'preloader'    => Preloader::where('public_status',1)->first(['type','title','thumbnail']),
            'analitics'    => AnaliticsTracking::where('public_status',1)->get(['key','value']),
            'announcements'  => Announcment::where('public_status',1)->first(['type','heading','title','description','thumbnail']),
            'sitesocials' => SiteSocial::where('public_status',1)->get(['type','title','url','icon']),
            'siteaddress' => SiteAddress::where('public_status',1)->get(['type','address','title','description','google_map']),
            'sitephones' =>  SitePhone::where('public_status',1)->get(['type','phone','title','description']),
            'siteemails' => SiteEmail::where('public_status',1)->get(['type','email','title','description']),
            'siteinfo' => SiteInfo::where('public_status',1)->first(),
            'copyright' => Copyright::where('public_status',1)->first(['receved_by','design_by','receiver_url','designer_url','receiver_icon','designer_icon']),
            'categorys' => CategoryPage::with([
                    'subCategory' => function ($q) {
                        $q->active()
                        ->ordered()
                        ->with([
                            'childCategory' => function ($q2) {
                                $q2->active()
                                    ->ordered();
                            }
                        ]);
                    }
                ])->whereNotIn('url', ['index', 'home'])->active()->ordered()->get()
        ];
    });


view()->share($frontendData);



        // view::composer('*',function($view){
        //     /**======== header cache  =========== */
        //     $manageheader = cache()->rememberForever('manageheader',function(){
        //         return Manageheader::where('public_status',1)->orderBy('order','ASC')->get();
        //     });

        //     /**======== Footer cache  =========== */
        //     $managefooter = cache()->rememberForever('managefooter',function(){
        //         return Managefooter::where('public_status',1)->orderBy('order','ASC')->get();
        //     });

        //     /**======== Custom Script cache  =========== */
        //     $customscript = cache()->rememberForever('customscript',function(){
         
        //        $csripts =  Customescript::where('public_status',1)->orderBy('order','ASC')->get(['custom_script','type']);
        //        return [
        //             'header_script' => $csripts->where('type','header')->pluck('custom_script')->implode("\n"),
        //             'footer_script' => $csripts->where('type','footer')->pluck('custom_script')->implode("\n"),
        //        ];
        //     });

        //     /**======== Custom Script cache  =========== */
        //     $customcss = cache()->rememberForever('customscss',function(){
        //         return Customcss::where('public_status',1)->orderBy('order','ASC')->pluck('custom_css')->implode("\n");
        //     });
           
        //     /**======== Footer cache  =========== */
        //     $preloader = cache()->rememberForever('preloaders',function(){
        //         return Preloader::where('public_status',1)->first(['type','title','thumbnail']);
        //     });

        //     /**======== Analitics & Tracking  cache  =========== */
        //     $analitics = cache()->rememberForever('AnaliticsTracking',function(){
        //         return AnaliticsTracking::where('public_status',1)->get(['key','value']);
        //     });
            

        //     /**======== Site Social cache  =========== */
        //     $sitesocials = cache()->rememberForever('SiteSocial',function(){
        //         return SiteSocial::where('public_status',1)->get(['type','title','url','icon']);
        //     });
        //     /**======== Site address cache  =========== */
        //     $siteaddress = cache()->rememberForever('siteaddress',function(){
        //         return SiteAddress::where('public_status',1)->get(['type','address','title','description','google_map']);
        //     });
            
        //     /**======== Site phone cache  =========== */
        //     $sitephones = cache()->rememberForever('sitephone',function(){
        //         return SitePhone::where('public_status',1)->get(['type','phone','title','description']);
        //     });
        //     /**======== Site Email cache  =========== */
        //     $siteemails = cache()->rememberForever('siteemail',function(){
        //         return SiteEmail::where('public_status',1)->get(['type','email','title','description']);
        //     });

        //     /**======== Site Email cache  =========== */
        //     $siteinfo = cache()->rememberForever('siteinfo',function(){
        //         return SiteInfo::where('public_status',1)->first();
        //     });
        //     /**======== Site Announcement cache  =========== */
        //     $announcements = cache()->rememberForever('announcement',function(){
        //         return Announcment::where('public_status',1)->first(['type','heading','title','description','thumbnail']);
        //     });
        //     /**======== Site Announcement cache  =========== */
        //     $copyright = cache()->rememberForever('copyright',function(){
        //         return Copyright::where('public_status',1)->first(['receved_by','design_by','receiver_url','designer_url','receiver_icon','designer_icon']);
        //     });
            


        //     /**
        //      * =========================================================
        //      * category subcategory and childcategory cache 
        //      * =========================================================
        //      */
        //     $categorys = cache()->rememberForever('allCategorys', function () {
        //         return CategoryPage::with([
        //             'subCategory' => function ($q) {
        //                 $q->active()
        //                 ->ordered()
        //                 ->with([
        //                     'childCategory' => function ($q2) {
        //                         $q2->active()
        //                             ->ordered();
        //                     }
        //                 ]);
        //             }
        //         ])->whereNotIn('url', ['index', 'home'])->active()->ordered()->get();
        //     });




        //     // ====== share data globaly================
        //     $view->with([
        //         'manageheader' => $manageheader,
        //         'managefooter' => $managefooter,
        //         'customscript' => $customscript,
        //         'customcss' => $customcss,
        //         'preloader' => $preloader,
        //         'analitics' => $analitics,
        //         'categorys' => $categorys,
        //         'sitesocials' => $sitesocials,
        //         'siteaddress' => $siteaddress,
        //         'sitephones' => $sitephones,
        //         'siteemails' => $siteemails,
        //         'siteinfo' => $siteinfo,
        //         'announcements' => $announcements,
        //         'copyright' => $copyright,
        //     ]);

        // });


    /**
     * ===========================
     * ============== Share data globaly for all view vlade, or component or partials ============
     * =============================
     */







    }
}
