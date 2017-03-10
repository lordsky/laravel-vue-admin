<?php

use App\Models\Company;
use Illuminate\Database\Seeder;

class CompanySeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $faker = Faker\Factory::create('zh_CN');
        for ( $i = 0; $i < 11; $i++ ) {
            Company::create(
                [
                    'name'   => $faker->company ,
                    'detail' => $faker->text(20) ,
                ]
            );
        }
    }
}
