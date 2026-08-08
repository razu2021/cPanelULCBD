export interface apioption{
    key:string,
    name:string,
}


export const groups: apioption[] = [

    {
        key: 'PAYMENT',
        name : 'PAYMENT'
    },
    {
        key: 'SMS',
        name : 'SMS'
    },
    {
        key: 'CAPTCHA',
        name : 'CAPTCHA'
    },
    {
        key: 'WEBHOOK',
        name : 'WEBHOOK'
    },
    {
        key: 'MAP',
        name : 'MAP'
    },
    {
        key: 'EMAIL',
        name : 'EMAIL'
    },
    {
        key: 'STORAGE',
        name : 'STORAGE'
    },
   
];

//---------- api keys list 

export const apikeys: apioption[] = [
    {
        key: 'bkash_app_key',
        name : 'Bkash App Key'
    },
    {
        key: 'bkash_app_secret',
        name : 'Bkash App Secret'
    },
    {
        key: 'nagad_api_key',
        name : 'Nagad Api Key'
    },
    {
        key: 'strip_key',
        name : 'Strip Key'
    },
    {
        key: 'ssl_store_id',
        name : 'SSL Store ID'
    },
    // ----------------- payment end 
    {
        key: 'twilio_sid',
        name : 'Twilio Sid'
    },
    {
        key: 'twilio_token',
        name : 'Twilio Token'
    },
    {
        key: 'bulk_sms_api',
        name : 'Bulk SMS API'
    },
    //----------=------------ sms end 
    {
        key: 'recaptcha_site_key',
        name : 'Recaptcha Secret Key'
    },
    {
        key: 'recaptcha_secret',
        name : 'Recaptcha secret'
    },
    {
        key: 'trunstil_site_key',
        name : 'Trunstil Site Key'
    },
    // -------------- captha end
    {
        key: 'webhook_secret',
        name : 'Webhook Secret'
    },
    {
        key: 'webhook_url',
        name : 'Webhook url'
    },
    // -----------webhook end 
    {
        key: 'google_map_api_key',
        name : 'Google Map APi key'
    },

    // ----------- map end 


];