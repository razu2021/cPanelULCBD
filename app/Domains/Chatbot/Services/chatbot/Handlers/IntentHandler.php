<?php 
namespace App\Domains\Chatbot\Services\chatbot\Handlers;

use App\Domains\Chatbot\Models\ChatbotIntentPhrases;
use App\Domains\Chatbot\Services\chatbot\DTO\ChatbotResponse;
use App\Domains\Chatbot\Services\chatbot\Contracts\ChatbotHandlerInterface;
use App\Domains\Chatbot\Services\chatbot\DTO\ChatbotContext;
use App\Domains\Chatbot\Services\chatbot\Matchers\IntentMatcher;
use App\Domains\Chatbot\Services\chatbot\Searchers\PhraseCandidateSearcher;

class IntentHandler implements ChatbotHandlerInterface
{
    // ------------------------------------------------------------
    // Dependency injection
    // ------------------------------------------------------------

    public function __construct(
        protected PhraseCandidateSearcher $candidateSearcher,
        protected IntentMatcher $matcher
    ) {}

    public function handle(ChatbotContext $context): ChatbotContext
    {
        /*
        |--------------------------------------------------------------------------
        | Step 01 : Candidate Search
        |--------------------------------------------------------------------------
        */

        $candidates = $this->candidateSearcher->search(
            $context->text
        );

        if ($candidates->isEmpty()) {
            return $context;
        }

       

        /*
        |--------------------------------------------------------------------------
        | Step 02 : Best Match
        |--------------------------------------------------------------------------
        */

        $match = $this->matcher->match(
            $candidates,
            $context->text
        );

        if (! $match) {
            return $context;
        }

        
        /*
        |--------------------------------------------------------------------------
        | Step 03 : Store matched intent information
        |--------------------------------------------------------------------------
        */

        $context->intent = $match['phrase']->intent;
        $context->matchedPhrase = $match['phrase'];
        $context->confidence = $match['score'];
    
        return $context;
    }
}