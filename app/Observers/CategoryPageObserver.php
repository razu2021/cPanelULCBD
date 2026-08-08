<?php

namespace App\Observers;

use App\Models\CategoryPage;
use Illuminate\Support\Facades\Cache;

class CategoryPageObserver
{
    /**
     * Handle the CategoryPage "created" event.
     */
    public function created(CategoryPage $categoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }

    /**
     * Handle the CategoryPage "updated" event.
     */
    public function updated(CategoryPage $categoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }

    /**
     * Handle the CategoryPage "deleted" event.
     */
    public function deleted(CategoryPage $categoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }

    /**
     * Handle the CategoryPage "restored" event.
     */
    public function restored(CategoryPage $categoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }

    /**
     * Handle the CategoryPage "force deleted" event.
     */
    public function forceDeleted(CategoryPage $categoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }
}
