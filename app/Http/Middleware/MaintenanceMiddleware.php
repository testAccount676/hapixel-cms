<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Support\Facades\Auth;

class MaintenanceMiddleware
{
    public function handle($request, Closure $next)
    {
        $maintenanceEnabled = setting('maintenance_enabled');
        $isMaintenanceRequest = $request->is('maintenance');
        $isPostRequest = $request->getMethod() === 'POST';

        if ($maintenanceEnabled && $isPostRequest && !Auth::check()) {
            return $next($request);
        }

        if (Auth::check() && Auth::user()->rank >= setting('min_maintenance_login_rank')) {
            if ($isMaintenanceRequest) {
                return to_route('users.me');
            }

            return $next($request);
        }

        if (Auth::check() && Auth::user()->rank >= setting('min_maintenance_login_rank') && $isMaintenanceRequest) {
            return to_route('users.me');
        }

        if ($maintenanceEnabled && !$isMaintenanceRequest && !$isPostRequest) {
            return to_route('maintenance.page');
        }

        if (!$maintenanceEnabled && $isMaintenanceRequest && !$isPostRequest) {
            return to_route('home');
        }

        if ($maintenanceEnabled && !$isMaintenanceRequest && Auth::check() && Auth::user()->rank < setting('min_maintenance_login_rank')) {
            return to_route('maintenance.page')->with('message', 'Você não possui permissão para isso.');
        }

        return $next($request);
    }
}
