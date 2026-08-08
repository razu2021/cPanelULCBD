<?php 
namespace App\Services\payment;
class BkashService{

 protected $config;

    public function __construct($config){
        $this->config = $config; // API key etc.
    }

    public function pay($data){
        // 1️⃣ Validate data
        // 2️⃣ Call Stripe API with card info, amount etc.
        // 3️⃣ Return response array ['status'=>true/false,'message'=>'...']

        // Example (pseudo code)


        
        return [
            'status' => true,
            'message' => 'Payment successful'
        ];
    }
    
}