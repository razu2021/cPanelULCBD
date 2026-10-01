<?php 
namespace App\Domains\Chatbot\Services\chatbot\Support;


class TextNormalizer {
    /**
     * Normalize chatbot user input.
     */
    public function normalize(string $text): string
    {
        $text = trim($text);
   
        if ($text === '') {
            return '';
        }

        // Convert HTML entities
        $text = html_entity_decode($text, ENT_QUOTES | ENT_HTML5, 'UTF-8');

        // Remove HTML tags
        $text = strip_tags($text);

        // Normalize Unicode whitespace
        $text = preg_replace('/\s+/u', ' ', $text);

        // Normalize punctuation
        $text = preg_replace('/[!?.,;:]+/u', ' ', $text);

        // Normalize repeated spaces
        $text = preg_replace('/\s+/u', ' ', $text);

        return trim($text);
    }
}