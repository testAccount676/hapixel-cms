<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class AudioController extends Controller
{
    public function upload(Request $request)
    {
        if ($request->hasFile('audio')) {
            $file = $request->file('audio');
            $randomName = Str::random(5);
            $filename = $randomName . '.mp3';

            $path = public_path('audios');

            if (!file_exists($path)) {
                mkdir($path, 0755, true);
            }

            $file->move($path, $filename);

            return response($randomName, 200);
        }

        return response('No file uploaded', 400);
    }
}
