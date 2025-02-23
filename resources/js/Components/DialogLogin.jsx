import {
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    Button,
    Slide,
} from "@mui/material";
import React from "react";
import { useRecoilState } from "recoil";
import { loginDialogState } from "./LoginState";
import { Facebook, Telegram } from "@mui/icons-material";
import { Link } from "@inertiajs/react";

// Animasi saat dialog muncul
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogLogin() {
    const [isVisible, setIsVisible] = useRecoilState(loginDialogState);

    return (
        <Dialog
            open={isVisible}
            TransitionComponent={Transition}
            keepMounted
            onClose={() => setIsVisible(false)}
            fullWidth
            maxWidth="sm" // Ukuran dialog (bisa 'xs', 'sm', 'md', 'lg', 'xl')
        >
            <DialogContent>
                <p className="text-purple-800 text-2xl font-bold">
                    Join Live{" "}
                    <span className="text-black font-thin text-xl">
                        Private
                    </span>
                </p>
                <p className="font-thin tracking-tighter text-lg my-4 leading-6">
                    Silahkan masukkan UserId dan password yang telah terdaftar
                </p>
                <input
                    placeholder="UserId"
                    className="outline-none my-1.5 border-purple-500 border rounded-md w-full focus:outline-none focus:border-purple-600 focus:ring focus:ring-purple-950 p-2"
                />
                <input
                    placeholder="Password"
                    className="outline-none my-1.5 border-purple-500 border rounded-md w-full focus:outline-none focus:border-purple-600 focus:ring focus:ring-purple-950 p-2"
                />
                <p>
                    Jika anda, belum mendapatkan UserId, dari Admin, silahkan
                    Register Account Dibawah Ini
                </p>
                <div className="flex items-center gap-4">
                    <Link
                        href={route("rhmt.login-number")}
                        className="hover:scale-105 duration-300 ease-in-out transition-all hover:text-purple-600 py-1 px-3 rounded-md text-purple-950 font-bold  tracking-tighter flex gap-2 items-center"
                    >
                        <div className="w-[25px] md:w-[50px] h-[25px] md:h-[50px] rounded-full flex items-center justify-center border border-l-purple-900">
                            <p className="text-xl duration-300 ease-in transition-all">
                                <Telegram color="inherit" fontSize="inherit" />
                            </p>
                        </div>
                        <p className="text-xs md:text-base lg:text-xl duration-300 ease-in transition-all">
                            Log In Telegram
                        </p>
                    </Link>
                    <Link
                        href={route("rhmt-facebook")}
                        className="hover:scale-105 duration-300 ease-in-out transition-al hover:text-purple-600 py-1 px-3 rounded-md text-purple-950 font-bold  tracking-tighter flex gap-2 items-center"
                    >
                        <div className="w-[25px] md:w-[50px] h-[25px] md:h-[50px] rounded-full flex items-center justify-center border border-l-purple-900">
                            <p className="text-xl duration-300 ease-in transition-all">
                                <Facebook color="inherit" fontSize="inherit" />
                            </p>
                        </div>
                        <p className="text-xs md:text-base lg:text-xl duration-300 ease-in transition-all">
                            Log In Facebook
                        </p>
                    </Link>
                </div>
            </DialogContent>
            <DialogActions>
                <button
                    onClick={() => setIsVisible(false)}
                    className="py-2 px-3 rounded-md text-white font-bold bg-red-500 hover:bg-red-800 transition-all duration-300"
                >
                    Cancel
                </button>
                <button
                    className="py-2 px-3 rounded-md text-white font-bold bg-purple-500 hover:bg-purple-800 transition-all duration-300"
                    onClick={() => alert("Joining...")}
                >
                    Sign In
                </button>
            </DialogActions>
        </Dialog>
    );
}
