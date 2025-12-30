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
            <div className="flex justify-center relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div
                        className="w-[400px] h-[400px] rounded-full"
                        style={{
                            background: "radial-gradient(circle at 60% 40%, #d6cec2ff 0%, #df8e15ff 60%, transparent 100%)",
                            filter: "blur(40px)",
                            opacity: 0.7,
                        }}
                        aria-hidden="true"
                    />
                </div>
                <Image
                    src="/profile.jpg"
                    alt="P"
                    width={600}
                    height={600}
                    className="rounded-full border-1 border-white shadow-lg object-cover w-[400px] h-[400px] relative z-10"
                />
            </div>
            <div className="inline text-4xl lg:text-5xl self-center">A <span className="text-warning bold">lifelong learner</span> ready to make a difference...</div>

            <div className="relative flex flex-row gap-5 justify-center w-full items-center flex-wrap ">
                <Card className="bg-transparent text-white flex flex-col text-center items-center justify-center relative">
                    <CardHeader className="flex-col">

                        <h2 className="text-xl text-shadow-lg">Designer</h2>
                    </CardHeader>
                    <Image
                        src="/gifs/fibonacci.gif"
                        alt="3d"
                        width={200}
                        height={200}
                        className="object-cover w-[80px] h-full"
                        loading="lazy"
                        unoptimized
                    />
                    <CardFooter className="justify-center flex-wrap text-left">
                        <p className="max-w-[200px] text-center flex items-center justify-center gap-2">
                            <span className="text-4xl font-bold">4</span>
                            <span className="align-middle">websites</span>
                        </p>
                    </CardFooter>
                </Card>
                <Card className="bg-transparent text-white flex flex-col text-center items-center justify-center relative">
                    <CardHeader className="flex-col">

                        <h2 className="text-xl text-shadow-lg">Developer</h2>
                    </CardHeader>
                    <Image
                        src="/gifs/dev.gif"
                        alt="3d"
                        width={200}
                        height={200}
                        className="object-cover w-[80px] h-full"
                        unoptimized
                        loading="lazy"
                    />
                    <CardFooter className="justify-center flex-wrap text-left">
                        <p className="max-w-[200px] text-center flex items-center justify-center gap-2">
                            <span className="text-4xl font-bold">4</span>
                            <span className="align-middle">Y.O.E.</span>
                        </p></CardFooter>
                </Card>
                <Card className="bg-transparent text-white flex flex-col text-center items-center justify-center relative">
                    <CardHeader className="flex-col">
                        <h2 className="text-xl text-shadow-lg">Graduate</h2>
                    </CardHeader>
                    <Image
                        src="/gifs/education.gif"
                        alt="Edu"
                        width={200}
                        height={200}
                        className="object-cover w-[80px] h-full"
                        unoptimized
                        loading="lazy"
                    />
                    <CardFooter className="justify-center flex-wrap text-left">
                        <p className="max-w-[200px] text-center flex items-center justify-center gap-2 flex-col">
                            <span className="text-4xl font-bold">&#39;23</span>
                            <span className="align-middle">UMass Amherst</span>
                        </p></CardFooter>
                </Card>
                <Card className="bg-transparent text-white flex flex-col text-center items-center justify-center relative">
                    <CardHeader className="flex-col">

                        <h2 className="text-xl text-shadow-lg">Engineer</h2>
                    </CardHeader>
                    <Image
                        src="/gifs/3d.gif"
                        alt="3d"
                        width={200}
                        height={200}
                        unoptimized
                        loading="lazy"
                        className="object-cover w-[80px] h-full" />
                    <CardFooter className="justify-center flex-wrap text-left">
                        <p className="max-w-[200px] text-center flex items-center justify-center gap-2">
                            <span className="text-4xl font-bold">{projects.length}+</span>
                            <span className="align-middle">Projects</span>
                        </p></CardFooter>
                </Card>
                <Card className="bg-transparent text-white flex flex-col text-center items-center justify-center relative">
                    <CardHeader className="flex-col">

                        <h2 className="text-xl text-shadow-lg">Musician</h2>
                    </CardHeader>
                    <Image
                        src="/gifs/guitar.gif"
                        alt="3d"
                        width={200}
                        unoptimized
                        height={200}
                        loading="lazy"
                        className="object-cover w-[80px] h-full" />
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