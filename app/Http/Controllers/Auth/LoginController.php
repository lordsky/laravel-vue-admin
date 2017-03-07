<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use Illuminate\Foundation\Auth\AuthenticatesUsers;
use Illuminate\Http\Request;
use Lang;

class LoginController extends Controller {
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

    public function username() {
        return 'name';
    }

    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct() {
//        $this->middleware('guest', ['except' => 'logout']);
    }

    public function authenticated(Request $request , $user) {
        logger()->info(__CLASS__ . __LINE__);
        $user_roles = $user->roles()->first()->cachedPermissions()->toArray();
        $permissions = array_pluck($user_roles , 'name');
        $user->permissions = $permissions;
        if ( $request->ajax() ) {
            logger()->info(__CLASS__ . __LINE__);
            return response()->json(['data' => $user]);
        } else {
            return redirect()->intended($this->redirectPath());
        }
    }

    public function sendFailedLoginResponse() {
        $data = [
                $this->username() => Lang::get('auth.failed') ,
            ];
        return response()->json(['data' => $data]);
    }
}
