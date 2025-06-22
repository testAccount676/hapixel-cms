<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\DB;

class ProfileController extends Controller
{
    public function __invoke()
    {
        $badgesInUse = DB::table("player_badges")
            ->where("player_id", auth()->user()->id)
            ->where("slot", ">", 0)
            ->get();

        $allBadges = DB::table("player_badges")
            ->where("player_id", auth()->user()->id)
            ->limit(35)
            ->get();    

        return Inertia::render('users/current-profile', [
            'badgesInUse' => $badgesInUse,
            'allBadges' => $allBadges,
        ]);
    }

    public function getProfileByUsername(string $username) 
    {
        // return Inertia::render('users/profile');
    }
}
