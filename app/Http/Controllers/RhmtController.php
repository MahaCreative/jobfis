<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class RhmtController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Rhmt/Index');
    }

    public function show(Request $request, $id)
    {

        return inertia('Rhmt/Show', compact('id'));
    }
}
