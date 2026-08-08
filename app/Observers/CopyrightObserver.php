<?php

namespace App\Observers;

use App\Models\Copyright;
use Illuminate\Support\Facades\Cache;
class CopyrightObserver
{
    /**
     * Handle the Copyright "created" event.
     */
    public function created(Copyright $copyright): void
    {
        //======= forget cache ----
        Cache::forget('copyright');
    }

    /**
     * Handle the Copyright "updated" event.
     */
    public function updated(Copyright $copyright): void
    {
        //======= forget cache ----
        Cache::forget('copyright');
    }

    /**
     * Handle the Copyright "deleted" event.
     */
    public function deleted(Copyright $copyright): void
    {
        //======= forget cache ----
        Cache::forget('copyright');
    }

    /**
     * Handle the Copyright "restored" event.
     */
    public function restored(Copyright $copyright): void
    {
        //======= forget cache ----
        Cache::forget('copyright');
    }

    /**
     * Handle the Copyright "force deleted" event.
     */
    public function forceDeleted(Copyright $copyright): void
    {
        //======= forget cache ----
        Cache::forget('copyright');
    }
}
