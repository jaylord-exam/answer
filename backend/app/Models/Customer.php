<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Customer extends Model
{
    use HasFactory;

    protected $fillable = [
        'firstname',
        'lastname',
        'email_address'
    ];

    static $validation = [
        'firstname' => 'required',
        'lastname' => 'required',
        'email_address' => 'required',
    ];
}
