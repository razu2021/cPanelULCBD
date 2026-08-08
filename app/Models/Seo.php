<?php

namespace App\Models;

use App\Traits\CacheBuster;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class Seo extends Model
{
     use SoftDeletes,CacheBuster;
     
    protected $casts = [
        'structured_data' => 'array',
    ];

    protected $primaryKey = 'id';
    protected $guarded = [];


    // --------- 

    public function creator()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function editor()
    {
        return $this->belongsTo(User::class, 'user_id', 'id');
    }


    // ========= morph many relationship deign 
    public function seoable(){
        return $this->morphTo();
    }
}
