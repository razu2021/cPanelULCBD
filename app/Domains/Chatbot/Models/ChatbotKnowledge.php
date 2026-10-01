<?php

namespace App\Domains\Chatbot\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
use App\Traits\HasSlugAndUser;
use App\Traits\Orderable;
use App\Models\User;
class ChatbotKnowledge extends Model
{
    use SoftDeletes,HasSlugAndUser,Orderable;

    protected $primaryKey = 'id';
    protected $guarded = [];

    protected $casts = [
        'keywords' => 'array',
    ];
    // --------- 

    public function creator()
    {
        return $this->belongsTo(User::class, 'creator_id', 'id');
    }

    public function editor()
    {
        return $this->belongsTo(User::class, 'editor_id', 'id');
    }

    // phrases belongs to intent relationship 
    public function intent(){
        return $this->belongsTo(ChatbotIntent::class , 'intent_id','id');
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
