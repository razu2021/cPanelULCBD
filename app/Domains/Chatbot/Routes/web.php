<?php

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




























/**=============== middleware groupe end here =========== */
});
/**=============== middleware groupe end here =========== */