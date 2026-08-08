<?php

namespace App\Observers;

use App\Models\ChildCategoryPage;
use Illuminate\Support\Facades\Cache;
class ChildCategoryPageObserver
{
    /**
     * Handle the ChildCategoryPage "created" event.
     */
    public function created(ChildCategoryPage $childCategoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }

    /**
     * Handle the ChildCategoryPage "updated" event.
     */
    public function updated(ChildCategoryPage $childCategoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }

    /**
     * Handle the ChildCategoryPage "deleted" event.
     */
    public function deleted(ChildCategoryPage $childCategoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }

    /**
     * Handle the ChildCategoryPage "restored" event.
     */
    public function restored(ChildCategoryPage $childCategoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }

    /**
     * Handle the ChildCategoryPage "force deleted" event.
     */
    public function forceDeleted(ChildCategoryPage $childCategoryPage): void
    {
        //======= forget cache ----
        Cache::forget('allCategorys');
    }
}
