<?php

namespace App\Http\Controllers\Settings;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class PreferencesController extends Controller
{
    public function __invoke()
    {
        $preferences = DB::table("player_settings")
            ->where("player_id", auth()->user()->id)
            ->select(["allow_follow", "hide_online", "allow_friend_requests", "allow_trade", "follow_friend_mode", "allow_mimic", "mention_type"])
            ->get();

        return Inertia::render("users/settings/preferences", [
            "preferences" => $preferences,
        ]);
    }

    public function update(Request $request)
    {
        $request->validate([
            "allow_follow" => "boolean",
            "hide_online" => "boolean",
            "allow_friend_requests" => "boolean",
            "allow_trade" => "boolean",
            "allow_mimic" => "boolean",
            "follow_friend_mode" => "in:EVERYBODY,FRIENDS,NOBODY",
            "mention_type" => "in:ALL,FRIENDS,NONE",
        ]);

        DB::table("player_settings")
            ->where("player_id", auth()->user()->id)
            ->update([
                "allow_follow" => $request->input("allow_follow") ? '1' : '0',
                "hide_online" => $request->input("hide_online") ? '1' : '0',
                "allow_friend_requests" => $request->input("allow_friend_requests") ? '1' : '0',
                "allow_trade" => $request->input("allow_trade") ? '1' : '0',
                "allow_mimic" => $request->input("allow_mimic") ? '1' : '0',
                "follow_friend_mode" => $request->input("follow_friend_mode"),
                "mention_type" => $request->input("mention_type"),
            ]);

        return back()->with("message", "Preferências atualizadas com sucesso.");
    }
}
