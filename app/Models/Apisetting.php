<?php

namespace App\Models;

use App\Observers\ApisettingObserver;
use App\Traits\CacheBuster;
use App\Traits\Orderable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
 
#[ObservedBy([ApisettingObserver::class])]
class Apisetting extends Model
{
    use SoftDeletes,CacheBuster;
    
    

    protected $primaryKey = 'id';
    protected $guarded = [];

   
    protected $casts = [
        'value' => 'encrypted',
    ];
 
    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id', 'id');
    }

    public function editor()
    {
        return $this->belongsTo(User::class, 'editor_id', 'id');
    }

}
