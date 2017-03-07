<?php

namespace App\Http\Controllers\Api;

use App\Models\Permission;
use App\Models\Role;
use Illuminate\Http\Request;

class RoleController extends BaseApiController {

    public function index() {
        $data = Role::orderBy('id','desc')->paginate();
        return $this->apiReturn(true,'ok',$data);
    }

    public function store(Request $request) {
        $this->validate($request , Role::$rules);
        $data = $request->all();
        if ( Role::create($data) ) {
            return $this->apiReturn(true , '添加成功');
        }
    }

    public function create(){
        $dataBuilder = Permission::select('*')->where('parent_id',0)->with('children');
        $permissions = $dataBuilder->orderBy('id','desc')->get();
        return $this->apiReturn(true,'ok',$permissions);
    }

    public function update(Request $request , $id) {
        $role = Role::find($id);
        if ( !$role ) {
            return $this->apiReturn(false , '更新失败');
        }
        if ( $role->update($request->all()) ) {
            return $this->apiReturn(true , '更新id为' . $id . '的数据成功');
        }
        return $this->apiReturn(false , '更新失败');
    }

    public function destroy($id) {
        $role = Role::find($id);
        if ( $role ) {
            $role->delete();
            return $this->apiReturn(true , '删除成功');
        }
        return $this->apiReturn(false , '删除失败');
    }

    public function sort(Request $request) {
        $roles = $request->all();
        $index = count($roles);
        foreach ( $roles as $role ) {
            Role::find($role['id'])->update(['sequence' => $index]);
            $index--;
        }
        return $this->apiReturn(true , '更新排序成功');
    }
}
