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
        Schema::create('features', function (Blueprint $table) {
            $table->id();
            $table->text('title')->nullable();
            $table->text('short_des')->nullable();
            $table->string('icon')->nullable();
            
            // এই দুটি কলামের মাধ্যমে টেবিলটি মাল্টিপল মডেলের সাথে কানেক্ট হবে
            $table->unsignedBigInteger('featureable_id'); // আইডি (যেমন About ID বা Service ID)
            $table->string('featureable_type');           // মডেলের নাম (যেমন App\Models\About)
            
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
        Schema::dropIfExists('features');
    }
};
