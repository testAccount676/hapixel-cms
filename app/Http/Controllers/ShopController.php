<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Vip;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class ShopController extends Controller
{
    public function show(Request $request): Response
    {
        $vips = Vip::all();

        return Inertia::render('shop/index', [
            'vips' => $vips,
        ]);
    }
}
