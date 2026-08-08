<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\File;
class GenerateSecureKeys extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'app:generate-secure-keys';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate RSA Public and Private keys for Licensing';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $path = storage_path('app/private/keys');

        // Folder na thakle toiri korbe
        if (!File::exists($path)) {
            File::makeDirectory($path, 0755, true);
        }

        $config = [
            "private_key_bits" => 2048,
            "private_key_type" => OPENSSL_KEYTYPE_RSA,
            "config" => 'C:\laragon\bin\apache\httpd-2.4.66-260223-Win64-VS18\conf/openssl.cnf'
        ];

        // ১. Noutun Key Pair toiri kora
        $res = openssl_pkey_new($config);

        if (!$res) {
            $this->error("❌ Key pair generate kora somvob hoyni. OpenSSL error: " . openssl_error_string());
            return Command::FAILURE;
        }

        // ২. Private Key extract kora 
        // Problem eikhane: Ekhane obosshoi $config pass korte hobe
        $privateKey = null;
        if (!openssl_pkey_export($res, $privateKey, null, $config)) {
            $this->error("❌ Private key extract korte bortho: " . openssl_error_string());
            return Command::FAILURE;
        }

        // ৩. Public Key extract kora
        $publicKeyData = openssl_pkey_get_details($res);
        $publicKey = $publicKeyData["key"];

        // ৪. File hishebe save kora
        File::put($path . '/private.pem', $privateKey);
        File::put($path . '/public.pem', $publicKey);

        $this->info("✅ Keys generated successfully at: " . $path);
        $this->comment("Keep 'private.pem' safe and NEVER share it.");
    }




}
