<?php

namespace App\Models;

use App\Domains\Chatbot\Services\chatbot\Contracts\ScoutSearchableInterface;
use App\Observers\SitePhoneObserver;
use App\Traits\CacheBuster;
use App\Traits\Orderable;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Database\Eloquent\Attributes\ObservedBy;
use Laravel\Scout\Searchable;

#[ObservedBy([SitePhoneObserver::class])]
class SitePhone extends Model implements ScoutSearchableInterface 
{
    use SoftDeletes,CacheBuster,Searchable;
    use Orderable;

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
        return ['id', 'title', 'phone','description']; // এখানে short_des এর বদলে আসল কলাম 'phone' দিতে হবে
    }

    // --- how many feild would you like to search
    public function toSearchableArray(): array
    {
        return [
            'id' => $this->id,
            'title' => $this->title,
            'phone' => $this->phone,
            'description' => $this->description,
        ];
    }

    // ------- interface data 
    public function getSearchableData(): array
    {
        return [
            'title' => $this->title,
            'content' => $this->phone,
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
    

  

}
