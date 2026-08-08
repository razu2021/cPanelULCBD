<?php

namespace App\Observers;

use App\Models\SubCategoryPage;
use Illuminate\Support\Facades\Cache;
class SubCategoryPageObserver
{
    /**
     * Handle the SubCategoryPage "created" event.
     */
    public function created(SubCategoryPage $subCategoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }

    /**
     * Handle the SubCategoryPage "updated" event.
     */
    public function updated(SubCategoryPage $subCategoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }

    /**
     * Handle the SubCategoryPage "deleted" event.
     */
    public function deleted(SubCategoryPage $subCategoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }

    /**
     * Handle the SubCategoryPage "restored" event.
     */
    public function restored(SubCategoryPage $subCategoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }

    /**
     * Handle the SubCategoryPage "force deleted" event.
     */
    public function forceDeleted(SubCategoryPage $subCategoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }
}
