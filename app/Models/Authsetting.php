<?php

namespace App\Models;

use App\Observers\AuthsettingObserver;
use App\Traits\CacheBuster;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
 
#[ObservedBy([AuthsettingObserver::class])]
class Authsetting extends Model
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
