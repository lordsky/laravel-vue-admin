<?php

namespace App\Http\Controllers\Api;

use App\Models\Role;
use App\Models\User;
use Illuminate\Http\Request;

class userController extends BaseApiController {

    public function index() {
        $data = User::with('roles')->orderBy('id','desc')->paginate();
        return $this->apiReturn(true,'ok',$data);
    }

    public function store(Request $request) {
        $this->validate($request , User::$rules);
        $data = $request->all();
        if ( $user = User::create($data) ) {
            $user->roles()->sync([$data['role_id']]);
            return $this->apiReturn(true , '添加成功');
        }
    }

    public function create(){
        $dataBuilder = Role::select('*');
        $roles = $dataBuilder->orderBy('id','desc')->get();
        return $this->apiReturn(true,'ok',$roles);
    }

    public function update(Request $request , $id) {
        $this->validate($request , User::$rules);
        $user = User::find($id);
        if ( !$user ) {
            return $this->apiReturn(false , '更新失败');
        }
        $data = $request->all();
        if( $request->has('password') && !empty($request->input('password')) ){
            $data['password'] = bcrypt($data['password']);
        }else{
            unset($data['password']);
        }
        $user->update($data);
        if ( !empty($data['role_id']) ) {
            $user->roles()->sync([$data['role_id']]);
            return $this->apiReturn(true , '更新id为' . $id . '的数据成功');
        }
        return $this->apiReturn(false , '更新失败');
    }

    public function destroy($id) {
        $menu = User::find($id);
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
            User::find($menu['id'])->update(['sequence' => $index]);
            $index--;
        }
        return $this->apiReturn(true , '更新排序成功');
    }
}
