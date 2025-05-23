<?php

namespace App\Http\Controllers;

use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Log;

class TestController extends Controller
{
    public function test(): JsonResponse
    {
        Log::channel('debug')->info('test');
        return parent::sendSuccess('success');
    }
}
