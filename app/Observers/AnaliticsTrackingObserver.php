<?php

namespace App\Observers;

use App\Models\AnaliticsTracking;
use Illuminate\Support\Facades\Cache;
class AnaliticsTrackingObserver
{
    /**
     * Handle the AnaliticsTracking "created" event.
     */
    public function created(AnaliticsTracking $analiticsTracking): void
    {
        //======= forget cache ----
        Cache::forget('AnaliticsTracking');
    }

    /**
     * Handle the AnaliticsTracking "updated" event.
     */
    public function updated(AnaliticsTracking $analiticsTracking): void
    {
        //======= forget cache ----
        Cache::forget('AnaliticsTracking');
    }

    /**
     * Handle the AnaliticsTracking "deleted" event.
     */
    public function deleted(AnaliticsTracking $analiticsTracking): void
    {
        //======= forget cache ----
        Cache::forget('AnaliticsTracking');
    }

    /**
     * Handle the AnaliticsTracking "restored" event.
     */
    public function restored(AnaliticsTracking $analiticsTracking): void
    {
        //======= forget cache ----
        Cache::forget('AnaliticsTracking');
    }

    /**
     * Handle the AnaliticsTracking "force deleted" event.
     */
    public function forceDeleted(AnaliticsTracking $analiticsTracking): void
    {
        //======= forget cache ----
        Cache::forget('AnaliticsTracking');
    }
}
