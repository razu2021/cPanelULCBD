<?php

namespace App\Http\Middleware;


use App\Exceptions\LicenseException;
use Illuminate\Support\Facades\Log;
use App\Models\License;
use Closure;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Support\Facades\Crypt;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Cache;

class VerifyLicense
{
    /**
     * Handle an incoming request.
     *
     * @param  Closure(Request): (Response)  $next
     */

    public function handle(Request $request, Closure $next): Response
    {

        $data = Cache::rememberForever('license_status', function () {
            return License::first();
        });

     

        if(!$data){
            return response()->view('errors.license', ['message' => "No activation record found!"], 403);
        }
        
        try{
            $licenseDomain = Crypt::decryptString($data->domain);
            $licenseServer = Crypt::decryptString($data->server);
            $serverFingerprint = Crypt::decryptString($data->sfingerprint);
            $licensDeveloper = Crypt::decryptString($data->developer);
            $developerFingerprint = Crypt::decryptString($data->dfingerprint);
            $appkey = Crypt::decryptString($data->app_key);
            
            $original_key = config('app.key'); // env('APP_KEY') er cheye config use kora safe
            $tokenencripted = $data->token_encrypted;
            $payloadencripted = $data->payload_encrypted;
           
        } catch(\Throwable $e){
            return response()->view('errors.license', ['message' => "License data is corrupted or APP_KEY changed!"], 403);
        }

        // PATH FIX: app/private/keys
        $licensepath = storage_path('licenses/license.json');
        $publickeypath = storage_path('app/private/keys/public.pem');

        if(!file_exists($licensepath ) || !file_exists($publickeypath)){
            return response()->view('errors.license', ['message' => 'License files missing!'], 403);
        }

        $license = json_decode(file_get_contents($licensepath), true);
        $publicKey = file_get_contents($publickeypath);
        $pkey = openssl_pkey_get_public($publicKey);

        $payloadBase64 = $license['payload'] ?? '';
        $signature = base64_decode($license['signature'] ?? '');

        // Signature Verify
        $isValid = openssl_verify($payloadBase64, $signature, $pkey, OPENSSL_ALGO_SHA256);

        if ($isValid !== 1) {
            return response()->view('errors.license', ['message' => "❌ Invalid license signature."], 403);
        }

        $payload = json_decode(base64_decode($payloadBase64), true);

        // --- DOMAIN CHECK ---
        $realdomain = $this->getRealDomain($request);
        if ($payload['domain'] !== $licenseDomain || $licenseDomain !== $realdomain) {
           return response()->view('errors.license', ['message' => "Domain mismatch!"], 403);
        }

        // --- APP_KEY CHECK ---
        if($appkey !== $original_key){
            return response()->view('errors.license', ['message' => "System Environment Key mismatch!"], 403);
        }

        // --- EXPIRY CHECK (Fixed Logic) ---
        if (isset($payload['expires_at']) && $payload['expires_at'] < time()) {
            return response()->view('errors.license', ['message' => "❌ License expired"], 403);
        }

        // --- DATA INTEGRITY CHECK (Database vs File) ---
        if($payloadBase64 !== $payloadencripted || $license['signature'] !== $tokenencripted){
            return response()->view('errors.license', ['message' => "License tampering detected!"], 403);
        }

        return $next($request);
    }



        /**=================   
     * 
     *=================================== all protected fucntion start here =============================
     * 
     *  =========== */


    /**---------------  get Real Domain ---------------- */
    protected function getRealDomain(Request $request)
    {
        $host = $request->getHost(); // proxy-aware Laravel

        // Normalize
        $host = strtolower(trim((string) $host));
        $host = preg_replace('#^https?://#', '', $host);
        $host = preg_replace('/:\d+$/', '', $host);
        $host = preg_replace('/^www\./', '', $host);

        return $host; // যেমন: "priyomaster.com"
    }

}
