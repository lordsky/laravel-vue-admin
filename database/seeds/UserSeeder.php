<?php

use App\Models\Role;
use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $admin = User::firstOrCreate(
            [
                'name'     => 'admin' ,
                'email'    => 'admin@admin.com' ,
                'password' => ''
            ]
        );
        $admin->password = Hash::make('123456');
        $admin->save();
        $adminRole = Role::where('name' , 'admin')->first();
        $admin->attachRole($adminRole);

        $normal = User::firstOrCreate(
            [
                'name'     => 'test' ,
                'email'    => 'test@test.com' ,
                'password' => Hash::make('123456') ,
            ]
        );
        $normalRole = Role::where('name' , 'normal')->first();
        $normal->attachRole($normalRole);
    }
}
