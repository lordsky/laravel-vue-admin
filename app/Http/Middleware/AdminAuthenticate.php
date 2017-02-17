<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Contracts\Auth\Guard;
use Auth;
use Route;
use Zizaco\Entrust;
use Log;
use App\Models\Permission;

class AdminAuthenticate {
    /**
     * The Guard implementation.
     *
     * @var Guard
     */
    protected $auth;

    /**
     * Create a new filter instance.
     *
     * @param  Guard $auth
     * @return void
     */
    public function __construct(Guard $auth) {
        $this->auth = $auth;
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure                 $next
     * @return mixed
     */
    public function handle($request , Closure $next) {
        if ( $this->auth->guest() ) {
            if ( $request->ajax() ) {
                return response('admin Unauthorized.' , 401);
            } else {
                return redirect()->guest('/login');
            }
        }
        $user = Auth::user();
        $currentRoute = Route::currentRouteName();
        //只有作为权限写入权限表里的，才判断是否有权限
        if ( Permission::where('name' , $currentRoute)->count() ) {
            if ( !$user->can($currentRoute) ) {
                if ( $request->ajax() ) {
                    return response('admin Unauthorized.' , 403);
                }
                return redirect()->route('admin.access_denied')->with('fail' , '无权访问' . $currentRoute);
            }
        }
        return $next($request);
    }
}
