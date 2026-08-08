<?php

use App\Http\Controllers\backend\AdminController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Http\Controllers\backend\cms\CategoryPageController;


/**
 * =========================
 * ============================== Route Group with Middleware =============
 * =============
 */
Route::middleware('auth')->group(function(){
/**
* ======== middleware group start here ====================================
*/

Route::get('admin/dashboard',[AdminController::class,'adminDashboard'])->name('admin_dashboard');






Route::controller(CategoryPageController::class)->prefix('admin/dashboad/category/category-page/')->name('category_page.')->group(function(){
    Route::get('all',[CategoryPageController::class ,'index'])->name('all');
    Route::get('add',[CategoryPageController::class ,'add'])->name('add');
    Route::get('view/{id}/{slug}',[CategoryPageController::class ,'view'])->name('view');
    Route::get('edit/{id}/{slug}',[CategoryPageController::class ,'edit'])->name('edit');
    Route::post('submit',[CategoryPageController::class ,'insert'])->name('submit');
    Route::post('update',[CategoryPageController::class ,'update'])->name('update');
    Route::get('active/{id}/{slug}',[CategoryPageController::class ,'active'])->name('active');
    Route::get('deactive/{id}/{slug}',[CategoryPageController::class ,'deactive'])->name('deactive');
    Route::delete('softdelete/{id}',[CategoryPageController::class ,'softdelete'])->name('softdelete');
    Route::delete('delete/{id}',[CategoryPageController::class ,'delete'])->name('delete');
    Route::get('recycle',[CategoryPageController::class ,'recycle'])->name('recycle');
    
    Route::post('bulk/action',[CategoryPageController::class ,'bulkAction'])->name('bulkAction');
    //----------  Export route start here 
     Route::get('export/single/pdf/{id}/{slug}',[CategoryPageController::class ,'exportPdf'])->name('single_pdf_export');
     Route::get('export/excel',[CategoryPageController::class ,'export_excel'])->name('export_excel');
     Route::get('export/csv',[CategoryPageController::class ,'export_csv'])->name('export_csv');
     Route::get('export/pdf',[CategoryPageController::class ,'export_pdf'])->name('export_pdf');

});















/**=============== middleware groupe end here =========== */
});
/**=============== middleware groupe end here =========== */


