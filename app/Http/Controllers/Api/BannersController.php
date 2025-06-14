<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Api\Banners;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class BannersController extends Controller
{
    public function __invoke(Request $request): JsonResponse
    {
        $banners = Banners::query()->get();

        return response()->json(['data' => $banners]);
    }

    public function update(Request $request, $id): Response|JsonResponse
    {
        $banner = Banners::query()->find($id);

        if (!$banner) {
            return response()->json(['message' => 'Banner not found'], 404);
        }

        User::query()->where('auth_ticket', $request->query('sso'))->update(['banner_id' => $id]);

        return response()->noContent();
    }

    public function getPlayerBanner($sso): JsonResponse
    {
        $player = User::where('auth_ticket', $sso)->first();

        if (!$player || !$player->banner_id) {
            return response()->json(['message' => 'Banner not found'], 404);
        }

        $banner = Banners::find($player->banner_id);

        if (!$banner) {
            return response()->json(['message' => 'Banner not found'], 404);
        }

        return response()->json(['player_banner' => $banner->banner_name]);
    }
}
