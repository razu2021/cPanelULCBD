<?php

use App\Http\Controllers\backend\setting\apis\apiController;
use App\Http\Controllers\gateway\paymentController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


/**============  Category Page Route Start here =========== */
Route::controller(paymentController::class)->prefix('payment/')->name('payment.')->group(function(){
    Route::get('checkout','checkoutPage')->name('checkout');
    Route::post('process','paymentProcess')->name('process');
});