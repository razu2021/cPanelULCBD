<?php

namespace App\Http\Controllers\gateway;

use App\Http\Controllers\Controller;
use App\Services\ApiManager;
use Illuminate\Http\Request;

class paymentController extends Controller
{
    /**
     * =========== Checkout page functionality start heere =======
     */
    public function checkoutPage(Request $request){
        return view('gateway.payment.checkout');
    }

    /**
     * ============= payment process functionality start here ======
     */
    public function paymentProcess(Request $request){

        $methods = $request->payment;

        $payment = ApiManager::driver('PAYMENT',$methods);

        if(!$payment){
            return back()->withErrors(['payment'=>'Selected payment method not available']);
        }


        // 3️⃣ Send payment request to driver
        //$result = $payment->pay($request->all());

        // 4️⃣ Handle response
        // if($result['status'] ?? false){
        //     return redirect()->route('payment.checkout')->with('success','Payment successful!');
        // }



       return back()->withErrors(['payment'=>'Payment failed!']);

    }
}
