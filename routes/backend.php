<?php

use App\Http\Controllers\backend\AdminController;
use App\Http\Controllers\backend\cms\manage\ServiceController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\backend\cms\CategoryPageController;
use App\Http\Controllers\backend\cms\ChildCategoryPageController;
use App\Http\Controllers\backend\cms\manage\AboutController;
use App\Http\Controllers\backend\cms\manage\BlogController;
use App\Http\Controllers\backend\cms\manage\BreadcrumbController;
use App\Http\Controllers\backend\cms\manage\CasestudyController;
use App\Http\Controllers\backend\cms\manage\CountrydestinationController;
use App\Http\Controllers\backend\cms\manage\CtaController;
use App\Http\Controllers\backend\cms\manage\EventController;
use App\Http\Controllers\backend\cms\manage\FaqController;
use App\Http\Controllers\backend\cms\manage\FeatureController;
use App\Http\Controllers\backend\cms\manage\heroController;
use App\Http\Controllers\backend\cms\manage\ImagegalleryController;
use App\Http\Controllers\backend\cms\manage\NewsController;
use App\Http\Controllers\backend\cms\manage\PartnerController;
use App\Http\Controllers\backend\cms\manage\postController;
use App\Http\Controllers\backend\cms\manage\PromotController;
use App\Http\Controllers\backend\cms\manage\ProtfolioController;
use App\Http\Controllers\backend\cms\manage\RoadmapController;
use App\Http\Controllers\backend\cms\manage\sectionxController;
use App\Http\Controllers\backend\cms\manage\TeamController;
use App\Http\Controllers\backend\cms\manage\TestimonialController;
use App\Http\Controllers\backend\cms\manage\VideoGalleryController;
use App\Http\Controllers\backend\cms\manage\WhychooseusController;
use App\Http\Controllers\backend\cms\pageManagementController;
use App\Http\Controllers\backend\cms\PageSectionController;
use App\Http\Controllers\backend\cms\SubCategoryPageController;

/**
 * =========================
 * ============================== Route Group with Middleware =============
 * =============
 */
Route::middleware(['auth','role_check:admin'])->group(function(){
/**
* ======== middleware group start here ====================================
*/

Route::prefix('site/manage/admin/')->group(function(){
    Route::get('/dashboard',[AdminController::class,'adminDashboard'])->name('admin_dashboard');

});



/**=========== page management route start here ========== */
Route::controller(pageManagementController::class)->prefix('admin/dashboad/manage/pages/')->name('all_pages.')->group(function(){
    Route::get('category','categoryPage')->name('categorypage');
    Route::get('category/page/{section}','categoryPageSection')->name('categorypage_section');
    //--------- subcategory route start  here --------
    Route::get('sub-category','subCategoryPage')->name('Subcategorypage');
    Route::get('sub-category/page/{section}','subCategoryPageSection')->name('sub_categorypage_section');
    //--------- subcategory route start  here --------
    Route::get('child-category','childCategoryPage')->name('Child_Category_page');
    Route::get('child-category/page/{section}','childCategoryPageSection')->name('child_categorypage_section');



});












/**============  Category Page Route Start here =========== */
Route::controller(CategoryPageController::class)->prefix('admin/dashboad/category/category-page/')->name('category_page.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============  Category Page Route Start here =========== */
Route::controller(SubCategoryPageController::class)->prefix('admin/dashboad/category/sub-category-page/')->name('sub_category_page.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============  Category Page Route Start here =========== */
Route::controller(ChildCategoryPageController::class)->prefix('admin/dashboad/category/child-category-page/')->name('child_category_page.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
    Route::get('get/subcategory/{categoryId}','getSubcategory')->name('getsubcategory');
});
/**============ Page section manage Route Start here =========== */
Route::controller(PageSectionController::class)->prefix('admin/dashboad/manage/page-section/')->name('page_section.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');


    Route::get('get/category/page','getCategory')->name('getCategory');
    Route::get('get/subcategory/page','getSubcategory')->name('getsubcategory');
    Route::get('get/childcategory/page','getChildcategory')->name('getchildcategory');

    //change theme section 
    Route::get('change/section/theme/{id}/{slug}','changeTheme')->name('changeTheme');
    Route::patch('theme/update','themeUpdate')->name('theme_update');



});

  


/**
 * ===================================================================================
 * -=========================== Manage content route start here ==============
 * ====================================================================================
 */



/**============ Hero section manage Route Start here =========== */
Route::controller(AboutController::class)->prefix('admin/dashboad/manage/section/about')->name('about_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ Hero section manage Route Start here =========== */
Route::controller(heroController::class)->prefix('admin/dashboad/manage/section/hero')->name('hero_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ Breadcrumb section manage Route Start here =========== */
Route::controller(BreadcrumbController::class)->prefix('admin/dashboad/manage/section/breadcrumb')->name('breadcrumb_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ Page section manage Route Start here =========== */
Route::controller(postController::class)->prefix('admin/dashboad/manage/section/post/')->name('post_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});

/**============ Blog Route Start here =========== */
Route::controller(BlogController::class)->prefix('admin/dashboad/manage/section/blog/')->name('blog_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ Events Route Start here =========== */
Route::controller(EventController::class)->prefix('admin/dashboad/manage/section/events/')->name('event_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ News Route Start here =========== */
Route::controller(NewsController::class)->prefix('admin/dashboad/manage/section/news/')->name('news_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ Case study Route Start here =========== */
Route::controller(CasestudyController::class)->prefix('admin/dashboad/manage/section/casestudy/')->name('casestudy_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ protfolio Route Start here =========== */
Route::controller(ProtfolioController::class)->prefix('admin/dashboad/manage/section/protfolio/')->name('protfolio_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ protfolio Route Start here =========== */
Route::controller(ServiceController::class)->prefix('admin/dashboad/manage/section/service/')->name('service_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ protfolio Route Start here =========== */
Route::controller(CountrydestinationController::class)->prefix('admin/dashboad/manage/section/country/')->name('countrydestination_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ Roadmap Route Start here =========== */
Route::controller(RoadmapController::class)->prefix('admin/dashboad/manage/section/roadmap/')->name('roadmap_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ testimonials Route Start here =========== */
Route::controller(TestimonialController::class)->prefix('admin/dashboad/manage/section/testimonial/')->name('testimonial_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});

/**============ whychoose us  Route Start here =========== */
Route::controller(WhychooseusController::class)->prefix('admin/dashboad/manage/section/whychoose/')->name('whychooseus_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ whychoose us  Route Start here =========== */
Route::controller(PromotController::class)->prefix('admin/dashboad/manage/section/promot/')->name('promot_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ Partner  Route Start here =========== */
Route::controller(PartnerController::class)->prefix('admin/dashboad/manage/section/partner/')->name('partner_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ Faq  Route Start here =========== */
Route::controller(FaqController::class)->prefix('admin/dashboad/manage/section/faq/')->name('faq_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ CTA  Route Start here =========== */
Route::controller(CtaController::class)->prefix('admin/dashboad/manage/section/cta/')->name('cta_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ team  Route Start here =========== */
Route::controller(TeamController::class)->prefix('admin/dashboad/manage/section/team/')->name('team_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ team  Route Start here =========== */
Route::controller(VideoGalleryController::class)->prefix('admin/dashboad/manage/section/video-gallery/')->name('videogallery_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});
/**============ team  Route Start here =========== */
Route::controller(ImagegalleryController::class)->prefix('admin/dashboad/manage/section/image-gallery/')->name('imageallery_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});




/**============ Global section content manage Route Start here =========== */
Route::controller(sectionxController::class)->prefix('admin/dashboad/manage/section/section-x-content/')->name('globalsection_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});


/**============ Features section content manage Route Start here =========== */
Route::controller(FeatureController::class)->prefix('admin/dashboad/manage/section/features/')->name('sectionfeature_manage.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add/{id}/{slug}/{model}','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update','update')->name('update');
    Route::get('active/{id}/{slug}','active')->name('active');
    Route::get('deactive/{id}/{slug}','deactive')->name('deactive');
    Route::delete('softdelete/{id}','softdelete')->name('softdelete');
    Route::delete('delete/{id}','delete')->name('delete');
    Route::get('recycle','recycle')->name('recycle');
    Route::post('bulk/action' ,'bulkAction')->name('bulkAction');
    Route::get('export/single/pdf/{id}/{slug}','exportPdf')->name('single_pdf_export');
    Route::get('export/excel','export_excel')->name('export_excel');
    Route::get('export/csv','export_csv')->name('export_csv');
    Route::get('export/pdf','export_pdf')->name('export_pdf');
});












/**=============== middleware groupe end here =========== */
});
/**=============== middleware groupe end here =========== */


