<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;

class LoginController extends Controller
{
    /*
    |--------------------------------------------------------------------------
    | Login Controller
    |--------------------------------------------------------------------------
    |
    | This controller handles authenticating users for the application and
    | redirecting them to your home screen. The controller uses a trait
    | to conveniently provide its functionality to your applications.
    |
    */

    use AuthenticatesUsers;

    /**
     * Where to redirect users after login.
     *
     * @var string
     */
    protected $redirectTo = '/home';

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
//        $this->middleware('guest', ['except' => 'logout']);
        logger()->info('test');
    }

    public function authenticated(Request $request,$user) {
        logger()->info(__CLASS__.__LINE__);
        if( $request->ajax() ){
            logger()->info(__CLASS__.__LINE__);
            return response()->json(['data'=>$user]);
        }else{
            return redirect()->intended($this->redirectPath());
        }
    }
}
