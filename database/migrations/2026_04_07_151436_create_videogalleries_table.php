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
        Schema::create('videogalleries', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('page_section_id')->constrained('page_sections')->onDelete('cascade');
            $table->string('heading')->nullable();
            $table->string('title')->nullable();
            $table->text('short_des')->nullable();
            $table->longText('description')->nullable();
            $table->string('button')->nullable();
            $table->string('button_url')->nullable();
            $table->string('video_url')->nullable();
            $table->string('thumbnail')->nullable();
            $table->string('cover_image')->nullable();
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
        Schema::dropIfExists('videogalleries');
    }
};
