<?php

namespace App\Http\Controllers\backend\setting\apis;

use App\Http\Controllers\Controller;
use App\Services\ApiManager;
use Illuminate\Http\Request;

class apiController extends Controller
{
    public function checkoutPage(){

        //$configs = ApiManager::allConfig();

        $configs = ApiManager::driver('CAPTCHA','recaptcha');
        dd($configs);
        return "test payment";
    }
}
