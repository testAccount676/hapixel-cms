<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;
use JetBrains\PhpStorm\NoReturn;

class NitroController extends Controller
{
    public function show(Request $request): Response
    {
        $nitro_path = setting('nitro_path');

        return Inertia::render('nitro', [
            'nitro_path' => $nitro_path,
        ]);
    }
}
