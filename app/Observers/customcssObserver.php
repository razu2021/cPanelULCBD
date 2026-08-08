<?php

namespace App\Observers;

use App\Models\Customcss;
use Illuminate\Support\Facades\Cache;
class customcssObserver
{
    /**
     * Handle the Customcss "created" event.
     */
    public function created(Customcss $customcss): void
    {
        //======= forget cache ----
        Cache::forget('customscss');
    }

    /**
     * Handle the Customcss "updated" event.
     */
    public function updated(Customcss $customcss): void
    {
        //======= forget cache ----
        Cache::forget('customscss');
    }

    /**
     * Handle the Customcss "deleted" event.
     */
    public function deleted(Customcss $customcss): void
    {
        //======= forget cache ----
        Cache::forget('customscss');
    }

    /**
     * Handle the Customcss "restored" event.
     */
    public function restored(Customcss $customcss): void
    {
        //======= forget cache ----
        Cache::forget('customscss');
    }

    /**
     * Handle the Customcss "force deleted" event.
     */
    public function forceDeleted(Customcss $customcss): void
    {
        //======= forget cache ----
        Cache::forget('customscss');
    }
}
