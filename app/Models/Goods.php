<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Goods extends Model {
    public $table = "goods";

    public $fillable = [
        "name" ,
        "detail" ,
        "category_id" ,
        "company_id" ,
        "img" ,
        "description" ,
        "erp_code" ,
        "price" ,
        "official_price" ,
        "special_price" ,
        "stock" ,
        "online" ,
        "sequence" ,
    ];

    public static $rules = [
        "name"           => "required" ,
        "price"          => "required" ,
        "category_id"    => 'required' ,
        "company_id"     => 'required' ,
        "img"            => 'required' ,
        "erp_code"       => "required|digits_between:6,8" ,
        "price"          => "required|numeric|max:10000|min:1" ,
        "official_price" => "numeric|max:10000|min:1" ,
        "special_price"  => "numeric|max:10000|min:1" ,
        "online"         => 'required|boolean' ,
        "stock"          => 'required:numeric' ,
    ];
}
