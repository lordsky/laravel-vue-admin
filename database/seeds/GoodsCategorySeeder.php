<?php

use App\Models\GoodsCategory;
use Illuminate\Database\Seeder;

class GoodsCategorySeeder extends Seeder {
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run() {
        GoodsCategory::create(
            [
                'sequence' => 1 ,
                'name'     => '周边' ,
                'detail'   => '周边产品' ,
            ]
        );
        GoodsCategory::create(
            [
                'sequence' => 2 ,
                'name'     => '配件' ,
                'detail'   => '很多配件呢' ,
            ]
        );
        GoodsCategory::create(
            [
                'sequence' => 3 ,
                'name'     => '手机' ,
                'detail'   => '手机产品' ,
            ]
        );
    }
}
