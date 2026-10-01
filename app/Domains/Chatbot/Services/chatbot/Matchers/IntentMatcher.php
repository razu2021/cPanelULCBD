<?php 
namespace App\Domains\Chatbot\Services\chatbot\Matchers;
use Illuminate\Support\Collection;
class IntentMatcher
{
    public function match(
        Collection $candidates,
        string $text
    ): ?array {
        $results = [];

        foreach ($candidates as $candidate) {
            $results[] = [
                'phrase' => $candidate,
                'score' => $this->calculateScore(
                    $text,
                    $candidate->phrase
                ),
            ];
        }

        if (empty($results)) {
            return null;
        }

        usort(
            $results,
            fn (array $a, array $b) =>
                $b['score'] <=> $a['score']
        );

        // শুধু সবচেয়ে ভালো match return করবে
        return $results[0];
    }

    protected function calculateScore(
        string $userText,
        string $phrase
    ): float {
        if ($userText === $phrase) {
            return 1.0;
        }

        $tokenScore = $this->tokenSimilarity(
            $userText,
            $phrase
        );

        $characterScore = $this->characterSimilarity(
            $userText,
            $phrase
        );

        return round(
            ($tokenScore * 0.70) +
            ($characterScore * 0.30),
            4
        );
    }

    protected function tokenSimilarity(
        string $userText,
        string $phrase
    ): float {
        $userTokens = $this->tokenize($userText);
        $phraseTokens = $this->tokenize($phrase);

        if (
            empty($userTokens) ||
            empty($phraseTokens)
        ) {
            return 0.0;
        }

        $commonTokens = array_intersect(
            $userTokens,
            $phraseTokens
        );

        return (
            2 * count($commonTokens)
        ) / (
            count($userTokens) + count($phraseTokens)
        );
    }

    protected function characterSimilarity(
        string $userText,
        string $phrase
    ): float {
        similar_text(
            $userText,
            $phrase,
            $percent
        );

        return $percent / 100;
    }

    protected function tokenize(string $text): array
    {
        $tokens = preg_split(
            '/\s+/u',
            $text,
            -1,
            PREG_SPLIT_NO_EMPTY
        );

        return array_values(
            array_unique($tokens ?: [])
        );
    }
}