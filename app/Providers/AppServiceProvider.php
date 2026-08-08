<?php

namespace App\Providers;

use App\Models\CategoryPage;
use Illuminate\Support\Facades\View;
use Illuminate\Support\ServiceProvider;
use PhpOffice\PhpSpreadsheet\Calculation\Category;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        




        /**============ share frontend data ============== */

        // view::composer('layouts.frontend',function($view){
        //     $view->with([
        //         'categorys' => CategoryPage::with(['subCategory','subCategory.childCategory'])->whereNotIn('url',['index','home'])->where('public_status',1)->orderBy('order','asc')->get(),
                
        //     ]);
        // });





    }
}
