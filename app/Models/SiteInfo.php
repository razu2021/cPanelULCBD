<?php

namespace App\Models;

use App\Observers\SiteInfoOvserver;
use App\Traits\CacheBuster;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
#[ObservedBy([SiteInfoOvserver::class])]
class SiteInfo extends Model
{
    use SoftDeletes,CacheBuster;

    protected $primaryKey = 'id';
    protected $guarded = [];


    // --------- 

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id', 'id');
    }

    public function editor()
    {
        return $this->belongsTo(User::class, 'editor_id', 'id');
    }
    
 

    /**------ order auto incriment --------- */
    protected static function booted()
    {
        static::creating(function ($model) {
            if (!$model->order) {
                $model->order = (self::max('order') ?? 0) + 1;
            }
        });
    }


    public static function normalizeOrder()
    {
        $items = self::orderBy('order')->get();

        foreach ($items as $index => $item) {
            $item->order = $index + 1;
            $item->saveQuietly();
        }
    }
    /**------ order auto incriment --------- */


}
