<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Route;
class ModuleServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap services.
     */
    public function boot(): void
    {
        $domainpath = app_path('Domains');
        
        if(File::exists($domainpath)){
            $modules = File::directories($domainpath);
          

            foreach($modules as $module){
                $routefile = $module.'/Routes/web.php';
                if(File::exists($routefile)){
                    Route::middleware('web')->group($routefile);
                }
            }

        }
    }
}
