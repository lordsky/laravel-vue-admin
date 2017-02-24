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
Route::post('/api/login', 'Auth\LoginController@login');

Route::group(['prefix' => 'api/v1' , 'namespace' => 'Api' ], function () {
    Route::resource('menu', 'MenuController', ['only'=>['create','store','index','show','destroy','update']]);
});
