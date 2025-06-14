<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class VipReward extends Model
{
    protected $table = 'vips_rewards';

    public function vip()
    {
        return $this->belongsTo(Vip::class, 'vip_id');
    }
}
