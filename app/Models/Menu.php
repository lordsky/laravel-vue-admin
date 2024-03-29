<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Menu extends Model
{

    protected $fillable = ['parent_id', 'sequence', 'name', 'icon', 'uri', 'detail'];

    protected $casts = [
        "detail" => "string",
    ];

}
