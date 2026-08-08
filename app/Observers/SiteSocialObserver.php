<?php

namespace App\Observers;

use App\Models\SiteSocial;
use Illuminate\Support\Facades\Cache;
class SiteSocialObserver
{
    /**
     * Handle the SiteSocial "created" event.
     */
    public function created(SiteSocial $siteSocial): void
    {
        //======= forget cache ----
        Cache::forget('SiteSocial');
    }

    /**
     * Handle the SiteSocial "updated" event.
     */
    public function updated(SiteSocial $siteSocial): void
    {
        //======= forget cache ----
        Cache::forget('SiteSocial');
    }

    /**
     * Handle the SiteSocial "deleted" event.
     */
    public function deleted(SiteSocial $siteSocial): void
    {
        //======= forget cache ----
        Cache::forget('SiteSocial');
    }

    /**
     * Handle the SiteSocial "restored" event.
     */
    public function restored(SiteSocial $siteSocial): void
    {
        //======= forget cache ----
        Cache::forget('SiteSocial');
    }

    /**
     * Handle the SiteSocial "force deleted" event.
     */
    public function forceDeleted(SiteSocial $siteSocial): void
    {
        //======= forget cache ----
        Cache::forget('SiteSocial');
    }
}
