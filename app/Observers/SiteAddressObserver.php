<?php

namespace App\Observers;

use App\Models\SiteAddress;
use Illuminate\Support\Facades\Cache;
class SiteAddressObserver
{
    /**
     * Handle the SiteAddress "created" event.
     */
    public function created(SiteAddress $siteAddress): void
    {
        //======= forget cache ----
        Cache::forget('siteaddress');
    }

    /**
     * Handle the SiteAddress "updated" event.
     */
    public function updated(SiteAddress $siteAddress): void
    {
        //======= forget cache ----
        Cache::forget('siteaddress');
    }

    /**
     * Handle the SiteAddress "deleted" event.
     */
    public function deleted(SiteAddress $siteAddress): void
    {
        //======= forget cache ----
        Cache::forget('siteaddress');
    }

    /**
     * Handle the SiteAddress "restored" event.
     */
    public function restored(SiteAddress $siteAddress): void
    {
        //======= forget cache ----
        Cache::forget('siteaddress');
    }

    /**
     * Handle the SiteAddress "force deleted" event.
     */
    public function forceDeleted(SiteAddress $siteAddress): void
    {
        //======= forget cache ----
        Cache::forget('siteaddress');
    }
}
