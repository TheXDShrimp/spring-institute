import type { NextPage } from "next";
import Image from "next/image";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import React from "react";
import { Layout } from "@/components/layout";
import Background from "@/components/HomeBackground"
import { Footer } from "@/components/footer";
import Button from "@/components/Button";
import Header from "@/components/header";
import anime from 'animejs';

const Policy: NextPage<any> = () => {
    const gridRef = useRef(null);

    useEffect(() => {
        anime({
            targets: gridRef.current.querySelectorAll('.tile'),
            translateY: [-50, 0],
            opacity: [0, 1],
            duration: 1000,
            delay: anime.stagger(100),
            easing: 'easeInOutQuad'
        });
    }, []);

    return (
        <Layout>
            <div className='relative w-full m-0 h-screen'>
                <Background />
                <main className='flex flex-col relative w-full min-h-screen bg-transparent pt-12'>
                    <h1 className="m-10 mb-5 mt-15 text-5xl text-white flex">Policy Briefs and Publications</h1>
                    <p className="text-white text-xl m-5 ml-10">Here is where we keep all of our published works. Each of these papers gives policy recommendations on controversial topics in governance, ranging from infrastructure to foreign policy. </p>

                    <div className="flex justify-evenly w-full">
                        <div className="bg-red-500 h-20"></div>
                        <div className="bg-green-500 h-20"></div>
                        <div className="bg-blue-500 h-20"></div>
                    </div>

                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-3 md:grid-rows-90 px-5 py-10" ref={gridRef}>
                        <div className="tile py-28 bg-white">
                            <a href="" className="grid place-items-center text-3xl">
                                High Speed Rail
                            </a>
                        </div>
                        <div className="tile py-28 bg-white">
                            <a href="" className="grid place-items-center text-3xl">
                                Right-to-Work
                            </a>
                        </div>
                        <div className="tile py-28 bg-white">
                            <a href="" className="grid place-items-center text-3xl">
                                Great Power Competition
                            </a>
                        </div>
                    </div>

                    <Footer />
                </main>
            </div>
        </Layout>
    );
};

export default Policy;
