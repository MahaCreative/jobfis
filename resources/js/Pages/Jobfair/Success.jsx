import { router, useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

export default function Success(props) {
    useEffect(() => {}, [
        setTimeout(() => {
            router.visit(route("jobfair-home"));
        }, 7000),
    ]);
    return (
        <div className="w-full  overflow-hidden flex  flex-col justify-center items-center  bg-gray-100">
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
                    Please wait for 5 minutes, our team is checking your
                    qualifications
                </p>
                <div className="w-full flex justify-center py-6">
                    <button className="mt-3 bg-slate-900 text-white font-bold py-3 px-8 text-center rounded-full">
                        CHECK RESULTS
                    </button>
                </div>
            </div>
            <div className="w-full px-4 py-4 gap-x-4 items-center flex justify-end bg-gray-800 mt-4">
                <p className="text-white">Singapore job vacancies</p>
                <img src="/jobfair/kerjaya.png" alt="" className="w-[70px]" />
            </div>
        </div>
    );
}
