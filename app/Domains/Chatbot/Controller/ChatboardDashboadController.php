<?php

namespace App\Domains\Chatbot\Controller;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ChatboardDashboadController extends Controller
{
    /**
     * ====================================================
     * chat bot dashboad functionality start here 
     * ====================================================
     */
    public function dashboard(){
      
        return Inertia::render('backend/Chatbot/dashboard');
    }
}
