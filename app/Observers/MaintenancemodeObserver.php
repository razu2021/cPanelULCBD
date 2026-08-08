<?php

namespace App\Observers;

use App\Models\Maintenancemode;

class MaintenancemodeObserver
{
    /**
     * Handle the Maintenancemode "created" event.
     */
    public function created(Maintenancemode $maintenancemode): void
    {
        //
    }

    /**
     * Handle the Maintenancemode "updated" event.
     */
    public function updated(Maintenancemode $maintenancemode): void
    {
        //
    }

    /**
     * Handle the Maintenancemode "deleted" event.
     */
    public function deleted(Maintenancemode $maintenancemode): void
    {
        //
    }

    /**
     * Handle the Maintenancemode "restored" event.
     */
    public function restored(Maintenancemode $maintenancemode): void
    {
        //
    }

    /**
     * Handle the Maintenancemode "force deleted" event.
     */
    public function forceDeleted(Maintenancemode $maintenancemode): void
    {
        //
    }
}
