import { Link } from "@inertiajs/react";
import React, { useState, useRef, useEffect } from "react";
import LazyLoad from "react-lazyload";
export default function Grid({ src, profile, nama, folowers, post, href }) {
    const [loaded, setLoaded] = useState(false);
    const [play, setPlay] = useState(false);

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
            <div className="w-full h-[240px] hover:cursor-pointer">
                <video
                    // Tambahkan ref ke video
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
        </div>
    );
}
