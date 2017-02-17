<?php namespace App\Models;

use Zizaco\Entrust\EntrustRole;

class Role extends EntrustRole
{

    public $table = "roles";


    public $fillable = [
        "name",
        "display_name",
        "description"
    ];

    /**
     * The attributes that should be casted to native types.
     *
     * @var array
     */
    protected $casts = [
        "name" => "string",
        "display_name" => "string",
        "description" => "string"
    ];

    public static $rules = [
        "name" => "required|unique:roles",
        "display_name" => "required",
    ];

}
