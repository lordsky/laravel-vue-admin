<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Company extends Model {
    public $table = "companies";

    public $fillable = [
        "name" ,
        "detail" ,
    ];

    public static $rules = [
        "name"   => "required" ,
    ];
}
