<?php 

namespace App\Traits;

use Illuminate\Support\Facades\DB;

trait Orderable
{
    // Trait-er nam Orderable hole method-er nam bootOrderable hote hobe
    protected static function bootOrderable() 
    {
        static::creating(function ($model) {
            if (!$model->order) {
                $model->order = (static::max('order') ?? 0) + 1;
            }
        });

        static::updated(function ($model) {
            // Eikhane isDirty important, jeno onno column change-e normalize na hoy
            if ($model->isDirty('order')) {
                static::normalizeOrder();
            }
        });

        static::deleted(function () {
            static::normalizeOrder();
        });
    }

    public static function normalizeOrder()
    {
        // Tie-breaker: jeta ekhon update korlen (latest), sheta agey thakbe
        $items = static::orderBy('order')
                       ->orderBy('updated_at', 'desc') 
                       ->get();

        DB::transaction(function () use ($items) {
            foreach ($items as $index => $item) {
                $newOrder = $index + 1;
                
                if ($item->order !== $newOrder) {
                    $item->order = $newOrder;
                    $item->saveQuietly(); 
                }
            }
        });

        
    }
}