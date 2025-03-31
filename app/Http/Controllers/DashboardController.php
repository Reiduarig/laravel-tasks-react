<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Response;
use Inertia\Inertia;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request): Response
    {
        $user = auth()->user();

        $tasksStats = [
            'total' => $user->tasks()->count(),
            'completed' => $user->tasks()->where('completed', true)->count(),
            'pending' => $user->tasks()->where('completed', false)->count(),
            'upcoming' => $user->tasks()
                ->where('completed', false)
                ->where('due_date', '>=', now())
                ->orderBy('due_date')
                ->limit(5)
                ->get(),
        ];

        $completionRate = $tasksStats['total'] > 0
            ? round(($tasksStats['completed'] / $tasksStats['total']) * 100)
            : 0;

        return Inertia::render('dashboard', [
            'tasksStats' => $tasksStats,
            'completionRate' => $completionRate,
        ]);
    }

}
