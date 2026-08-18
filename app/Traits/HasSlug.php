<?php 
namespace App\Traits;
use Illuminate\Support\Str;

trait HasSlug
{
    /**
     * event hook for  creating and updating events 
     */
    protected static function bootHasSlug()
    {
        /** @var \Illuminate\Database\Eloquent\Model $static */
        $static = static::class;

        $static::creating(function ($model) {
            if (empty($model->slug)) {
                $model->slug = uniqid('20').Str::random(20) . '_'.mt_rand(10000, 100000).'-'.time();
            }
        });
    }
}