import React, { useState } from "react";
import ImgMediaCard from "./../components/card/Card";
import { motion, useScroll } from "framer-motion";
import { Box, Button, FormControl } from "@mui/material";
import { useNavigate } from "react-router-dom";
import sampleData from "./../assets/data";
import { ToastContainer, toast } from "react-toastify";

const PersonalityTest = () => {
    const { scrollYProgress } = useScroll();
    const navigate = useNavigate();
    const [data, setData] = useState(sampleData);
    const notify = () =>
        toast.error("Please select a radio button to fill", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
        });

    const handleOnChange = (value, id) => {
        const cardElement = document.getElementById(`cardContent${id}`);
        cardElement.scrollIntoView({ behavior: "smooth", block: "start" });
        const clone = structuredClone(data);
        const exist = clone.find((ele) => ele?.id === id);
        exist.value = value;
        setData(clone);
    };
    let index = 0;

    const checkRadio = data.reduce((prev, ele) => {
        if ("value" in ele) index++;
        if (index === data.length) return true;
        return false;
    }, false);

    const handleSubmit = () => {
        if (checkRadio) navigate("/result", { state: data });
        return notify();
    };

    return (
        <>
            <ToastContainer style={{ zIndex: 100 }} />
            <div
                className="h-96 lg:h-72 text-white flex flex-col justify-center items-center"
                style={{ width: "100%", background: "#33a474" }}>
                <h1 className="m-0 pt-5">Free Personality Test</h1>
                <p>NERIS Type Explorer®</p>
                <div
                    className="grid lg:grid-rows-1 lg:grid-cols-3 gap-2"
                    style={{ maxWidth: "56rem" }}>
                    <div
                        className="border rounded max-w-md p-2 z-10 text-black text-sm lg:text-base text-center lg:text-left"
                        style={{ background: "#d6ede3" }}>
                        <img
                            src="https://www.16personalities.com/static/images/test-header-2.svg"
                            alt="..."
                            width="50"
                            height="50"
                            className="mx-auto"
                        />
                        Be yourself and answer honestly to find out your
                        personality type.
                    </div>
                    <div
                        className="border rounded max-w-md p-2 z-10 text-black text-sm lg:text-base text-center lg:text-left"
                        style={{ background: "#d6ede3" }}>
                        <img
                            src="https://www.16personalities.com/static/images/academy/explorers/icons/theory.svg"
                            alt="..."
                            width="50"
                            height="50"
                            className="mx-auto"
                        />{" "}
                        Learn how your personality type influences many areas of
                        your life.
                    </div>
                    <div
                        className="border rounded max-w-md p-2 z-10 text-black text-sm lg:text-base text-center lg:text-left"
                        style={{ background: "#d6ede3" }}>
                        <img
                            src="https://www.16personalities.com/static/images/academy/analysts/exercise.svg"
                            alt="..."
                            width="50"
                            height="50"
                            className="mx-auto"
                        />{" "}
                        Grow into the person you want to be with your optional
                        Premium Suite.
                    </div>
                </div>
            </div>
            <div className="flex justify-center items-center flex-col gap-4 my-14 bg-white">
                <motion.div
                    className="progress-bar"
                    style={{ scaleX: scrollYProgress }}
                />
                <div className="flex flex-col gap-4">
                    {data.map((quest) => (
                        <ImgMediaCard
                            {...quest}
                            handleOnChange={handleOnChange}
                        />
                    ))}
                </div>
                <button
                    onClick={handleSubmit}
                    className={`relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold shadow ${
                        checkRadio ? "text-green-400" : "text-slate-400"
                    } transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group`}>
                    <span
                        className={`absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out ${
                            checkRadio ? "bg-green-400" : "bg-red-400"
                        } group-hover:h-full`}></span>
                    <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                        <svg
                            className="w-5 h-5 text-purple-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                        <svg
                            className="w-5 h-5 text-purple-400"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                        </svg>
                    </span>
                    <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                        Submit
                    </span>
                </button>
            </div>
        </>
    );
};

export default PersonalityTest;
