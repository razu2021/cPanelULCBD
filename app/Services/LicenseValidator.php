<?php
namespace App\Services;

use App\Models\License;
use Illuminate\Support\Facades\Crypt;
class LicenseValidator{

   public function check()
   {

    try{

        // -- get database data  
        $data = License::first();

        if(!$data){
            return response()->view('errors.license', ['message' => "License Domain is not valid"], 403);
        }

        $licenseDomain = Crypt::decryptString($data->domain);
        $licenseServer = Crypt::decryptString($data->server);
        $serverFingerprint = Crypt::decryptString($data->sfingerprint);
        $licensDeveloper = Crypt::decryptString($data->developer);
        $developerFingerprint = Crypt::decryptString($data->dfingerprint);
        $appkey = Crypt::decryptString($data->app_key);
        $original_key = env('APP_KEY');
        $tokenencripted = $data->token_encrypted;
        $payloadencripted = $data->payload_encrypted;


        //-----------------  get the path ----------
        $licensepath = storage_path('licenses/license.json');
        $publickeypath = storage_path('app/public/keys/public.pem');

        if(!file_exists($licensepath ) || !file_exists($publickeypath)){
            abort(403. ,'License or public key missing !');
        }

        // -- decode license 

        $license = json_decode(file_get_contents($licensepath), true);
        $publicKey = file_get_contents($publickeypath);
        $pkey = openssl_pkey_get_public($publicKey);


        $payloadBase64 = $license['payload'] ?? '';
        $signature = base64_decode($license['signature'] ?? '');

        $isValid = openssl_verify($payloadBase64, $signature, $pkey, OPENSSL_ALGO_SHA256);

        if (!$isValid) {
            abort(403, "❌ Invalid license signature.");
        }

        $payload = json_decode(base64_decode($payloadBase64), true);

         /**--------  application key check ---------- */
        if(!($appkey === $original_key)){
            return false;
        }

        /**----------  check web sever --------- */
        if(!($payload['server'] === $licenseServer)){
            return false;
        }

        /**----------  check server fingerprint  --------- */
        if(!($payload['sfingerprint'] === $serverFingerprint)){
            return false;
        }

        /**----------  check Developer   --------- */
        if(!($payload['developer'] === $licensDeveloper)){
            return false;
        }

        /**----------  check Developer   --------- */
        if(!($payload['dfingerprint'] === $developerFingerprint)){
            return false;
        }

        /**----------  check payload json data     --------- */
        if(!($payloadBase64 === $payloadencripted)){
            return false;
        }

        /**----------  check signature json data     --------- */
        if(!($license['signature'] === $tokenencripted)){
            return false;
        }

        if (!($payload['expires_at']) === strtotime($payload['expires_at'])  && $payload['expires_at'] < time()) {
            return false;
        }


        return true ;

    }catch(\Throwable $e){
        return false ;
    }




    // class end 
   } 













}