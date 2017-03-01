<?php

namespace App\Http\Controllers\Api;

use App\Models\Menu;
use Illuminate\Http\Request;

class MenuController extends BaseApiController {

    public function index() {
        $data = Menu::OrderBy('sequence' , 'desc')->paginate();
        return $this->apiReturn(true,'ok',$data);
    }

    public function store(Request $request) {
        $this->validate(
            $request ,
            [
                'name'   => 'required|max:30' ,
                'detail' => 'required|max:100' ,
            ]
        );
        $data = $request->all();
        $data['sequence'] = Menu::max('sequence') + 1;
        if ( Menu::create($data) ) {
            return $this->apiReturn(true , '添加成功');
        }
    }

    public function update(Request $request , $id) {
        $menu = Menu::find($id);
        if ( !$menu ) {
            return $this->apiReturn(false , '更新失败');
        }
        if ( $menu->update($request->all()) ) {
            return $this->apiReturn(true , '更新id为' . $id . '的数据成功');
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

    public function sort(Request $request) {
        $menus = $request->all();
        $index = count($menus);
        foreach ( $menus as $menu ) {
            Menu::find($menu['id'])->update(['sequence' => $index]);
            $index--;
        }
        return $this->apiReturn(true , '更新排序成功');
    }
}
