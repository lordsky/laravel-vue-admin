<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Menu;

class MenuController extends Controller {

    public function index() {
        $data = Menu::paginate();
        return response()->json($data);
    }
}
