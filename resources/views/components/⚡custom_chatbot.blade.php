<?php

use Livewire\Component;
use App\Services\chatbot\CustomChatbotService;

new class extends Component
{
    public $newMessage = '';
    public $messages = [];

    public function sendMessage(CustomChatbotService $chatbotService)
    {
        if (empty(trim($this->newMessage))) {
            return;
        }
        
        $userText = $this->newMessage;

        // ইউজারের মেসেজ যোগ করা
        $this->messages[] = [
            'sender' => 'user',
            'text' => $userText,
            'time' => now()->format('h:i A')
        ];

        $this->newMessage = '';

        // বটের রেসপন্স আনা
        $botResponse = $chatbotService->getBotResponse($userText);

        // বটের রেসপন্স যোগ করা
        $this->messages[] = [
            'sender' => 'bot',
            'text' => $botResponse,
            'time' => now()->format('h:i A')
        ];
    }
};
?>

<!-- Alpine.js দিয়ে চ্যাটের স্টেট কন্ট্রোল করা হচ্ছে, ফলে Livewire রি-রেন্ডার করলেও উইন্ডো বন্ধ হবে না -->
<div x-data="{ isOpen: false }" class="liveChat" :class="{ 'is-open': isOpen }" id="liveChat">

    <!-- Chat Window -->
    <div class="liveChat__window" id="liveChatWindow">

        <!-- Header -->
        <div class="liveChat__header">
            <div class="liveChat__agent">
                <div class="liveChat__avatar">
                    <i class="bi bi-headset"></i>
                    <span class="liveChat__online"></span>
                </div>
                <div class="liveChat__agent-info">
                    <h5>Live Support</h5>
                    <span>We’re online now</span>
                </div>
            </div>

            <button
                type="button"
                class="liveChat__close"
                @click="isOpen = false"
                aria-label="Close chat"
            >
                <i class="bi bi-x-lg"></i>
            </button>
        </div>

        <!-- Body -->
        <div class="liveChat__body" id="chatBody">
            <div class="liveChat__welcome">
                <div class="liveChat__welcome-icon">
                    <i class="bi bi-chat-heart-fill"></i>
                </div>
                <div>
                    <h6>Hi there! 👋</h6>
                    <p>How can we help you today?</p>
                </div>
            </div>

            <!-- Static Welcome Message -->
            <div class="liveChat__message liveChat__message--agent">
                <div class="liveChat__message-avatar">
                    <i class="bi bi-headset"></i>
                </div>
                <div class="liveChat__message-content">
                    <span class="liveChat__message-name">Support Team</span>
                    <div class="liveChat__bubble">
                        Hello! Welcome to our support. Feel free to ask us anything.
                    </div>
                    <span class="liveChat__time">Just now</span>
                </div>
            </div>

            <!-- Dynamic Messages Loop -->
            @foreach($messages as $msg)
                @if($msg['sender'] === 'user')
                    <div class="liveChat__message liveChat__message--user">
                        <div class="liveChat__message-content">
                            <div class="liveChat__bubble">
                                {{ $msg['text'] }}
                            </div>
                            <span class="liveChat__time">{{ $msg['time'] }}</span>
                        </div>
                    </div>
                @else
                    <div class="liveChat__message liveChat__message--agent">
                        <div class="liveChat__message-avatar">
                            <i class="bi bi-headset"></i>
                        </div>
                        <div class="liveChat__message-content">
                            <span class="liveChat__message-name">Support Team</span>
                            <div class="liveChat__bubble" style="white-space: pre-line;">
                                {!! nl2br(e($msg['text'])) !!}
                            </div>
                            <span class="liveChat__time">{{ $msg['time'] }}</span>
                        </div>
                    </div>
                @endif
            @endforeach
        </div>

        <!-- Footer -->
        <div class="liveChat__footer">
            <div class="liveChat__input">
                <form wire:submit.prevent="sendMessage">
                    <input
                        type="text"
                        id="liveChatInput"
                        wire:model="newMessage"
                        placeholder="Type your message..."
                        autocomplete="off"
                    >
                    <button
                        type="submit"
                        id="liveChatSend"
                        aria-label="Send message"
                    >
                        <i class="bi bi-send-fill"></i>
                    </button>
                </form>
            </div>
            
            <p class="liveChat__powered">
                <i class="bi bi-shield-check"></i> Typically replies within a few minutes
            </p>
        </div>

    </div>

    <!-- Floating Toggle Button -->
    <button
        type="button"
        class="liveChat__toggle"
        @click="isOpen = !isOpen; if(isOpen) { setTimeout(() => document.getElementById('liveChatInput').focus(), 250); }"
        aria-label="Open live chat"
    >
        <span class="liveChat__toggle-icon liveChat__toggle-icon--chat">
            <i class="bi bi-chat-dots-fill"></i>
        </span>

        <span class="liveChat__toggle-icon liveChat__toggle-icon--close">
            <i class="bi bi-x-lg"></i>
        </span>

        <span class="liveChat__notification">1</span>
    </button>

</div>

<script>
    // শুধু চ্যাটবক্স অটো-স্ক্রল করার জন্য লাইভওয়্যার ৪ এর হুক রাখা হলো
    document.addEventListener('livewire:initialized', () => {
        Livewire.hook('commit', ({ component, commit, succeed, fail }) => {
            succeed(({ snapshot, effect }) => {
                setTimeout(() => {
                    const chatBody = document.getElementById('chatBody');
                    if (chatBody) {
                        chatBody.scrollTop = chatBody.scrollHeight;
                    }
                }, 50);
            });
        });
    });
</script>