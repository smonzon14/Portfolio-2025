"use client";
import React, { useState, useEffect } from 'react'
import { Card, CardHeader, CardFooter } from "@heroui/card";
import Image from "next/image";
import { projects } from "../projects";
import { useInView } from 'react-intersection-observer';

export default function MiniCardsSection() {
    const { ref, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        rootMargin: "0px 0px -200px 0px",
    });

    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        if (inView) {
            setIsVisible(true);
        }
    }, [inView]);

    return (
        <section className={"relative flex flex-col max-w-[1340px] w-full gap-10 transition-opacity transition duration-[1.5s] " + (isVisible ? "opacity-100" : "opacity-0")} id="about" ref={ref}>
            <div className="flex justify-center mb-8">
                <Image
                    src="/profile.png"
                    alt="P"
                    width={400}
                    height={400}
                    className="rounded-full border-4 border-white shadow-lg object-cover w-[400px] h-[400px] bg-transparent"
                    loading="eager"

                />
            </div>
            <div className="inline font-bold text-4xl lg:text-5xl self-center">A <span className="text-[#edc966]">lifelong learner</span> ready to make a difference...</div>

            <div className="relative flex flex-row gap-10 justify-center w-full items-center flex-wrap">
                <Card className="bg-[#111] border-1 border-white/20 text-white flex flex-col text-center items-center justify-center relative">
                    <CardHeader className="flex-col">

                        <h2 className="text-xl text-shadow-lg">Designer</h2>
                    </CardHeader>
                    <Image
                        src="/gifs/fibonacci.gif"
                        alt="3d"
                        width={200}
                        height={200}
                        className="object-cover w-[100px] h-full"
                        loading="eager"
                        unoptimized
                    />
                    <CardFooter className="justify-center flex-wrap text-left">
                        <p className="max-w-[200px] text-center flex items-center justify-center gap-2">
                            <span className="text-4xl font-bold">4</span>
                            <span className="align-middle">websites</span>
                        </p>
                    </CardFooter>
                </Card>
                <Card className="bg-[#111] border-1 border-white/20 text-white flex flex-col text-center items-center justify-center relative">
                    <CardHeader className="flex-col">

                        <h2 className="text-xl text-shadow-lg">Developer</h2>
                    </CardHeader>
                    <Image
                        src="/gifs/dev.gif"
                        alt="3d"
                        width={200}
                        height={200}
                        className="object-cover w-[100px] h-full"
                        loading="eager"
                        unoptimized

                    />
                    <CardFooter className="justify-center flex-wrap text-left">
                        <p className="max-w-[200px] text-center flex items-center justify-center gap-2">
                            <span className="text-4xl font-bold">4</span>
                            <span className="align-middle">Y.O.E.</span>
                        </p></CardFooter>
                </Card>
                <Card className="bg-[#111] border-1 border-white/20 text-white flex flex-col text-center items-center justify-center relative">
                    <CardHeader className="flex-col">
                        <h2 className="text-xl text-shadow-lg">Graduate</h2>
                    </CardHeader>
                    <Image
                        src="/gifs/education.gif"
                        alt="Edu"
                        width={200}
                        height={200}
                        className="object-cover w-[100px] h-full"
                        loading="eager"
                        unoptimized

                    />
                    <CardFooter className="justify-center flex-wrap text-left">
                        <p className="max-w-[200px] text-center flex items-center justify-center gap-2 flex-col">
                            <span className="text-4xl font-bold">&#39;23</span>
                            <span className="align-middle">UMass Amherst</span>
                        </p></CardFooter>
                </Card>
                <Card className="bg-[#111] border-1 border-white/20 text-white flex flex-col text-center items-center justify-center relative">
                    <CardHeader className="flex-col">

                        <h2 className="text-xl text-shadow-lg">Engineer</h2>
                    </CardHeader>
                    <Image
                        src="/gifs/3d.gif"
                        alt="3d"
                        width={200}
                        height={200}
                        unoptimized
                        loading="eager"
                        className="object-cover w-[100px] h-full" />
                    <CardFooter className="justify-center flex-wrap text-left">
                        <p className="max-w-[200px] text-center flex items-center justify-center gap-2">
                            <span className="text-4xl font-bold">{projects.length}+</span>
                            <span className="align-middle">Projects</span>
                        </p></CardFooter>
                </Card>
                <Card className="bg-[#111] border-1 border-white/20 text-white flex flex-col text-center items-center justify-center relative">
                    <CardHeader className="flex-col">

                        <h2 className="text-xl text-shadow-lg">Musician</h2>
                    </CardHeader>
                    <Image
                        src="/gifs/guitar.gif"
                        alt="3d"
                        width={200}
                        unoptimized
                        height={200}
                        loading="eager"
                        className="object-cover w-[100px] h-full" />
                    <CardFooter className="justify-center flex-wrap text-left">
                        <p className="max-w-[200px] text-center flex items-center justify-center gap-2">
                            <span className="text-4xl font-bold">100+</span>
                            <span className="align-middle">Songs</span>
                        </p></CardFooter>
                </Card>
            </div>
        </section>

    )
}