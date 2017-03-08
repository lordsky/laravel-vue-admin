<?php

namespace App\Http\Controllers\Api;

use App\Models\GoodsCategory;
use Illuminate\Http\Request;

class GoodsCategoryController extends BaseApiController {

    public function index(Request $request) {
//        $token = $request->headers->get('Authorization');
//        $user = JWTAuth::toUser($token);
        $user = $this->user();
        $data = GoodsCategory::OrderBy('sequence' , 'desc')->paginate();
        return $this->apiReturn(true,'ok',$data);
    }

    public function show($id){
        $data = GoodsCategory::findOrfail($id);
        return $this->apiReturn(true,'ok',$data);
    }

    public function store(Request $request) {
        $this->validate(
            $request ,
            [
                'name'   => 'required|max:40' ,
                'detail' => 'required|max:100' ,
            ]
        );
        $data = $request->all();
        $data['sequence'] = GoodsCategory::max('sequence') + 1;
        if ( GoodsCategory::create($data) ) {
            return $this->apiReturn(true , '添加成功');
        }
    }

    public function update(Request $request , $id) {
        $menu = GoodsCategory::find($id);
        if ( !$menu ) {
            return $this->apiReturn(false , '更新失败');
        }
        if ( $menu->update($request->all()) ) {
            return $this->apiReturn(true , '更新id为' . $id . '的数据成功');
        }
        return $this->apiReturn(false , '更新失败');
    }

    public function destroy($id) {
        $menu = GoodsCategory::find($id);
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
            GoodsCategory::find($menu['id'])->update(['sequence' => $index]);
            $index--;
        }
        return $this->apiReturn(true , '更新排序成功');
    }
}
