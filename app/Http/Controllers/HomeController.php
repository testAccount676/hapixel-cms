<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\RedirectResponse;
use Inertia\Inertia;
use Inertia\Response;

class HomeController extends Controller
{
    public function index(): Response|RedirectResponse
    {
        $is_authenticated = auth()->check();

        if ($is_authenticated) {
            return to_route('users.me');
        }

        return Inertia::render('index', [
            'news' => Article::orderBy('created_at', 'desc')->with('author:id,username')->limit(3)->get(),
        ]);
    }
}
