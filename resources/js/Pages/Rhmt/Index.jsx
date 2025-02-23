import LoadedImage from "@/Components/LoadedImage";
import RhmtLayout from "@/Layouts/rhmt_layouts";
import { Link } from "@inertiajs/react";
import React, { useEffect, useState } from "react";
import DataCewek from "./data.json";
import { useRecoilState } from "recoil";
import { loginDialogState } from "@/Components/LoginState";
export default function Index() {
    const [loaded, setLoaded] = useState(false);
    const [LoginDialog, setLoginDialog] = useRecoilState(loginDialogState);
    useEffect(() => {
        setTimeout(() => {
            setLoginDialog(true);
        }, 2000); // Simulating loading time
    }, []);

    return (
        <div className="py-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 transition-all duration-300 gap-2 px-2">
                {DataCewek.daftar.map((item, key) => (
                    <LoadedImage
                        href={route("rhmt.show", item.id)}
                        key={key}
                        profile={item.profile}
                        folowers={item.followers}
                        post={item.video.length}
                        nama={item.name}
                        src={item.video[item.video.length - 5]}
                    />
                ))}
            </div>
            <div className="py-4 w-full flex items-center justify-center">
                <button
                    onClick={() => setLoginDialog(true)}
                    className="text-white bg-purple-500 py-1.5 px-3 rounded-md hover:text-white transition-all duration-300 ease-in-out  font-bold text-xs md:text-lg lg:text-2xl"
                >
                    Join Group For View More
                </button>
            </div>
        </div>
    );
}

Index.layout = (page) => <RhmtLayout children={page} />;
