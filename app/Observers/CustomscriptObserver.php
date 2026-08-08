<?php

namespace App\Observers;

use App\Models\Customescript;
use Illuminate\Support\Facades\Cache;
class CustomscriptObserver
{
    /**
     * Handle the Customescript "created" event.
     */
    public function created(Customescript $customescript): void
    {
        //======= forget cache ----
        Cache::forget('customscript');
    }

    /**
     * Handle the Customescript "updated" event.
     */
    public function updated(Customescript $customescript): void
    {
        //======= forget cache ----
        Cache::forget('customscript');
    }

    /**
     * Handle the Customescript "deleted" event.
     */
    public function deleted(Customescript $customescript): void
    {
        //======= forget cache ----
        Cache::forget('customscript');
    }

    /**
     * Handle the Customescript "restored" event.
     */
    public function restored(Customescript $customescript): void
    {
        //======= forget cache ----
        Cache::forget('customscript');
    }

    /**
     * Handle the Customescript "force deleted" event.
     */
    public function forceDeleted(Customescript $customescript): void
    {
        //======= forget cache ----
        Cache::forget('customscript');
    }
}
