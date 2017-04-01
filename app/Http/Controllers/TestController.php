<?php
namespace App\Http\Controllers;


use App\Models\OppoInternalLogin;

class TestController extends Controller {

    public function index() {
        $this->login();
    }

    private function login() {
//        $result = OppoInternalLogin::attempt('80070176' , 'lb-888');
        $result = OppoInternalLogin::attempt('80063126' , 'czj-888');
        dd($result);
    }
}
