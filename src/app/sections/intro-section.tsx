"use client"
import { Button } from "@heroui/button";
import { JellyText } from "../jelly-text";
import { Link } from "@heroui/link";
import React from "react";

export const IntroSection = ({ isMobileDevice = true }: { isMobileDevice?: boolean }) => {
    const [typed, setTyped] = React.useState("");
    React.useEffect(() => {
        const fadeInElements = document.querySelectorAll(".fade-in-on-load");
        fadeInElements.forEach((el) => {
            el.classList.add("opacity-0");
        });
        const fadeIn = ()=> {
            fadeInElements.forEach((el, index) => {
                setTimeout(() => {
                    el.classList.add("transition-opacity", "duration-[2s]");
                    el.classList.remove("opacity-0");
                }, 800 * index);
            });
            document.querySelectorAll(".typed").forEach((el) => {
                el.classList.add("transition-opacity", "duration-[2s]");
                el.classList.add("opacity-70");
            });
        };  
        const onLoaded = () => {
            const text = "Hello, I\'m";
            let i = 0;
            setTimeout(() => {
                const iv = setInterval(() => {
                    i++;
                    setTyped(text.slice(0, i));
                    if (i >= text.length) {
                        clearInterval(iv);
                        fadeIn();
                    }
                }, 80);
            }, 500);
        };
        window.addEventListener("app-loaded", onLoaded);
        return () => window.removeEventListener("app-loaded", onLoaded);
    }, []);
    return (
        <section className={"relative isolate flex flex-col justify-center max-w-[1340px] w-full z-1 " + (isMobileDevice ? "min-h-[700px] pb-12" : "h-[calc(100vh-4rem)] min-h-[736px]")} id="intro">
            {/* corner glow: blue from the primary button */}
            <div aria-hidden className="pointer-events-none absolute -z-10 -top-16 bottom-0 left-1/2 w-screen -translate-x-1/2 bg-[radial-gradient(ellipse_60%_55%_at_100%_100%,rgba(0,111,238,0.30),transparent_70%)]" />
            <div className="flex flex-col xl:flex-row gap-[8px] items-center">

                <div className={"flex flex-col gap-[8px] w-full" + (isMobileDevice ? " items-center text-center" : "")}>
                    <span className="typed text-5xl sm:text-6xl md:text-7xl lg:text-8xl opacity-100">
                        {typed}
                    </span>
                    <div className={"flex flex-col gap-[8px] fade-in-on-load" + (isMobileDevice ? " items-center text-center" : "")}>
                        <span className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl">
                            <JellyText><span className="jelly-text">SEBASTIAN <br /> MONZÓN.</span></JellyText>
                        </span>
                        <div className="flex flex-col gap-2 md:gap-4 w-full items-end text-right mt-20 fade-in-on-load">
                        <p className="text-lg md:text-xl lg:text-2xl text-[#bbb] max-w-[720px]">
                            Building <b className="text-white">multimodal AI</b> and{" "}
                            <b className="text-white">embedded systems</b> that transform
                            human signals into sound and insight.
                        </p>
                        <div className={"flex flex-row-reverse gap-2 md:gap-4 flex-wrap items-center" + (isMobileDevice ? " justify-center max-w-full" : " max-w-[60%]")}>
                            <Button
                                as="a"
                                size="lg"
                                color="primary"
                                variant="shadow"
                                href="/SebastianMonzonCV.pdf"
                                target="_blank"
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" fill="white" className="w-6 h-6">
    <path d="M 12.5 4 C 10.032499 4 8 6.0324991 8 8.5 L 8 39.5 C 8 41.967501 10.032499 44 12.5 44 L 35.5 44 C 37.967501 44 40 41.967501 40 39.5 L 40 18.5 A 1.50015 1.50015 0 0 0 39.560547 17.439453 L 39.544922 17.423828 L 26.560547 4.4394531 A 1.50015 1.50015 0 0 0 25.5 4 L 12.5 4 z M 12.5 7 L 24 7 L 24 15.5 C 24 17.967501 26.032499 20 28.5 20 L 37 20 L 37 39.5 C 37 40.346499 36.346499 41 35.5 41 L 12.5 41 C 11.653501 41 11 40.346499 11 39.5 L 11 8.5 C 11 7.6535009 11.653501 7 12.5 7 z M 27 9.1210938 L 34.878906 17 L 28.5 17 C 27.653501 17 27 16.346499 27 15.5 L 27 9.1210938 z M 17.5 25 A 1.50015 1.50015 0 1 0 17.5 28 L 30.5 28 A 1.50015 1.50015 0 1 0 30.5 25 L 17.5 25 z M 17.5 32 A 1.50015 1.50015 0 1 0 17.5 35 L 26.5 35 A 1.50015 1.50015 0 1 0 26.5 32 L 17.5 32 z"></path>
    </svg>
                                View my CV
                            </Button>
                            <Button showAnchorIcon as={Link} size="lg" color="default" variant="bordered" href="https://github.com/smonzon14" target="_blank" rel="noopener noreferrer">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="white"
                                    className="w-6 h-6"
                                >
                                    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.726-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.084 1.84 1.237 1.84 1.237 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.76-1.605-2.665-.303-5.466-1.333-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.007-.322 3.3 1.23a11.52 11.52 0 013.003-.404c1.018.005 2.045.137 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.873.118 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.479 5.92.43.37.814 1.102.814 2.222 0 1.606-.015 2.898-.015 3.293 0 .319.192.694.8.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
                                </svg>
                                Github
                            </Button>
                            <Link className="underline text-lg" href="mailto:smonzon360@gmail.com">smonzon360@gmail.com</Link>
                        </div>
                        </div>

                    </div>
                </div>

            </div>

            {/* <svg viewBox="0 0 68 33" className="chevron-down">
            <path d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z"></path>
          </svg> */}

        </section>
    );
}