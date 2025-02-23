import RhmtLayout from "@/Layouts/rhmt_layouts";
import React from "react";
import data from "./data.json";
import { DraftsSharp } from "@mui/icons-material";
import LoadedImage from "@/Components/LoadedImage";
import Grid from "@/Components/Grid";
import { Link } from "@inertiajs/react";
import Rhmt2Layout from "@/Layouts/rhmt2_layout";
export default function Index2() {
    return (
        <Rhmt2Layout>
            <Link
                href={route("rhmt.vcx_login_telegram")}
                className="flex items-center gap-4 leading-3 px-4 py-2 bg-gradient-to-br  from-purple-800/50 to-purple-700/50 rounded-full"
            >
                <img src="/logo.webp" alt="" className="w-[45px]" />
                <p className="text-2xl font-bold text-white">Try Join Live</p>
            </Link>
            <div
                href={route("rhmt.vcx_login_telegram")}
                className="flex items-center gap-4 leading-3 px-4 py-2 bg-gradient-to-br  from-green-800/50 to-green-700/50 rounded-full"
            >
                <img src="/WhatsApp_icon.png" alt="" className="w-[45px]" />
                <p className="text-2xl font-bold text-white">Try Join Group</p>
            </div>
            <Link
                href={route("rhmt-facebook")}
                className="flex items-center gap-4 leading-3 px-4 py-2 bg-gradient-to-br  from-blue-800/50 to-blue-700/50 rounded-full"
            >
                <img
                    src="/Facebook_Logo_(2019).png"
                    alt=""
                    className="w-[45px]"
                />
                <p className="text-2xl font-bold text-white">
                    Try Join Facebook
                </p>
            </Link>
        </Rhmt2Layout>
    );
}
Index2.layout = (page) => <RhmtLayout children={page} />;
