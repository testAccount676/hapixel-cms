<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class MaintenanceController extends Controller
{
    public function __invoke(Request $request): Response
    {
        $maintenanceMessage = setting('maintenance_message');
        $maintenancStatus = setting('maintenance_status');

        return Inertia::render('maintenance', [
            'message' => $maintenanceMessage,
            'status' => $maintenancStatus,
        ]);
    }
}
