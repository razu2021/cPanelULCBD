<?php

namespace App\Models;

use App\Observers\SiteEmailObserver;
use App\Traits\CacheBuster;
use App\Traits\Orderable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
 
#[ObservedBy([SiteEmailObserver::class])]
class SiteEmail extends Model
{
    use SoftDeletes,CacheBuster;
    use Orderable;

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
    
 


}
