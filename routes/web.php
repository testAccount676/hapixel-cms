<?php

use App\Http\Controllers\Auth\LoginController;
use App\Http\Controllers\Auth\RegisterController;
use App\Http\Controllers\Community\Articles\ArticlesController;
use App\Http\Controllers\Community\Staff\StaffController;
use App\Http\Controllers\Community\Leaderboard\LeaderboardController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\MaintenanceController;
use App\Http\Controllers\MeController;
use App\Http\Controllers\NitroController;
use App\Http\Controllers\Settings\PreferencesController;
use App\Http\Controllers\Settings\ProfileController;
use App\Http\Controllers\SessionController;
use App\Http\Controllers\Settings\SecurityController;
use App\Http\Controllers\ShopController;
use App\Http\Middleware\MaintenanceMiddleware;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::middleware(MaintenanceMiddleware::class)->group(function () {
    Route::get('/', [HomeController::class, 'index'])->name('home');

    Route::get('maintenance', MaintenanceController::class)->name('maintenance.page');

    Route::prefix('community')->group(function () {
        Route::get('/staff', StaffController::class)->name('community.staff');
        Route::get('/leaderboard', LeaderboardController::class)->name('community.leaderboard');
        Route::get('/news', ArticlesController::class)->name('community.articles');
        Route::get('/news/{id}', [ArticlesController::class, 'details'])->name('community.articles.details');
    });

    Route::prefix('shop')->group(function () {
        Route::get('/', [ShopController::class, 'show'])->name('shop.index');
    });

    Route::middleware(['guest'])->group(function () {
        Route::prefix('auth')->group(function () {
            Route::get('/register', [RegisterController::class, 'show']);
            Route::post("/register", [RegisterController::class, 'store']);

            Route::post("/login", [LoginController::class, 'store']);
            Route::get('/login', function () {
                return redirect('/');
            })->name('login');
        });
    });

    Route::middleware(['auth'])->group(function () {
        Route::prefix('users')->group(function () {
            Route::get('/me', MeController::class)->name('users.me');
            Route::get('/me/profile', \App\Http\Controllers\ProfileController::class);
            
            Route::get('/me/settings', function() {
                return Inertia::render('users/settings');
            })->name("users.me.settings");
            Route::patch("/me/settings", [ProfileController::class, 'update'])->name("profile.update");
            Route::delete("/me/settings", [ProfileController::class, "destroy"])->name("profile.destroy");

            Route::get("/me/settings/preferences", PreferencesController::class);
            Route::put("/me/settings/preferences", [PreferencesController::class, "update"])->name("preferences.update");

            Route::get("/me/settings/security", SecurityController::class);
            Route::put("/me/settings/security", [SecurityController::class, "update"]);
        });

        Route::post('/logout', [SessionController::class, 'destroy']);

        Route::get('/play', [NitroController::class, 'show']);
    });
});


