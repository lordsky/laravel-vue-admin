<?php

use Illuminate\Database\Seeder;
use App\Models\Role;
use App\Models\Permission;

class EntrustSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    private $role_admin;
    private $role_test1;
    private $role_test2;

    public function run() {
        $this->role_run();
        $this->permission_run();
    }

    private function role_run() {
        $this->role_admin = Role::create(
            array(
                'name'         => 'admin' ,
                'display_name' => '超级管理员' ,
                'description'  => '超级权限'
            )
        );
        $this->role_test1 = Role::create(
            array(
                'name'         => 'order' ,
                'display_name' => '订单审核人' ,
                'description'  => '所有权限，除了角色、权限管理'
            )
        );
        $this->role_test2 = Role::create(
            array(
                'name'         => 'normal' ,
                'display_name' => '仓储' ,
                'description'  => '简单权限'
            )
        );
    }

    private function permission_run() {
        $moduleArr = array(
            'orders'   => '订单',
            'users'   => '用户',
        );
        $actionArr = array(
            'index' => '浏览',
            'edit'=> '编辑',
            'update'=> '更新',
            'create'=> '创建',
            'store'=> '添加',
            'destroy'=> '删除',
        );
        $this->permission_attach_run($moduleArr,$actionArr,$this->role_admin);
        $this->permission_attach_run(array_slice($moduleArr,1),$actionArr,$this->role_test1);
        $this->permission_attach_run(array_slice($moduleArr,2),$actionArr,$this->role_test2);
    }

    private function permission_attach_run($moduleArr,$actionArr,$role){
        $permission_Ids = array();
        foreach($moduleArr as $moduleKey=>$moduleLabel){
            $permissionParent =  Permission::firstOrCreate(array('name'=>$moduleKey,'display_name'=>$moduleLabel,'parent_id'=>0));
            $permission_Ids[] = $permissionParent->id;
            foreach($actionArr as $actionKey=>$actionLabel){
                $permission_name = $moduleKey.'.'.$actionKey;
                $permission_display_name = $moduleLabel.$actionLabel;
                $permission =  Permission::firstOrCreate(array('name'=>$permission_name,'display_name'=>$permission_display_name,'parent_id'=>$permissionParent->id));
                $permission_Ids[] = $permission->id;
            }
        }
        if( !empty($permission_Ids) ){
            $role->perms()->sync($permission_Ids);
        }
    }
}
