<?php

use App\Http\Controllers\Api\AudioController;
use App\Http\Controllers\Api\BannersController;
use App\Http\Controllers\UsersController;
use Illuminate\Support\Facades\Route;

Route::prefix('banners')->group(function () {
    Route::get('/', BannersController::class)->name('banners')->middleware(['auth']);
    Route::put('/{id}', [BannersController::class, 'update'])->name('banners.update')->middleware(['auth']);
    Route::get('/{sso}', [BannersController::class, 'getPlayerBanner'])->middleware(['auth']);
});

Route::get('/users/{id}', [UsersController::class, 'getUserById']);

Route::post('/upload-audio', [AudioController::class, 'upload'])->middleware(['auth']);
