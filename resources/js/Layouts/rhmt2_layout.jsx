import React from "react";
import data from "../Pages/Rhmt/data.json";
import Grid from "@/Components/Grid";
import { Link } from "@inertiajs/react";
import RhmtLayout from "./rhmt_layouts";
export default function Rhmt2Layout({ children }) {
    return (
        <div className="max-h-[915px] relative overflow-y-auto">
            <div className="grid grid-cols-3 gap-1 relative scrollAnim">
                {data.daftar[1].video.map((item, key) => (
                    <Grid key={key} src={"/" + item} />
                ))}
                {data.daftar[3].video.map((item, key) => (
                    <Grid key={key} src={"/" + item} />
                ))}
                {data.daftar[4].video.map((item, key) => (
                    <Grid key={key} src={"/" + item} />
                ))}
            </div>
            <div className="fixed top-0 left-0 w-full h-full flex flex-col gap-y-3 justify-center px-4 bg-slate-950/30">
                {children}
            </div>
        </div>
    );
}
