<?php

use App\Http\Controllers\AjaxController;
use App\Http\Controllers\frontend\frontendController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Events\TestMassages;


Route::get('/fire', function () {
    broadcast(new TestMassages("সাফল্যের সাথে ডাটা আসলো!"));
    return "ইভেন্ট পাঠানো হয়েছে!";
});

Route::get('/',[frontendController::class , 'index'])->name('index');

Route::get('/html/sitemap',[frontendController::class , 'htmlSitemap'])->name('html_sitemap');

Route::get('site/manage/users/dashboard/', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified','role_check:user'])->name('dashboard');



// ========= section design route 
Route::get('/section',[frontendController::class , 'section'])->name('section');

// --------- otehr route file 
require __DIR__.'/backend.php';
require __DIR__.'/sitesetting.php';
require __DIR__.'/api.php';
require __DIR__.'/settings.php';






/**
 * ===================================================
 *  Details page route start here =
 * ===================================================
 */

Route::controller(frontendController::class)->name('details.')->group(function(){
    Route::get('service/details/{id}/{slug}','serviceDetails')->name('service');
    Route::get('blog/details/{id}/{slug}','blogDetails')->name('blog');
    Route::get('event/details/{id}/{slug}','eventDetails')->name('event');
    Route::get('post/details/{id}/{slug}','postDetails')->name('post');
    Route::get('news/details/{id}/{slug}','newsDetails')->name('news');
    Route::get('promot/details/{id}/{slug}','promotDetails')->name('promot');
    Route::get('protfolio/details/{id}/{slug}','protfoliosDetails')->name('protfolios');
    Route::get('case-study/details/{id}/{slug}','casestudyDetails')->name('casestudy');
    Route::get('our-preferable-country/details/{id}/{slug}','countryDetails')->name('country');
    Route::get('section/details/{id}/{slug}','sectionsxDetails')->name('sectionx');
    Route::get('team/details/{id}/{slug}','teamDetails')->name('team');
});




// home route start here =========
 
 
    Route::get('{category}',[frontendController::class , 'categoryPage'])->name('categorypage');

    // --- Sub category page route start here -----
    Route::get('{category}/{subcategory}',[frontendController::class , 'subCategoryPage'])->name('sub_categorypage');


    // --- Sub category page route start here -----
    Route::get('{category}/{subcategory}/{childcategory}',[frontendController::class , 'childCategoryPage'])->name('child_CategoryPage');







// Route::controller(AjaxController::class)->prefix('ajax/')->name('ajax_data.')->group(function(){
//     Route::get('all','index')->name('all');
//     Route::get('add','add')->name('add');
//     Route::get('view','view')->name('view');
//     Route::get('edit','edit')->name('edit');
//     Route::post('submit','insert')->name('submit');
//     Route::post('update','update')->name('update');
// });














//--- custome route 












