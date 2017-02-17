<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Auth;

class MenuController extends Controller {
    public function  index(){
        $username = Auth::user();
        echo 2;
    }
}
