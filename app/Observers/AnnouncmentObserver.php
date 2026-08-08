<?php

namespace App\Observers;

use App\Models\Announcment;
use Illuminate\Support\Facades\Cache;
class AnnouncmentObserver
{
    /**
     * Handle the Announcment "created" event.
     */
    public function created(Announcment $announcment): void
    {
        //======= forget cache ----
        Cache::forget('announcement');
    }

    /**
     * Handle the Announcment "updated" event.
     */
    public function updated(Announcment $announcment): void
    {
        //======= forget cache ----
        Cache::forget('announcement');
    }

    /**
     * Handle the Announcment "deleted" event.
     */
    public function deleted(Announcment $announcment): void
    {
        //======= forget cache ----
        Cache::forget('announcement');
    }

    /**
     * Handle the Announcment "restored" event.
     */
    public function restored(Announcment $announcment): void
    {
        //======= forget cache ----
        Cache::forget('announcement');
    }

    /**
     * Handle the Announcment "force deleted" event.
     */
    public function forceDeleted(Announcment $announcment): void
    {
        //======= forget cache ----
        Cache::forget('announcement');
    }
}
