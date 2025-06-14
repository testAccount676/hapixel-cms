<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Article;
use Inertia\Inertia;
use Inertia\Response;

class MeController extends Controller
{
    public function __invoke(): Response
    {
        $articles = Article::with(['author:id,username,figure'])
            ->orderBy('created_at', 'desc')
            ->take(4)
            ->get();

        return Inertia::render('users/me', [
            'articles' => $articles,
        ]);
    }
}
