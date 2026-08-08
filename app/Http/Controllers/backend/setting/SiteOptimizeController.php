<?php

namespace App\Http\Controllers\backend\setting;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Log;
class SiteOptimizeController extends Controller
{
    /**
 * ==============================================================
 * chache settings
 * ==============================================================
 */
    public function cacheSetting(){
        return Inertia::render('backend/sitesetting/maintenance/cache_setting');
    }


    public function systemCacheClear(){
        try{
            Artisan::call('config:clear');
            Artisan::call('cache:clear');
            Artisan::call('view:clear');
            Artisan::call('route:clear');
            Artisan::call('optimize:clear');

            $cachePath = storage_path('framework/cache/data');
            if (File::isDirectory($cachePath)) {
                // Folder-er vitorer shob file/folder delete kora kintu 'data' folder-ti rakha
                File::cleanDirectory($cachePath);
            }

            if (function_exists('opcache_reset')) {
                opcache_reset(); // PHP-er opcache reset korbe
            }

            flash()->success('Weldone ! Now your System is Fresh!');
            return back();

        }catch(\Exception $e){
            flash()->error('OPPS! Something went wrong: ' . $e->getMessage());
            return back();
        }


    }


public function systemOptimize() {
    try {
        // Step 1: Age shob clear korun jate kono conflict na thake
        Artisan::call('optimize:clear'); 

        // Step 2: Production cache run korun
        Artisan::call('config:cache');
        Artisan::call('route:cache');
        Artisan::call('view:cache');

        flash()->success('Success! Your site is now optimized for Production.');

        // Step 3: Session manually save korun jate redirect kaj kore
        session()->save();

        return back();

    } catch (\Exception $e) {
        Log::error("Optimization Error: " . $e->getMessage());
        flash()->error('Could not optimize system.');
        return back();
    }
}





public function routeCache(){
    try{
        Artisan::call('route:cache');
        flash()->success('Success! Your Route is now optimized for Production.');
        return back();
    }catch(\Exception $e){
        flash()->error('Could not optimize system.');
        return back();
    }
}

public function viewCache(){
    try{
        Artisan::call('view:cache');
        flash()->success('Success! Your View is now optimized for Production.');
        return back();
    }catch(\Exception $e){
        flash()->error('Could not optimize system.');
        return back();
    }
}

public function configCache(){
    try{
        Artisan::call('config:cache');
        flash()->success('Success! Config Cache Successfully !.');
        return back();
    }catch(\Exception $e){
        flash()->error('Could not optimize system.');
        return back();
    }
}




















}
