<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Validation\Rules\Exists;

class GenerateLicense extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'license:generate
        {domain}
        {server}
        {developer}
        {years=5}
        {sfingerprint?}
        {dfingerprint?}
    ';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate signed license JSON (requires private key)';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $domain = $this->argument('domain');
        $server = $this->argument('server');
        $developer = $this->argument('developer');
        $years = (int) $this->argument('years');
        $sfingerprint = $this->argument('sfingerprint') ?? null;
        $dfingerprint = $this->argument('dfingerprint') ?? null;

       

        // ==== make json file code for signature ----
        $payload = [
            'domain'     => $domain,
            'server'    => $server,
            'developer'  => $developer,
            'issued_at'  => now()->timestamp,
            'expires_at' => now()->addYears($years)->timestamp,
            'sfingerprint'=> $sfingerprint,
            'dfingerprint'=> $dfingerprint,
        ];

        //-------  create json formate 
        $payloadjson = json_encode($payload);
        $payloadbase64 =  base64_encode($payloadjson);

        // private keypath 

        $privatekeypath = storage_path('app/private/keys/private.pem');

        if(!file_exists($privatekeypath)){
            $this->error("Private key not found: {$privatekeypath}");
            return Command::FAILURE;
        }

        $privatekey = file_get_contents($privatekeypath);
        $pkey = openssl_pkey_get_private($privatekey);

        if(!$pkey){
            $this->error("Could not load private key.");
            return Command::FAILURE;
        }

        openssl_sign($payloadbase64, $signature, $pkey, OPENSSL_ALGO_SHA256);
        openssl_free_key($pkey);

        $license = [
            'payload'   => $payloadbase64,
            'signature' => base64_encode($signature),
        ];

        $fileName = "license.json";
        $outPath = storage_path("licenses/{$fileName}");

        // -- delete old file or unlink old file 
        if (file_exists($outPath)) {
            unlink($outPath);
        }

        if (!is_dir(dirname($outPath))) {
            mkdir(dirname($outPath), 0755, true);
        }

        file_put_contents($outPath, json_encode($license, JSON_PRETTY_PRINT | JSON_UNESCAPED_SLASHES));

        $this->info("✅ License generated: {$outPath}");
        return Command::SUCCESS;






    }
}