<?php

namespace App\Observers;

use App\Models\AdminEmail;

class AdminEmailObserver
{
    /**
     * Handle the AdminEmail "created" event.
     */
    public function created(AdminEmail $adminEmail): void
    {
        //
    }

    /**
     * Handle the AdminEmail "updated" event.
     */
    public function updated(AdminEmail $adminEmail): void
    {
        //
    }

    /**
     * Handle the AdminEmail "deleted" event.
     */
    public function deleted(AdminEmail $adminEmail): void
    {
        //
    }

    /**
     * Handle the AdminEmail "restored" event.
     */
    public function restored(AdminEmail $adminEmail): void
    {
        //
    }

    /**
     * Handle the AdminEmail "force deleted" event.
     */
    public function forceDeleted(AdminEmail $adminEmail): void
    {
        //
    }
}
