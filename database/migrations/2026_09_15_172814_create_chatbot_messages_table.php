<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('chatbot_messages', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('conversation_id')->nullable()->constrained('chatbot_conversations')->cascadeOnDelete();
            $table->foreignId('intent_id')->nullable()->constrained('chatbot_intents')->cascadeOnDelete();
            $table->string('role', 30)->index();
            $table->longText('message')->nullable();
            $table->string('source', 30)->nullable()->index();
            $table->json('metadata')->nullable();
            // defualt 
            $table->integer('order')->nullable();
            $table->string('slug',255)->nullable();
            $table->integer('creator_id')->nullable();
            $table->integer('editor_id')->nullable();
            $table->integer('status')->default(1);
            $table->integer('public_status')->default(0);
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('chatbot_messages');
    }
};
