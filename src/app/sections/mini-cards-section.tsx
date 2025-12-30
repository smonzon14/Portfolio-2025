"use client";
import React, { useState, useEffect } from 'react'
// import { Card, CardHeader, CardFooter } from "@heroui/card";
// import Image from "next/image";
// import { projects } from "../projects";
import { useInView } from 'react-intersection-observer';

export default function MiniCardsSection() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        rootMargin: "0px 0px 0px 0px",
    });

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <section className={"relative flex flex-col max-w-[1340px] w-full gap-12 transition-opacity transition duration-[1.5s] " + (isVisible ? "opacity-100" : "opacity-0")} id="about" ref={ref}>
        
            <div className="flex justify-between flex-row relative">

                <div className="flex flex-col items-start justify-center gap-4">
                    <div className="flex items-center gap-4 text-white">
                        <h2 className="text-lg text-shadow-lg">Designer</h2>
                        <p className="text-sm text-gray-300">Caption placeholder</p>
                    </div>

                    <div className="flex items-center gap-4 text-white">
                        <h2 className="text-lg text-shadow-lg">Developer</h2>
                        <p className="text-sm text-gray-300">Caption placeholder</p>
                    </div>

                    <div className="flex items-center gap-4 text-white">
                        <h2 className="text-lg text-shadow-lg">Engineer</h2>
                        <p className="text-sm text-gray-300">Caption placeholder</p>
                    </div>

                    <div className="flex items-center gap-4 text-white">
                        <h2 className="text-lg text-shadow-lg">Musician</h2>
                        <p className="text-sm text-gray-300">Caption placeholder</p>
                    </div>
                </div>
            </div>
        </section>

    )
}