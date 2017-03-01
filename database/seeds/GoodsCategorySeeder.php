<?php

use App\Models\Menu;
use Illuminate\Database\Seeder;

class MenuSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        //仪表盘
        Menu::create([
            'parent_id' => 0,
            'sequence' => 1,
            'name' => '仪表盘',
            'icon' => 'speedometer',
            'uri' => 'dashboard',
        ]);

        Menu::create([
            'parent_id' => 1,
            'sequence' => 1,
            'name' => '系统总览',
            'icon' => 'notebook',
            'uri' => 'index',
        ]);

        Menu::create([
            'parent_id' => 1,
            'sequence' => 2,
            'name' => '图标参考',
            'icon' => 'list',
            'uri' => 'admin.icon',
        ]);

        //用户管理
        Menu::create([
            'parent_id' => 0,
            'sequence' => 2,
            'name' => '用户管理',
            'icon' => 'settings',
            'uri' => 'user',
        ]);

        Menu::create([
            'parent_id' => 4,
            'sequence' => 2,
            'name' => '用户组管理',
            'icon' => 'list',
            'uri' => 'role',
        ]);

        Menu::create([
            'parent_id' => 4,
            'sequence' => 3,
            'name' => '用户组权限',
            'icon' => 'list',
            'uri' => 'permission',
        ]);

        //设置
        Menu::create([
            'parent_id' => 0,
            'sequence' => 3,
            'name' => '设置',
            'icon' => 'settings',
            'uri' => 'setting',
        ]);

        Menu::create([
            'parent_id' => 8,
            'sequence' => 1,
            'name' => '编辑菜单',
            'icon' => 'list',
            'uri' => 'menu',
        ]);

        //系统日志
        Menu::create([
            'parent_id' => 0,
            'sequence' => 3,
            'name' => '系统日志',
            'icon' => 'settings',
            'uri' => 'log',
        ]);

    }
}
