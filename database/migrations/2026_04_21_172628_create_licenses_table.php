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
        Schema::create('licenses', function (Blueprint $table) {
        $table->id();
        $table->text('domain');            // Encrypted thakbe
        $table->text('server')->nullable();
        $table->text('sfingerprint')->nullable();
        $table->text('developer');         // Encrypted thakbe
        $table->text('dfingerprint')->nullable();
        $table->text('token_encrypted');   // Signature (Base64)
        $table->text('payload_encrypted'); // Payload (Base64)
        $table->timestamp('installed_at')->nullable();
        $table->timestamp('expires_at')->nullable();
        $table->text('app_key');           // Current App Key
        $table->timestamps();
        });


    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('licenses');
    }
};
