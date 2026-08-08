<?php

namespace App\Observers;

use App\Models\Preloader;
use Illuminate\Support\Facades\Cache;

class PreloaderObserver
{
    /**
     * Handle the Preloader "created" event.
     */
    public function created(Preloader $preloader): void
    {
        //======= forget cache ----
        Cache::forget('preloaders');
    }

    /**
     * Handle the Preloader "updated" event.
     */
    public function updated(Preloader $preloader): void
    {
        //======= forget cache ----
        Cache::forget('preloaders');
    }

    /**
     * Handle the Preloader "deleted" event.
     */
    public function deleted(Preloader $preloader): void
    {
        //======= forget cache ----
        Cache::forget('preloaders');
    }

    /**
     * Handle the Preloader "restored" event.
     */
    public function restored(Preloader $preloader): void
    {
        //======= forget cache ----
        Cache::forget('preloaders');
    }

    /**
     * Handle the Preloader "force deleted" event.
     */
    public function forceDeleted(Preloader $preloader): void
    {
        //======= forget cache ----
        Cache::forget('preloaders');
    }
}
