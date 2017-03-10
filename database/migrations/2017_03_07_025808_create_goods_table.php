<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateGoodsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('goods', function (Blueprint $table) {
            $table->engine = 'InnoDB';
            $table->increments('id');
            $table->integer('category_id')->default(0)->comment('分类id');
            $table->integer('company_id')->default(0)->comment('公司id');
            $table->string('name',100);
            $table->string('detail',300)->nullable()->comment('简介');
            $table->string('img',100)->nullable()->comment('图片');
            $table->text('description')->nullable()->comment('描述');
            $table->string('erp_code')->comment('物料代码');
            $table->decimal('price', 10, 2)->unsigned()->nullable()->comment('内购价');
            $table->decimal('special_price',10,2)->unsigned()->nullable()->comment('特惠价');
            $table->decimal('official_price',10,2)->unsigned()->nullable()->comment('官方零售价');
            $table->integer('stock')->default(100)->comment('库存');
            $table->tinyInteger('online')->default(1)->comment('是否上架：0下架，1上架');
            $table->integer('sequence')->default(0)->comment('排序权重');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::drop('goods');
    }
}
