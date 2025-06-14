<?php

namespace App\Services\Community;

use App\Models\Permission;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;

class StaffService
{
    public function fetchStaffPositions()
    {
        $minRankToSeeHiddenStaff = 7;
        $minStaffRank = 4; // MOD

        $staffPositions = Permission::query()
            ->select('id', 'name', 'badge', 'description')
            ->where('id', '>=', $minStaffRank)
            ->orderByDesc('id')
            ->with([
                'users' => function ($query) use ($minRankToSeeHiddenStaff) {
                    $query->select('id', 'username', 'rank', 'figure', 'hidden_staff', 'online', 'motto')
                        ->when(optional(Auth::user())->rank < $minRankToSeeHiddenStaff, function ($query) {
                            return $query->where('hidden_staff', false);
                        });
                }
            ])
            ->get();

        return $staffPositions;
    }
}
