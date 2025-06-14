<?php

namespace App\Http\Controllers\Community\Articles;

use App\Http\Controllers\Controller;
use App\Models\Article;
use Illuminate\Http\Request;
use Inertia\Inertia;

class ArticlesController extends Controller
{
    public function __invoke(Request $request) 
    {
        $query = Article::query();

    if ($request->has('search') && $request->search != null) {
        $search = $request->search;

        $query->where(function ($q) use ($search) {
            $q->where('title', 'like', '%' . $search . '%')
              ->orWhere('short_story', 'like', '%' . $search . '%')
              ->orWhere('category', 'like', '%' . $search . '%');
        });
    }

    $articles = $query->paginate(10)->withQueryString();

    return Inertia::render("community/news/index", [
        "articles" => $articles
    ]);
    }

    public function details(Request $request)
    {
        $id = $request->route('id');

        $article = Article::query()->with(['author:id,username,figure'])->findOrFail($id);
        $allArticles = Article::query()->limit(20)->get();

        return Inertia::render("community/news/details", [
            "article" => $article,
            "allArticles" => $allArticles,
        ]);
    } 
}
