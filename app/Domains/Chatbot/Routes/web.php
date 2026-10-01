<?php

use App\Domains\Chatbot\Controller\ChatboardDashboadController;
use App\Domains\Chatbot\Controller\ChatbotConversationController;
use App\Domains\Chatbot\Controller\ChatbotIntentController;
use App\Domains\Chatbot\Controller\ChatbotIntentPhrasesController;
use App\Domains\Chatbot\Controller\ChatbotKnowledgeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Illuminate\Http\Request;

/**
 * =========================
 * ============================== Route Group with Middleware =============
 * =============
 */
Route::middleware(['auth','role_check:admin'])->group(function(){
/**
* ======== middleware group start here ====================================
*/


Route::get('site/manage/admin/chatbot/dashboad',[ChatboardDashboadController::class,'dashboard'])->name('chatboad.dashboad');




/**============  chatbot intent route start here =========== */
Route::controller(ChatbotIntentController::class)->prefix('site/manage/admin/chatbot/intent/')->name('chatbot_intent.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update/{id}/{slug}','update')->name('update');
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
/**============  chatbot intent route start here =========== */
Route::controller(ChatbotIntentPhrasesController::class)->prefix('site/manage/admin/chatbot/intent/phrases')->name('chatbot_intent_phrases.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update/{id}/{slug}','update')->name('update');
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
/**============  chatbot intent route start here =========== */
Route::controller(ChatbotKnowledgeController::class)->prefix('site/manage/admin/chatbot/knowledge')->name('chatbot_knowledge.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update/{id}/{slug}','update')->name('update');
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
/**============  chatbot conversation route start here =========== */
Route::controller(ChatbotConversationController::class)->prefix('site/manage/admin/chatbot/conversation')->name('chatbot_conversation.')->group(function(){
    Route::get('all','index')->name('all');
    Route::get('add','add')->name('add');
    Route::get('view/{id}/{slug}','view')->name('view');
    Route::get('edit/{id}/{slug}','edit')->name('edit');
    Route::post('submit','insert')->name('submit');
    Route::patch('update/{id}/{slug}','update')->name('update');
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