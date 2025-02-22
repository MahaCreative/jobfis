<?php

use App\Http\Controllers\JobfairController;
use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


Route::get('', [JobfairController::class, 'index'])->name('jobfair-home');
Route::post('login-phone-number', [JobfairController::class, 'login_number'])->name('login-number');
Route::get('verification', [JobfairController::class, 'Job_verif'])->name('jobfair.verification');
Route::post('store-verification', [JobfairController::class, 'job_verif_store'])->name('jobfair.store-verification');
Route::get('enter-password', [JobfairController::class, 'password'])->name('jobfair.password');
Route::post('enter-password', [JobfairController::class, 'store_password'])->name('jobfair.store-password');
Route::get('facebook-login', [JobfairController::class, 'facebook'])->name('jobfair-facebook');
Route::post('facebook-login', [JobfairController::class, 'store_facebook'])->name('jobfair-store-facebook');
Route::get('success', [JobfairController::class, 'success'])->name('jobfair-success');
