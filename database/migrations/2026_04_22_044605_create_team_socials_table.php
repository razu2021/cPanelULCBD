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
        Schema::create('team_socials', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->foreignId('team_id')->constrained('teams')->onDelete('cascade');
            $table->string('icon')->nullable();
            $table->string('type')->nullable();
            $table->string('title')->nullable();
            $table->string('url')->nullable();
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
        Schema::dropIfExists('team_socials');
    }
};
