<?php

namespace App\Observers;

use App\Models\Managefooter;
use Illuminate\Support\Facades\Cache;

class ManagefooterObserver
{
    /**
     * Handle the Managefooter "created" event.
     */
    public function created(Managefooter $managefooter): void
    {
        //======= forget cache ----
        Cache::forget('managefooter');
    }

    /**
     * Handle the Managefooter "updated" event.
     */
    public function updated(Managefooter $managefooter): void
    {
        //======= forget cache ----
        Cache::forget('managefooter');
    }

    /**
     * Handle the Managefooter "deleted" event.
     */
    public function deleted(Managefooter $managefooter): void
    {
        //======= forget cache ----
        Cache::forget('managefooter');
    }

    /**
     * Handle the Managefooter "restored" event.
     */
    public function restored(Managefooter $managefooter): void
    {
        //======= forget cache ----
        Cache::forget('managefooter');
    }

    /**
     * Handle the Managefooter "force deleted" event.
     */
    public function forceDeleted(Managefooter $managefooter): void
    {
        //======= forget cache ----
        Cache::forget('managefooter');
    }
}
