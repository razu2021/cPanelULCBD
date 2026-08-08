<?php

namespace App\Traits;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\Log;
trait CacheBuster
{
   
    public static function bootCacheBuster(){
        

        static::created(function($model){
            $model->forgetSectionCache();
        });


    //======== data crate, update, active, inactive
        static::updated(function($model){
            $model->forgetSectionCache();
        });

        //====== data softdelete , forcedelete 
        static::deleted(function($model){
            $model->forgetSectionCache();
        });

        //====== soft delete data resote  
        static::restored(function($model){
            $model->forgetSectionCache();
        });

        static::forceDeleted(function($model){
            $model->forgetSectionCache();
        });

    }



public function forgetSectionCache()
{
  

    try {
        cache()->flush();
    } catch (\Exception $e) {
        //\Log::error("Cache Flush Failed: " . $e->getMessage());
    }
}










}
