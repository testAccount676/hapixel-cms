<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Vip extends Model
{
    protected $table = 'vips';

    public function rewards()
    {
        return $this->hasMany(VipReward::class, 'vip_id');
    }
}
