<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\User;

class UsersController extends Controller
{
    public function getUserById($id)
    {
        $user = User::find($id);

        if (!$user) {
            return response()->json(["message" => "User not found."], 404);
        }

        return response()->json($user)->header('Content-Type', 'application/json');
    }
}
