import { Link } from "@inertiajs/react";
import React, { useState, useRef, useEffect } from "react";
import LazyLoad from "react-lazyload";
export default function LoadedImage({
    src,
    profile,
    nama,
    folowers,
    post,
    href,
}) {
    const [loaded, setLoaded] = useState(false);
    const [play, setPlay] = useState(false);
    const videoRef = useRef(null); // Ref untuk video

    const handlePlayPause = () => {
        if (play) {
            videoRef.current.pause(); // Hentikan video jika sedang berjalan
        } else {
            videoRef.current.play(); // Jalankan video jika sedang pause
        }
        setPlay(!play); // Toggle state play
    };

    useEffect(() => {
        let handler = (event) => {
            if (videoRef.current && !videoRef.current.contains(event.target)) {
                setPlay(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return () => {
            document.removeEventListener("mousedown", handler);
        };
    }, []);
    return (
        <div className=" bg-white shadow-gray-400 shadow-md rounded-md flex flex-col items-center justify-center overflow-hidden relative">
            {!loaded && (
                <div className="absolute top-0 left-0 h-full w-full">
                    <LazyLoad height={200} offset={100}>
                        <img
                            loading="lazy"
                            src="/images.jpg" // Ganti dengan thumbnail asli
                            alt="Video Thumbnail"
                            className="w-full h-[240px] object-cover"
                        />
                    </LazyLoad>
                </div>
            )}

            {/* Video Container */}
            <div
                onClick={handlePlayPause}
                className="w-full h-[240px] hover:cursor-pointer"
            >
                <video
                    ref={videoRef} // Tambahkan ref ke video
                    loop
                    muted
                    playsInline
                    onLoadedData={() => setLoaded(true)}
                    className={`${
                        loaded ? "opacity-100" : "opacity-0"
                    } transition-all duration-300 w-full h-[240px] object-cover object-center`}
                >
                    <source src={src} type="video/mp4" />
                    Browser Anda tidak mendukung tag video.
                </video>
            </div>

            {/* Info Pengguna */}
            <Link
                href={href}
                className="w-full  px-4 py-4 leading-4 hover:cursor-pointer hover:scale-110 transition-all duration-300"
            >
                <div className="flex gap-3 items-center">
                    {/* <LazyLoad height={50} offset={100}>
                        <img
                            src={profile}
                            alt=""
                            className="w-[50px] rounded-full"
                        />
                    </LazyLoad> */}
                    <div>
                        <p className="text-sm line-clamp-1 font-sans text-purple-800">
                            {nama}
                        </p>
                        <p className="text-xs text-gray-500">Mengikuti</p>
                        <div className="flex gap-3 items-center">
                            <p className="text-xs text-gray-500">
                                <span className="font-bold text-black">
                                    {post}
                                </span>{" "}
                                Posts
                            </p>
                            <p className="text-xs text-gray-500">
                                <span className="font-bold text-black">
                                    {folowers}K
                                </span>{" "}
                                followers
                            </p>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    );
}
