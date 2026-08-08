<?php

namespace App\Console\Commands;
use App\Models\License;
use Illuminate\Console\Command;
use Carbon\Carbon; //----------  defualt -------
use Illuminate\Support\Facades\Crypt;

class ActiveLicense extends Command
{
 /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'active:license {appkey}';


    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'License Active ';

    // hide the command in artisan list 
    protected $hidden = true;

    /**
     * Execute the console command.
     */
 
public function handle()
    {
        $appkey = $this->argument('appkey');
        $jsonkeypath = storage_path('licenses/license.json');

        if(!file_exists($jsonkeypath)){
            $this->error("Json Data not Found !: {$jsonkeypath}");
            return Command::FAILURE;
        }

        $jsondata = file_get_contents($jsonkeypath);
        $license = json_decode($jsondata, true);

        if(!isset($license['payload'], $license['signature'])){
            $this->error("Invalid license structure!");
            return Command::FAILURE;
        }

        // --- PATH FIX: Key folder-ti storage/app/private-e hobe ---
        $publickeypath = storage_path('app/private/keys/public.pem');
        
        if(!file_exists($publickeypath)) {
            $this->error("Public key not found at: {$publickeypath}");
            return Command::FAILURE;
        }

        $pkey = openssl_pkey_get_public(file_get_contents($publickeypath));

        $payloadBase64 = $license['payload'];
        $signature = base64_decode($license['signature']);

        $verify = openssl_verify($payloadBase64, $signature, $pkey, OPENSSL_ALGO_SHA256);

        if ($verify === 1) {
            License::truncate(); // Purono sob data muche noutun license save kora

            $payload = json_decode(base64_decode($payloadBase64), true);

            // Database-e data gulo save kora (Developer info ekhonei encrypt hoye jacche)
            License::create([
                'domain'            => Crypt::encryptString($payload['domain']),
                'server'            => Crypt::encryptString($payload['server']),
                'sfingerprint'      => Crypt::encryptString($payload['sfingerprint'] ?? 'N/A'),
                'developer'         => Crypt::encryptString($payload['developer']),
                'dfingerprint'      => Crypt::encryptString($payload['dfingerprint'] ?? 'N/A'),
                'token_encrypted'   => $license['signature'],
                'payload_encrypted' => $license['payload'],
                'installed_at'      => now(),
                'expires_at'        => Carbon::createFromTimestamp($payload['expires_at']),
                'app_key'           => Crypt::encryptString($appkey),
            ]);

            $this->info("✅ License activated successfully!");
            return Command::SUCCESS;

        } elseif ($verify === 0) {
            $this->error("❌ License signature invalid!");
        } else {
            $this->error("⚠️ OpenSSL error: " . openssl_error_string());
        }
    }




}
