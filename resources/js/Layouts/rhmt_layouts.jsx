import DialogLogin from "@/Components/DialogLogin";
import { loginDialogState } from "@/Components/LoginState";
import { Head, Link } from "@inertiajs/react";
import { Menu } from "@mui/icons-material";

import React, { useEffect, useRef, useState } from "react";
import { RecoilRoot, useRecoilState } from "recoil";

export default function RhmtLayout({ children }) {
    // const [sidebarOpen, setSidebarOpen] = useState(false);
    const [LoginDialog, setLoginDialog] = useRecoilState(loginDialogState);
    // const navbarRef = useRef();
    // useEffect(() => {
    //     let handler = (e) => {
    //         if (navbarRef.current && !navbarRef.current.contains(e.target)) {
    //             setSidebarOpen(false);
    //         }
    //     };
    //     document.addEventListener("mousedown", handler);
    //     return () => {
    //         document.removeEventListener("mousedown", handler);
    //     };
    // }, []);
    return (
        <div className=" w-full h-screen max-h-[900px] relative">
            <Head title="Join Group Live" />
            <DialogLogin />
            <div className="flex z-10 fixed w-full  justify-between items-center py-1.5 px-4 md:px-8 lg:px-16 bg-white backdrop-blur-sm">
                <div className="text-purple-800 flex items-center gap-4">
                    <img
                        loading="lazy"
                        src="/images.jpg"
                        alt=""
                        className="w-10 rounded-md shadow-md"
                    />
                    <Link
                        href={route("rhmt.home")}
                        className="font-serif text-base md:text-lg lg:text-2xl font-bold"
                    >
                        Join Group Private
                    </Link>
                </div>
                <div className=" gap-2 md:gap-5 items-center">
                    <button
                        onClick={() => setLoginDialog(true)}
                        className="text-white bg-purple-500 py-1.5 px-3 rounded-md hover:text-white transition-all duration-300 ease-in-out  font-bold text-xs md:text-lg lg:text-2xl"
                    >
                        Login / Register
                    </button>
                </div>
            </div>
            <div className="relative top-10 min-h-full gradient1  h-auto overflow-y-auto py-3">
                {children}
            </div>
        </div>
    );
}
