"use client"
import { Button } from "@heroui/button";
import { JellyText } from "../jelly-text";
import { Link } from "@heroui/link";

export const IntroSection = ({ isMobileDevice = true }: { isMobileDevice?: boolean }) => {
    return (
        <section className={"-mt-20 relative flex flex-col max-w-[1340px] w-full z-1 " + (isMobileDevice ? " h-[700px]" : "h-screen")}>
            <div className="flex flex-row gap-[8px] justify-between h-full items-center">
                <div className="flex flex-col gap-[8px]">
                    <span className="mix-blend-difference text-4xl sm:text-5xl md:text-7xl lg:text-9xl ">
                        Hello, I&#39;m<br />
                        <JellyText><span className="jelly-text">SEBASTIAN <br /> MONZÓN.</span></JellyText>
                    </span>
                    <p>An aspiring graduate student, software engineer, and musician, exploring how AI, electronics, and music can amplify the human experience.</p>
                    <div className="text-white/40 bg-black max-w-max">{"<> All content on this website was coded by me </>"}</div>

                    <div className="flex flex-row gap-6 flex-wrap items-center mt-10">
                        <Button showAnchorIcon as={Link} size="lg" color="primary" variant="shadow" href="https://github.com/smonzon14" target="_blank" rel="noopener noreferrer">
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
            {/* <svg viewBox="0 0 68 33" className="chevron-down">
            <path d="M.58 3.414l27.432 27.433c2.715 2.715 7.167 2.787 9.964.164L67.356 3.46 64.62.54 35.24 28.093c-1.222 1.146-3.212 1.114-4.4-.075L3.408.586.579 3.414z"></path>
          </svg> */}

        </section>
    );
}