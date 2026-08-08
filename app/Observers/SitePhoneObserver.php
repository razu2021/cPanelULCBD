<?php

namespace App\Observers;

use App\Models\SitePhone;
use Illuminate\Support\Facades\Cache;

class SitePhoneObserver
{
    /**
     * Handle the SitePhone "created" event.
     */
    public function created(SitePhone $sitePhone): void
    {
        //======= forget cache ----
        Cache::forget('sitephone');
    }

    /**
     * Handle the SitePhone "updated" event.
     */
    public function updated(SitePhone $sitePhone): void
    {
        //======= forget cache ----
        Cache::forget('sitephone');
    }

    /**
     * Handle the SitePhone "deleted" event.
     */
    public function deleted(SitePhone $sitePhone): void
    {
        //======= forget cache ----
        Cache::forget('sitephone');
    }

    /**
     * Handle the SitePhone "restored" event.
     */
    public function restored(SitePhone $sitePhone): void
    {
        //======= forget cache ----
        Cache::forget('sitephone');
    }

    /**
     * Handle the SitePhone "force deleted" event.
     */
    public function forceDeleted(SitePhone $sitePhone): void
    {
        //======= forget cache ----
        Cache::forget('sitephone');
    }
}
