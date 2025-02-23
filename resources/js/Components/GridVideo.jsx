import { Link } from "@inertiajs/react";
import React, { useState, useRef } from "react";
import LazyLoad from "react-lazyload";
export default function GridVideo({ src, ...props }) {
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

    return (
        <div
            {...props}
            className="bg-white shadow-gray-400 shadow-md rounded-md flex flex-col items-center justify-center overflow-hidden relative"
        >
            {!loaded && (
                <div className="absolute top-0 left-0 h-full w-full">
                    <LazyLoad height={200} offset={100}>
                        <img
                            src="/images.jpg" // Ganti dengan thumbnail asli
                            alt="Video Thumbnail"
                            className="w-full h-[200px] object-cover"
                        />
                    </LazyLoad>
                </div>
            )}

            {/* Video Container */}
            <div className="w-[150px] h-[150px] hover:cursor-pointer">
                <video
                    loop
                    playsInline
                    onLoadedData={() => setLoaded(true)}
                    className={`${
                        loaded ? "opacity-100" : "opacity-0"
                    } transition-all duration-300 w-full h-[240px] object-cover object-center`}
                >
                    <source loading="lazy" src={src} type="video/mp4" />
                    Browser Anda tidak mendukung tag video.
                </video>
            </div>
        </div>
    );
}
