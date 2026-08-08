<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class DeveloperInfo extends Command
{
 /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:developer-info';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Show Developer Information ';

    // hide the command in artisan list 
    protected $hidden = true;
    /**
     * Execute the console command.
     */
    public function handle()
    {
        
         // Table 1: Developer Info
        $devInfo = [
            ['Property', 'Value'],
            ['Developer Name', 'mdrazuhossainraj_01817078309'],
            ['Dev Fingerprint', 'razu247'],
            ['Email', 'raj.web247@gmail.com'],
            ['Phone', '+8801817078309'],
            ['Environment', config('app.env')],
            ['Laravel Version', app()->version()],
            ['PHP Version', phpversion()],
            ['Timezone', config('app.timezone')],
            ['URL', config('app.url')],
        ];

        $header = array_shift($devInfo);
        $this->info("\n👨‍💻 Developer Info");
        $this->table($header, $devInfo);

        // Table 2: Social Media Links
        $socialLinks = [
            ['Platform', 'URL'],
            ['Facebook', 'https://facebook.com/mdrazuhossainraj'],
            ['LinkedIn', 'https://linkedin.com/in/mdrazuhossainraj'],
            ['YouTube', 'https://youtube.com/@mdrazuhossainraj'],
            ['GitHub', 'https://github.com/mdrazuhossainraj'],
        ];

        $socialHeader = array_shift($socialLinks);
        $this->info("\n🌐 Social Media Links");
        $this->table($socialHeader, $socialLinks);

    }
}
