<?php

namespace App\Observers;

use App\Models\Emailsmtp;

class EmailsmtpObserver
{
    /**
     * Handle the Emailsmtp "created" event.
     */
    public function created(Emailsmtp $emailsmtp): void
    {
        //
    }

    /**
     * Handle the Emailsmtp "updated" event.
     */
    public function updated(Emailsmtp $emailsmtp): void
    {
        //
    }

    /**
     * Handle the Emailsmtp "deleted" event.
     */
    public function deleted(Emailsmtp $emailsmtp): void
    {
        //
    }

    /**
     * Handle the Emailsmtp "restored" event.
     */
    public function restored(Emailsmtp $emailsmtp): void
    {
        //
    }

    /**
     * Handle the Emailsmtp "force deleted" event.
     */
    public function forceDeleted(Emailsmtp $emailsmtp): void
    {
        //
    }
}
