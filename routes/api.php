<?php

use App\Http\Controllers\Api\AudioController;
use App\Http\Controllers\Api\BannersController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::prefix('banners')->group(function () {
    Route::get('/', BannersController::class)->name('banners');
    Route::put('/{id}', [BannersController::class, 'update'])->name('banners.update');
    Route::get('/{sso}', [BannersController::class, 'getPlayerBanner']);
});

Route::get('/users/{id}', [UsersController::class, 'getUserById']);

Route::post('/upload-audio', [AudioController::class, 'upload']);
