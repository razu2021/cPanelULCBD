<?php 
namespace App\Services;

use App\Models\Apisetting;
use App\Services\captcha\RecaptchaService;
use App\Services\captcha\TurnstileService;
use App\Services\payment\BkashService;
use App\Services\payment\NagadService;
use App\Services\payment\RocketService;
use App\Services\payment\SSLCommerzService;
use App\Services\payment\StripeService;
use App\Services\sms\BulkSMSService;
use App\Services\sms\TwilioService;
use App\Services\webhook\WebhookService;

class ApiManager {

/**======== store all data form database ========== */
protected static $configs = [];

/**======= load all static driver menualy ========= */
protected static $driverMap = [
    'PAYMENT' =>[
        'sslcommerz' => SSLCommerzService::class,
        'strip'  => StripeService::class,
        'bkash'  => BkashService::class,
        'nagad'  => NagadService::class,
        'rocket' => RocketService::class,
    ],
    'SMS' =>[
        'bulksms' => BulkSMSService::class,
        'twilo'   => TwilioService::class,
    ],
    'CAPTCHA' =>[
        'recaptcha' => RecaptchaService::class,
        'turnstile' => TurnstileService::class,
    ],
    'WEBHOOK' =>[
        'webhook' => WebhookService::class,
    ],



];


/**=========== get all data form data  =========== */
public static function allConfig(){
    if(!empty(self::$configs)) return self::$configs;


    $data =Apisetting::where('public_status',1)->get(); 
    $configs = [];

    foreach($data as $items){
        $group = $items->group ?? 'defualt';
        $key = $items->key ;
        $value = $items->value;

        $configs[$group][$key]=$value;
    }

    self::$configs = $configs;

    return self::$configs;

}

public static function driver($group,$provider){

    $configs = self::allConfig();

    $config = $configs[$group] ?? [];

    if(!$config) return null;

    if(!isset(self::$driverMap[$group][$provider])){
        return null;
    }

    $driverClass = self::$driverMap[$group][$provider];

    return new $driverClass($config);
}










}