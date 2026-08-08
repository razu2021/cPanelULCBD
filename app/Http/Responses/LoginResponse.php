<?php

namespace App\Http\Responses;

use Laravel\Fortify\Contracts\LoginResponse as LoginResponseContract;

class LoginResponse implements LoginResponseContract
{
    public function toResponse($request)
    {
        $user = $request->user();

        //- redirect dashboard based on the  user role 
        if ($user->role === 'admin') {
            return redirect()->intended(route('admin_dashboard'));
        }elseif ($user->role === 'user') {
            return redirect()->intended(route('dashboard'));
        }

        
    }
}