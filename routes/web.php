<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Auth::routes();

Route::get('/home', 'HomeController@index');


Route::get('/api/login', 'Auth\LoginController@showLoginForm')->name('login');
Route::post('/api/v1/login', 'Auth\LoginController@login');

Route::group(['prefix' => 'api/v1' , 'namespace' => 'Api' ,'middleware' => 'admin' ], function () {
    Route::resource('goods', 'GoodsController', ['only'=>['create','store','index','show','destroy','update']]);
    Route::resource('company', 'CompanyController', ['only'=>['create','store','index','show','destroy','update']]);
    Route::post('menu/sort', 'MenuController@sort');
    Route::get('menu/tree', 'MenuController@tree');
    Route::resource('menu', 'MenuController', ['only'=>['create','store','index','show','destroy','update']]);
    Route::post('goods_category/sort', 'GoodsCategoryController@sort');
    Route::resource('goods_category', 'GoodsCategoryController', ['only'=>['create','store','index','show','destroy','update']]);
    Route::resource('system/permission', 'PermissionController', ['only'=>['create','store','index','show','destroy','update']]);
    Route::resource('system/role', 'RoleController', ['only'=>['create','store','index','show','destroy','update']]);
    Route::resource('system/user', 'UserController', ['only'=>['create','store','index','show','destroy','update']]);
});
