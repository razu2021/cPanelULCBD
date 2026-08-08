<?php

namespace App\Observers;

use App\Models\Manageheader;
use Illuminate\Support\Facades\Cache;


class ManageheaderObserver
{
    /**
     * Handle the Manageheader "created" event.
     */
    public function created(Manageheader $manageheader): void
    {
        //======= forget cache ----
        Cache::forget('manageheader');
    }

    /**
     * Handle the Manageheader "updated" event.
     */
    public function updated(Manageheader $manageheader): void
    {
        //======= forget cache ----
        Cache::forget('manageheader');
    }

    /** 
     * Handle the Manageheader "deleted" event.
     */
    public function deleted(Manageheader $manageheader): void
    {
        //======= forget cache ----
        Cache::forget('manageheader');
    }

    /**
     * Handle the Manageheader "restored" event.
     */
    public function restored(Manageheader $manageheader): void
    {
        //======= forget cache ----
        Cache::forget('manageheader');
    }

    /**
     * Handle the Manageheader "force deleted" event.
     */
    public function forceDeleted(Manageheader $manageheader): void
    {
        //======= forget cache ----
        Cache::forget('manageheader');
    }
}
