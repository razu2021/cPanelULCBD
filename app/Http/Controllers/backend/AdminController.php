<?php

namespace App\Http\Controllers\backend;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class AdminController extends Controller
{
    /**
     * ========= Admin Dashboard Function start  Here =======
     */

    public function adminDashboard(){

        return Inertia::render('admin/AdminDashboard',[]);
    }
}
