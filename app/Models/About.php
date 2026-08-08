<?php

namespace App\Models;

use App\Traits\CacheBuster;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
class About extends Model
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

    /**
     * Get all of the about section's features.
     */
    public function features()
    {
        // এখানে 'featureable' হলো আপনার সেই কমন নাম যা আপনি মাইগ্রেশনে ব্যবহার করেছেন
        return $this->morphMany(Feature::class, 'featureable');
    }
}
