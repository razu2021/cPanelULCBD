<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminRegisterSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        

        User::create([
            'name'=>'System Admin',
            'email'=>'admin@example.com',
            'password'=>Hash::make(1234567890),
            'role'=>'admin',
        ]);

    }
}
