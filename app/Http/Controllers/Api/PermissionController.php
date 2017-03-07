<?php

namespace App\Http\Controllers\Api;

use App\Models\Permission;
use Illuminate\Http\Request;

class PermissionController extends BaseApiController {

    public function index() {
        $data = Permission::orderBy('id','desc')->paginate();
        return $this->apiReturn(true,'ok',$data);
    }

    public function store(Request $request) {
        $this->validate($request ,Permission::$rules);
        $data = $request->all();
        if ( Permission::create($data) ) {
            return $this->apiReturn(true , '添加成功');
        }
    }

    public function update(Request $request , $id) {
        $permission = Permission::find($id);
        if ( !$permission ) {
            return $this->apiReturn(false , '更新失败');
        }
        if ( $permission->update($request->all()) ) {
            return $this->apiReturn(true , '更新id为' . $id . '的数据成功');
        }
        return $this->apiReturn(false , '更新失败');
    }

    public function destroy($id) {
        $permission = Permission::find($id);
        if ( $permission ) {
            $permission->delete();
            return $this->apiReturn(true , '删除成功');
        }
        return $this->apiReturn(false , '删除失败');
    }

    public function sort(Request $request) {
        $permissions = $request->all();
        $index = count($permissions);
        foreach ( $permissions as $permission ) {
            Permission::find($permission['id'])->update(['sequence' => $index]);
            $index--;
        }
        return $this->apiReturn(true , '更新排序成功');
    }
}
