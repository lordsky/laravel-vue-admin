<?php

namespace App\Models;

use Illuminate\Notifications\Notifiable;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Zizaco\Entrust\Traits\EntrustUserTrait;

class User extends Authenticatable {
    use Notifiable;
    use EntrustUserTrait;

    public static $rules = [
        "name"     => "required|unique:users" ,
        "email"     => "required|unique:users|email" ,
        "password" => "required|min:6" ,
    ];
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name' ,
        'email' ,
        'password' ,
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password' ,
        'remember_token' ,
    ];
}
