<?php

namespace App\Models;
use Illuminate\Database\Eloquent\Model;

class GoodsCategory extends Model
{
    public $table = "goods_categories";

    public $fillable = [
        "name",
        "detail",
        "sequence",
    ];

    public static $rules = [
        "name" => "required",
    ];
}
