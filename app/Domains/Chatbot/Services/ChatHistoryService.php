<?php 
namespace App\Domains\Chatbot\Services;

use App\Domains\Chatbot\Models\ChatbotConversation;
use App\Domains\Chatbot\Models\ChatbotMessage;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Str;
class ChatHistoryService{

    protected string $cookieName = 'chatbot_session_id';

    /**
     * Cookie ba request theke session khuje ber kora, na thakle notun create kora
     */
    public function getOrCreateSession(){
        $sessionId = request()->cookie($this->cookieName);

        $session = ChatbotConversation::where('session_id',$sessionId)->first();

        // Jodi session na thake ba expired hoye jay, tahole notun create hobe
        if (! $session) {
            $session = ChatbotConversation::create([
                'session_id' => (string) Str::uuid(),
                'created_at' => now(),
            ]);

            // Browser-e 7 diner jonno secure cookie set kore dewa
            Cookie::queue($this->cookieName, $session->session_id, 60 * 24 * 7);
        }

       return $session ; 
    }


    /**
     * --------------------------------------------------------------------------
     * chat messages save 
     * --------------------------------------------------------------------------
     */
    public function saveMessage(ChatbotConversation $session , string $sender , string $message , string $source){

        $isHandled = $sender === 'user' ? true : ($source !== 'fallback');
        
        return ChatbotMessage::create([
            'conversation_id' => $session->id, 
            'role' => $sender, 
            'message' => $message,
            'source' => $isHandled,
        ]);

    

    }

    /**
     * Session er last activity time update kora
     */
    public function touchSession(ChatbotConversation $session): void
    {
        $session->update([
            'created_at' => now(),
        ]);
    }

    /**
     * Puraton chat history load korar jonno (Page refresh korle ba abar asle)
     */
    public function getSessionMessages(ChatbotConversation $session)
    {
        return $session->messages()->oldest()->get()->map(function ($msg) {
            return [
                'sender' => $msg->role,
                'text' => $msg->message,
                'time' => $msg->created_at->format('h:i A'),
            ];
        })->toArray();
    }









}