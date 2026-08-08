<?php

namespace App\Observers;

use App\Models\Apisetting;

class ApisettingObserver
{
    /**
     * Handle the Apisetting "created" event.
     */
    public function created(Apisetting $apisetting): void
    {
        //
    }

    /**
     * Handle the Apisetting "updated" event.
     */
    public function updated(Apisetting $apisetting): void
    {
        //
    }

    /**
     * Handle the Apisetting "deleted" event.
     */
    public function deleted(Apisetting $apisetting): void
    {
        //
    }

    /**
     * Handle the Apisetting "restored" event.
     */
    public function restored(Apisetting $apisetting): void
    {
        //
    }

    /**
     * Handle the Apisetting "force deleted" event.
     */
    public function forceDeleted(Apisetting $apisetting): void
    {
        //
    }
}
