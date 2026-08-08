<?php

namespace App\Observers;

use App\Models\Hero;

class HeroObserver
{
    /**
     * Handle the Hero "created" event.
     */
    public function created(Hero $hero): void
    {
        //
    }

    /**
     * Handle the Hero "updated" event.
     */
    public function updated(Hero $hero): void
    {
        //
    }

    /**
     * Handle the Hero "deleted" event.
     */
    public function deleted(Hero $hero): void
    {
        //
    }

    /**
     * Handle the Hero "restored" event.
     */
    public function restored(Hero $hero): void
    {
        //
    }

    /**
     * Handle the Hero "force deleted" event.
     */
    public function forceDeleted(Hero $hero): void
    {
        //
    }
}
