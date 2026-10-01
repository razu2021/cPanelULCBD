<?php

use App\Domains\Chatbot\Services\chatbot\Handlers\IntentHandler;
use App\Domains\Chatbot\Services\chatbot\Handlers\KnowledgeHandler;
use App\Domains\Chatbot\Services\chatbot\Handlers\ScoutSearchHandler;
use App\Models\Faq;
use App\Models\SiteEmail;
use App\Models\SitePhone;

return [


/**
 * -------------------------------------------------------------
 * Chatbot Handle Pipline 
 * 
 * 
 *  Handlers are executed in the order defined below. 
 * The first handler that can provide a suitable responseshould stop the pipeline.
 * -------------------------------------------------------------
 */

    'handlers' => [
        IntentHandler::class,
        KnowledgeHandler::class,
        ScoutSearchHandler::class
    ],


    /**
     * ---------------------------------------------------------------
     * list of searchable modal 
     * ---------------------------------------------------------------
     */
    'searchable_models'=>[
        Faq::class,
        SitePhone::class,
        SiteEmail::class,
    ]





];



