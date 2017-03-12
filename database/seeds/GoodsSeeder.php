<?php

use App\Models\Goods;
use Illuminate\Database\Seeder;

class GoodsSeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        $faker = Faker\Factory::create(config('locate' , 'zh_CN'));
        for ( $i = 0; $i < 33; $i++ ) {
            $randomCategory = DB::table('goods_categories')->inRandomOrder()->first();
            $randomCompany = DB::table('companies')->inRandomOrder()->first();
            $data = [
                'name'           => $faker->realText(20),
                'detail'         => $faker->realText(100) ,
                'category_id'    => $randomCategory->id ,
                'company_id'     => $randomCompany->id ,
                'img'            => $faker->imageUrl(300 , 200) ,
                'erp_code'       => $faker->numberBetween(100000 , 999999) ,
                'price'          => $faker->numberBetween(33 , 9999) ,
                'official_price' => $faker->numberBetween(33 , 9999) ,
                'special_price'  => $faker->numberBetween(33 , 9999) ,
                'online'         => $faker->boolean() ? 1 : 0 ,
                'sequence'       => $faker->numberBetween(1 , 1000) ,
                'stock'          => $faker->numberBetween(1 , 1000) ,
            ];
            Goods::create($data);
        }
    }
}
