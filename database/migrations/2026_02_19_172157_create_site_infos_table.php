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
        Schema::create('site_infos', function (Blueprint $table) {
         $table->bigIncrements('id');
        $table->string('site_name')->nullable();
        $table->string('site_title')->nullable();
        $table->string('site_slogan')->nullable();
        $table->text('site_description')->nullable();
        $table->text('opening')->nullable();
        $table->string('cover_image')->nullable();
        $table->string('thumbnail')->nullable();
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
        Schema::dropIfExists('site_infos');
    }
};
