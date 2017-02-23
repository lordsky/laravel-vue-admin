<?php

namespace App\Http\Controllers\Api;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends BaseApiController {

    public function index() {
        $data = Menu::paginate();
        return response()->json($data);
    }

    public function store(Request $request) {
        $this->validate(
            $request ,
            [
                'name'   => 'required|max:30' ,
                'detail' => 'required|max:100' ,
            ]
        );
        if ( Menu::create($request->all()) ) {
            return $this->apiReturn(true , '添加成功');
        }
    }

    public function update(Request $request , $id) {
        $menu = Menu::find($id);
        if ( !$menu ) {
            return $this->apiReturn(false , '更新失败');
        }
        if ( $menu->update($request->all()) ) {
            return $this->apiReturn(true , '更新成功');
        }
        return $this->apiReturn(false , '更新失败');
    }

    public function destroy($id) {
        $menu = Menu::find($id);
        if ( $menu ) {
            $menu->delete();
            return $this->apiReturn(true , '删除成功');
        }
        return $this->apiReturn(false , '删除失败');
    }

}
