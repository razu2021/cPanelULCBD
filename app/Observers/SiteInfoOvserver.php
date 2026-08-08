<?php

namespace App\Observers;

use App\Models\SiteInfo;
use Illuminate\Support\Facades\Cache;

class SiteInfoOvserver
{
    /**
     * Handle the SiteInfo "created" event.
     */
    public function created(SiteInfo $siteInfo): void
    {
        //======= forget cache ----
        Cache::forget('siteinfo');
    }

    /**
     * Handle the SiteInfo "updated" event.
     */
    public function updated(SiteInfo $siteInfo): void
    {
        //======= forget cache ----
        Cache::forget('siteinfo');
    }

    /**
     * Handle the SiteInfo "deleted" event.
     */
    public function deleted(SiteInfo $siteInfo): void
    {
        //======= forget cache ----
        Cache::forget('siteinfo');
    }

    /**
     * Handle the SiteInfo "restored" event.
     */
    public function restored(SiteInfo $siteInfo): void
    {
        //======= forget cache ----
        Cache::forget('siteinfo');
    }

    /**
     * Handle the SiteInfo "force deleted" event.
     */
    public function forceDeleted(SiteInfo $siteInfo): void
    {
        //======= forget cache ----
        Cache::forget('siteinfo');
    }
}
