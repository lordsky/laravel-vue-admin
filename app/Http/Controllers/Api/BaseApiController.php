<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;

class BaseApiController extends Controller {

    protected function apiReturn($status = false , $message = '' , $data = '') {
        return response()->json(compact('status' , 'message' , 'data'));
    }

}
