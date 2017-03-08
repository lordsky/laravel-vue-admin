<?php

namespace App\Http\Middleware;

use Closure;
use Tymon\JWTAuth\Facades\JWTAuth;
use Exception;

class authJWT {
    public function handle($request , Closure $next) {
        $token = $request->headers->get('Authorization');
        if ( empty($token) ) {
            return response()->json(['error' => 'Token 缺失'] , 401);
        }
        try {
            // 如果用户登陆后的所有请求没有jwt的token抛出异常
            $user = JWTAuth::toUser($token);
        } catch ( Exception $e ) {
            if ( $e instanceof \Tymon\JWTAuth\Exceptions\TokenInvalidException ) {
                return response()->json(['error' => 'Token 无效'] , 403);
            } else {
                if ( $e instanceof \Tymon\JWTAuth\Exceptions\TokenExpiredException ) {
                    return response()->json(['error' => 'Token 已过期'] , 401);
                } else {
                    return response()->json(['error' => '出错了'] , 500);
                }
            }
        }
        return $next($request);
    }
}