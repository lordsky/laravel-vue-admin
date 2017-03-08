<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use JWTAuth;

class BaseApiController extends Controller {


    public function user(){
        $token = request()->headers->get('Authorization');
        $user = JWTAuth::toUser($token);
        return $user;
    }

    protected function apiReturn($status = false , $message = '' , $data = '') {
        return response()->json(compact('status' , 'message' , 'data'));
    }

}
