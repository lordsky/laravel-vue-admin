<?php namespace App\Models;

use Zizaco\Entrust\EntrustPermission;

class Permission extends EntrustPermission {

    public $table = "permissions";


    public $fillable = [
        "name" ,
        "display_name" ,
        "description" ,
        "parent_id"
    ];

    public static $rules = [
        "name"         => "required|unique:permissions" ,
        "display_name" => "required"
    ];

    public function children() {
        return $this->hasMany($this , 'parent_id');
    }

    public function parent() {
        return $this->belongsTo($this , 'parent_id');
    }
}
