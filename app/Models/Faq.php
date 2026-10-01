<?php

namespace App\Models;

use App\Domains\Chatbot\Services\chatbot\Contracts\ScoutSearchableInterface;
use App\Traits\CacheBuster;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Models\User;
use Laravel\Scout\Searchable;

class Faq extends Model implements ScoutSearchableInterface
{
    use SoftDeletes,CacheBuster,Searchable;

    protected $primaryKey = 'id';
    protected $guarded = [];


    /**
     * ----------------------------------------------------
     * scout Search 
     * implements ScoutSearchableInteface 
     * ----------------------------------------------------
     */
    public function searchableColumns(): array
    {
        return ['id', 'title', 'short_des']; // এখানে short_des এর বদলে আসল কলাম 'phone' দিতে হবে
    }

    // --- how many feild would you like to search
    public function toSearchableArray(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'short_des' => $this->short_des,
        ];
    }

    // ------- interface data 
    public function getSearchableData(): array
    {
        return [
            'title' => $this->title,
            'content' => $this->short_des,
        ];
    }
    /**
     * ---------------------------------------------------------------------------
     * scout search and 
     * ---------------------------------------------------------------------------
     */


    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id', 'id');
    }

    public function editor()
    {
        return $this->belongsTo(User::class, 'editor_id', 'id');
    }
    // get active data 
    public function scopeActive($query){
        return $query->where('public_status',1);
    }

    // get data by assending order 
    public function scopeOrdered($query){
        return $query->orderBy('order','asc');
    }


    

}
