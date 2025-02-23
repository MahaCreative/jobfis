import GridVideo from "@/Components/GridVideo";
import RhmtLayout from "@/Layouts/rhmt_layouts";
import { Add, InsertEmoticon } from "@mui/icons-material";
import React, { useEffect, useRef, useState } from "react";
import Detail from "./data.json";
import { useRecoilState } from "recoil";
import { loginDialogState } from "@/Components/LoginState";
export default function Show({ id }) {
    const [LoginDialog, setLoginDialog] = useRecoilState(loginDialogState);
    const [play, setPlay] = useState(false);
    const [detail, setDetail] = useState(null);
    const previewVideoRef = useRef(null);
    const videoRef = useRef(null); // Ref untuk video
    const [open, setOpen] = useState(false);
    const [video, setVideo] = useState("");
    const handlePlayPause = () => {
        if (play) {
            videoRef.current.pause(); // Hentikan video jika sedang berjalan
        } else {
            videoRef.current.play(); // Jalankan video jika sedang pause
        }
        setPlay(!play); // Toggle state play
    };
    const openVideoHandler = (video) => {
        setOpen(true);
        setVideo(video);
    };
    useEffect(() => {
        const detail = Detail.daftar.find((s) => s.id === Number(id));
        setDetail(detail);

        let handler = (e) => {
            if (
                previewVideoRef.current &&
                !previewVideoRef.current.contains(e.target)
            ) {
                videoRef.current.pause();
                setVideo("");
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);

    return (
        <div className="">
            {detail && (
                <>
                    <div
                        className={`${
                            open ? "" : "hidden"
                        } fixed px-4 py-16 w-full h-full top-0 left-0 bg-slate-950/50 backdrop-blur-sm z-50`}
                    >
                        <div ref={previewVideoRef} onClick={handlePlayPause}>
                            <video
                                ref={videoRef}
                                loop
                                playsInline
                                className={` transition-all duration-300 w-full h-[720px] object-cover object-center rounded-lg`}
                            >
                                <source src={`/${video}`} type="video/mp4" />
                                Browser Anda tidak mendukung tag video.
                            </video>
                            <p>{video}</p>
                            <div className="relative -bottom-10 w-full flex justify-center">
                                <button
                                    type="button"
                                    onClick={() => setLoginDialog(true)}
                                    className="bg-gradient-to-t from-purple-800 to-purple-700 px-4 text-white rounded-lg py-3 "
                                >
                                    Login Untuk Berlanggan
                                </button>
                            </div>
                        </div>
                    </div>
                    <img
                        src={`/${detail.profile}`}
                        alt=""
                        className="w-full h-[350px] md:h-[300px] transition-all duration-300 ease-out object-cover object-center"
                    />
                    <div className="absolute w-full top-72 rounded-t-xl  py-2 px-4 h-fill bg-white">
                        <div className="border-b border-purple-800 flex justify-between items-center relative ">
                            <div className=" w-full px-4 py-4 leading-4 hover:cursor-pointer hover:scale-110 transition-all duration-300">
                                <div className="flex gap-3 items-center">
                                    <img
                                        src={`/${detail.profile}`}
                                        alt=""
                                        className="w-[50px] rounded-full"
                                    />
                                    <div>
                                        <p className="text-sm font-sans text-purple-800">
                                            {detail.name}
                                        </p>
                                        <p className="text-xs text-gray-500">
                                            Mengikuti
                                        </p>
                                        <div className="flex gap-3 items-center">
                                            <p className="text-xs text-gray-500">
                                                <span className="font-bold text-black">
                                                    {detail.video.length}
                                                </span>{" "}
                                                Posts
                                            </p>
                                            <p className="text-xs text-gray-500">
                                                <span className="font-bold text-black">
                                                    {detail.followers + "K"}
                                                </span>{" "}
                                                followers
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button
                                type="button"
                                onClick={() => setLoginDialog(true)}
                                className="border-purple-950 border hover:scale-105 transition-all duration-300 leading-3 py-1 px-3 bg-purple-500/50 rounded-full"
                            >
                                <Add color="inherit" fontSize="inherit" />
                            </button>
                        </div>
                        <div className="pt-6 px-4">
                            <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-1">
                                {detail.video.map((item, key) => (
                                    <GridVideo
                                        key={key}
                                        onClick={() => openVideoHandler(item)}
                                        src={`/${item}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

Show.layout = (page) => <RhmtLayout children={page} />;
