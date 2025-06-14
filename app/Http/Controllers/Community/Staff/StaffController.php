<?php

namespace App\Http\Controllers\Community\Staff;

use App\Http\Controllers\Controller;
use App\Services\Community\StaffService;
//use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class StaffController extends Controller
{
    public function __construct(private readonly StaffService $staffService)
    {
    }

    public function __invoke(): Response
    {
        $staffs = $this->staffService->fetchStaffPositions();

        return Inertia::render('community/staff', [
            'staffs' => $staffs,
        ]);
    }
}
