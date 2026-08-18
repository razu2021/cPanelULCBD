<?php

namespace App\Traits;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Auth;

    /**
 *  @mixin \Illuminate\Database\Eloquent\Model
 */

trait HasSlugAndUser
{

    /**
     * event hook for  creating and updating events 
     */
    protected static function bootHasSlugAndUser()
    {
         /** @var \Illuminate\Database\Eloquent\Model $static */
        $static = static::class;
        $static::creating(function ($model) {
            if (empty($model->slug)) {
                $model->slug = uniqid('20').Str::random(20) . '_'.mt_rand(10000, 100000).'-'.time();
            }
            // if (Auth::check()) {
            //     $model->creator_id = Auth::id();
            // }
        });

        $static::updating(function ($model) {
            if (Auth::check()) {
                $model->editor_id = Auth::id();
            }
        });






    }






}