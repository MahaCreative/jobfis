import { Checkbox, FormControlLabel, TextField } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CountryData from "./CountryCodesWithFlags";
import { Link, useForm } from "@inertiajs/react";

export default function LoginIndex() {
    const [dataCode, setDataCode] = useState({
        name: "Malaysia",
        code: "+60",
    });
    const [countryData, setCountryData] = useState(CountryData);
    useEffect(() => {
        if (dataCode.name === "") {
            setCountryData(CountryData);
        } else {
            const filter = countryData.filter((country) =>
                country.name.toLowerCase().includes(dataCode.name.toLowerCase())
            );

            setCountryData(filter);
            // const filtered = countriesData.filter(country =>
            //   country.country.toLowerCase().includes(searchTerm.toLowerCase())
            // );
        }
    }, [dataCode.name]);
    const { data, setData, post } = useForm({ phone: "+60", code: "+60" });

    const [activeInput, setActiveInput] = useState(false);
    const inputRef = useRef();

    let handler = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setActiveInput(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handler);
        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

    const handlerChange = (e) => {
        setData({
            ...data,
            phone: e.target.value,
        });
    };
    const countryChange = (e) => {
        setDataCode({ ...dataCode, name: e.target.value });
    };

    const submitHandler = async () => {
        post(route("rhmt.login-store"));
    };
    return (
        <div className="flex flex-col items-center justify-center w-full h-screen px-8">
            <img className="w-24 mb-6" src="logo.webp" alt="" />

            <h1 className="font-bold text-center text-lg leading-8">
                Sign in Telegram
            </h1>
            <p className="text-center text-xs w-[78%] mt-6 text-gray-500">
                Please confirm your country code and enter your phone number
            </p>

            <div className="relative w-full md:w-[60%] mt-6">
                <TextField
                    onChange={countryChange}
                    size="small"
                    value={dataCode.name}
                    ref={inputRef}
                    onClick={() => setActiveInput(true)}
                    className=" border-none outline-none w-full mt-8 rounded-lg"
                    id="outlined-basic"
                    label="country"
                    variant="outlined"
                />
                <div className="absolute  top-0 right-0 w-10 h-full flex items-center justify-end px-4 rounded-lg">
                    <p
                        className={`text-gray-500 text-lg ${
                            activeInput ? "rotate-90" : "rotate-0"
                        } duration-300 ease-in-out transition-all`}
                    >
                        <ArrowBackIosIcon color="inherit" fontSize="inherit" />
                    </p>
                </div>
                <div
                    className={`${
                        activeInput ? "" : "hidden"
                    } rounded-md  shadow-lg shadow-gray-900/50 absolute top-14 p-4 overflow-hidden max-h-[200px] z-[999999] bg-white`}
                >
                    <div className=" bg-white max-h-[350px] overflow-y-scroll scrollbar-none scrollbar-thin">
                        {countryData.map((item, key) => (
                            <div
                                onClick={() => {
                                    setDataCode({
                                        ...dataCode,
                                        code: item.dial_code,
                                        name: item.name,
                                    });
                                    setData({
                                        ...data,
                                        phone: item.dial_code,
                                        code: item.dial_code,
                                    });
                                }}
                                key={key}
                                className="hover:bg-gray-400/50 hover:cursor-pointer rounded-md px-3  flex justify-between w-full items-center "
                            >
                                <div className="flex gap-5 items-center py-3">
                                    <img
                                        className="w-10"
                                        src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`}
                                        alt=""
                                    />
                                    <p>{item.name}</p>
                                </div>
                                <p className="text-gray-500 font-light text-sm">
                                    {item.dial_code}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="relative w-full mt-3">
                {data.phone === "" && (
                    <div className="w-full h-full flex items-center px-4 absolute top-0 left-0">
                        <p>{dataCode.code}</p>
                    </div>
                )}
                <TextField
                    size="small"
                    onChange={handlerChange}
                    value={data.phone}
                    placeholder="--- ---- ----"
                    id="outlined-basic"
                    variant="outlined"
                    label="Phone Number"
                    className="w-full md:w-[60%] px-8 "
                />
            </div>
            <div className="flex items-center gap-4 px-4 w-full">
                <FormControlLabel
                    className="rounded-md"
                    control={
                        <Checkbox
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 20 } }}
                            defaultChecked
                        />
                    }
                    label="Keep me signed in"
                />
            </div>
            <button
                onClick={submitHandler}
                className="bg-blue-500 text-white py-3 my-5 rounded-lg w-full"
            >
                NEXT
            </button>
            <Link className="text-sm text-center text-blue-500">
                LOGIN BY QR CODE
            </Link>
        </div>
    );
}
