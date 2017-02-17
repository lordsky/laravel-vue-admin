<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateMenuTables extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        //
        Schema::create('menus', function (Blueprint $table) {
            $table->increments('id')->comment('ID');
            $table->integer('parent_id')->default(0)->comment('父级ID');
            $table->integer('sequence')->default(0)->comment('排序，asc');
            $table->string('name', 30)->comment('名称');
            $table->string('detail', 50)->nullable()->comment('描述');
            $table->string('icon', 20)->comment('字体图标');
            $table->string('uri', 20)->comment('路由名');
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
        Schema::drop('menus');
    }
}
