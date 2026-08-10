<?php

namespace App\Observers;

use App\Models\Maintenancemode;
use Illuminate\Support\Facades\Cache;
class MaintenancemodeObserver
{
    /**
     * Handle the Maintenancemode "created" event.
     */
    public function created(Maintenancemode $maintenancemode): void
    {
        //======= forget cache ----
        Cache::forget('maintainance');
    }

    /**
     * Handle the Maintenancemode "updated" event.
     */
    public function updated(Maintenancemode $maintenancemode): void
    {
        //======= forget cache ----
        Cache::forget('maintainance');
    }

    /**
     * Handle the Maintenancemode "deleted" event.
     */
    public function deleted(Maintenancemode $maintenancemode): void
    {
        //======= forget cache ----
        Cache::forget('maintainance');
    }

    /**
     * Handle the Maintenancemode "restored" event.
     */
    public function restored(Maintenancemode $maintenancemode): void
    {
        //======= forget cache ----
        Cache::forget('maintainance');
    }

    /**
     * Handle the Maintenancemode "force deleted" event.
     */
    public function forceDeleted(Maintenancemode $maintenancemode): void
    {
        //======= forget cache ----
        Cache::forget('maintainance');
    }
}
