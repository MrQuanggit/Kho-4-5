<?php

use Illuminate\Http\Request;
use App\Models\Customer;
use App\Http\Controllers\CustomerController;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('persons', [CustomerController::class, 'index']);
Route::post('persons/create', [CustomerController::class, 'add']);
Route::delete('persons/delete/{id}', [CustomerController::class, 'delete']);
Route::get('persons/{id}',[CustomerController::class, 'show']);
Route::put('persons/edit/{id}',[CustomerController::class, 'update']);
