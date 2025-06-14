<?php

namespace App\Http\Controllers\Community\Leaderboard;

use App\Http\Controllers\Controller;
use App\Models\User;
use Illuminate\Http\Request;
use Inertia\Inertia;

class LeaderboardController extends Controller
{
    public function __invoke()
    {
        $values = User::select('id')
            ->where('rank', '>=', 5)
            ->get()
            ->pluck('id')->toArray();

        $topCredits = User::query()
            ->orderByDesc('credits')
            ->take(10)
            ->get();

        $topDiamonds = User::query()
            ->orderByDesc('vip_points')

            ->take(10)
            ->get();

        $topDuckets = User::query()
            ->orderByDesc('activity_points')

            ->take(10)
            ->get();

        // dd($topDuckets);

        return Inertia::render('community/hall', [
            'topCredits' => $topCredits,
            'topDiamonds' => $topDiamonds,
            'topDuckets' => $topDuckets,
        ]);
    }
}
