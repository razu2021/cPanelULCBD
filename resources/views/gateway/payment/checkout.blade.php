@extends('layouts/frontend')
@section('web_content')
<div class="container my-5">
    <div class="row justify-content-center">
        <div class="col-md-6">
            <div class="card shadow-sm">
                <div class="card-header bg-primary text-white">
                    <h4 class="mb-0">Checkout</h4>
                </div>
                <div class="card-body">
                    <form method="POST" action="{{route('payment.process')}}">
                        @csrf

                        <p class="mb-3">Select your payment method:</p>

                        <div class="form-check mb-2">
                            <input class="form-check-input" type="radio" name="payment" id="bkash" value="bkash" required>
                            <label class="form-check-label" for="bkash">
                                Bkash
                            </label>
                        </div>

                        <div class="form-check mb-2">
                            <input class="form-check-input" type="radio" name="payment" id="nagad" value="nagad">
                            <label class="form-check-label" for="nagad">
                                Nagad
                            </label>
                        </div>

                        <div class="form-check mb-2">
                            <input class="form-check-input" type="radio" name="payment" id="rocket" value="rocket">
                            <label class="form-check-label" for="rocket">
                                Rocket
                            </label>
                        </div>

                        <div class="form-check mb-4">
                            <input class="form-check-input" type="radio" name="payment" id="stripe" value="strip">
                            <label class="form-check-label" for="stripe">
                                Stripe
                            </label>
                        </div>

                        <button type="submit" class="btn btn-primary w-100">
                            Pay Now
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection
