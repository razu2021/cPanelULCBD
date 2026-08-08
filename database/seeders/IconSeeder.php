<?php

namespace Database\Seeders;

use App\Models\Faveicon;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Str;

class IconSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
            $icons = [
        'bi bi-house',
        'bi bi-house-door',
        'bi bi-house-fill',
        'bi bi-person',
        'bi bi-people',
        'bi bi-person-circle',
        'bi bi-person-badge',
        'bi bi-person-check',
        'bi bi-person-plus',
        'bi bi-person-x',

        'bi bi-facebook',
        'bi bi-twitter-x',
        'bi bi-instagram',
        'bi bi-youtube',
        'bi bi-linkedin',
        'bi bi-whatsapp',
        'bi bi-telegram',
        'bi bi-github',
        'bi bi-google',
        'bi bi-tiktok',

        'bi bi-gear',
        'bi bi-gear-fill',
        'bi bi-sliders',
        'bi bi-tools',
        'bi bi-wrench',
        'bi bi-hammer',
        'bi bi-cpu',
        'bi bi-database',
        'bi bi-server',
        'bi bi-cloud',

        'bi bi-search',
        'bi bi-search-heart',
        'bi bi-funnel',
        'bi bi-filter',
        'bi bi-sort-down',
        'bi bi-sort-up',
        'bi bi-eye',
        'bi bi-eye-slash',
        'bi bi-bell',
        'bi bi-bell-fill',

        'bi bi-envelope',
        'bi bi-envelope-fill',
        'bi bi-chat',
        'bi bi-chat-dots',
        'bi bi-chat-left',
        'bi bi-chat-right',
        'bi bi-inbox',
        'bi bi-send',
        'bi bi-send-fill',
        'bi bi-telephone',

        'bi bi-calendar',
        'bi bi-calendar-check',
        'bi bi-calendar-event',
        'bi bi-clock',
        'bi bi-alarm',
        'bi bi-stopwatch',
        'bi bi-hourglass',
        'bi bi-hourglass-split',
        'bi bi-speedometer',
        'bi bi-speedometer2',

        'bi bi-cart',
        'bi bi-cart-fill',
        'bi bi-bag',
        'bi bi-bag-fill',
        'bi bi-credit-card',
        'bi bi-credit-card-fill',
        'bi bi-wallet',
        'bi bi-cash',
        'bi bi-receipt',
        'bi bi-tag',

        'bi bi-file',
        'bi bi-file-earmark',
        'bi bi-file-text',
        'bi bi-file-pdf',
        'bi bi-file-image',
        'bi bi-file-code',
        'bi bi-folder',
        'bi bi-folder-fill',
        'bi bi-folder2-open',
        'bi bi-archive',

        'bi bi-pencil',
        'bi bi-pencil-square',
        'bi bi-trash',
        'bi bi-trash-fill',
        'bi bi-plus',
        'bi bi-plus-circle',
        'bi bi-dash',
        'bi bi-dash-circle',
        'bi bi-check',
        'bi bi-check-circle',

        // --- blocked 
        'unique_icon',

    ];



    foreach ($icons as $icon) {
        Faveicon::create([
            'icons' => $icon,
            'slug' =>  uniqid('20').Str::random(20) . '_'.mt_rand(10000, 100000).'-'.time(),
        ]);
    }












    }
}
