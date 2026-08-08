<?php

namespace App\Observers;

use App\Models\Authsetting;

class AuthsettingObserver
{
    /**
     * Handle the Authsetting "created" event.
     */
    public function created(Authsetting $authsetting): void
    {
        //
    }

    /**
     * Handle the Authsetting "updated" event.
     */
    public function updated(Authsetting $authsetting): void
    {
        //
    }

    /**
     * Handle the Authsetting "deleted" event.
     */
    public function deleted(Authsetting $authsetting): void
    {
        //
    }

    /**
     * Handle the Authsetting "restored" event.
     */
    public function restored(Authsetting $authsetting): void
    {
        //
    }

    /**
     * Handle the Authsetting "force deleted" event.
     */
    public function forceDeleted(Authsetting $authsetting): void
    {
        //
    }
}
