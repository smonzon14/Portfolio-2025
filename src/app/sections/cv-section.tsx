"use client"

import React, { useEffect, useState } from 'react';
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { SectionCard } from "../section-card";
import { useInView } from 'react-intersection-observer';

export const CVSection = ({isMobileDevice = false}) => {
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
        <section className={"lg:grid grid-cols-2 gap-10 max-w-[1340px] w-full transition-opacity transition duration-[1.5s] " + (isVisible ? "opacity-100" : "opacity-0")} id="about" ref={ref}>
            <div>
                <div className="lg:sticky top-[28vh] z-10 flex flex-col gap-4 flex-wrap">
                    <div className="text-3xl md:text-4xl lg:text-5xl jelly-text">
                        CURRICULUM VITAE
                    </div>
                    <div className="pb-10 flex flex-row gap-4 justify-between w-full items-center flex-wrap">
                        <p className="lg:max-w-[500px]">Whether it&#39;s building innovative software, engineering electrical systems, or exploring the intersection between AI and music, I strive to push my creative boundaries through experimentation and learning from failures. <br /><br />Below you will find an incomplete list of the things I&#39;ve made. The list is always growing, as I continue to take on harder challenges aligned with my passion for hands-on engineering, science, and music. I hope you enjoy.<br /><br />Sincerely,<br />Sebastian Monzón</p>
                        <div className="w-full"><Button download="Sebastian Monzon CV" as={Link} size="md" color="primary" variant="bordered" href="/SebastianMonzonCV.pdf" >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 22"
                                fill="currentColor"
                                className="w-4 h-4 inline-block"
                                aria-hidden="true"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M10 3a1 1 0 011 1v8.586l2.293-2.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 111.414-1.414L9 12.586V4a1 1 0 011-1z"
                                    clipRule="evenodd"
                                />
                                <rect x="3" y="17" width="14" height="2" rx="1" />
                            </svg>
                            Download CV
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
            {isMobileDevice ? null : (
            <div className="right-0 top-0 flex flex-row gap-4 justify-between h-full flex-wrap">
                <SectionCard
                    href="#research"
                    title="Research"
                    imageSrc="/projects/honors-spectrograms.png"
                    imageAlt="Research"
                    description="See my research on AI, music technology, and human-computer interaction."
                >
                    <Button as={Link} size="md" color="default" variant="faded" href="#research" className='bg-[#111] text-white border-white/10'>
                        View Research
                    </Button>
                    {/* <Button as={Link} size="md" color="primary" className="text-white" variant="light" href="https://scholar.google.com/citations?user=" target="_blank" rel="noopener noreferrer" showAnchorIcon>
                Google Scholar
              </Button> */}
                </SectionCard>
                <SectionCard
                    href="#engineering"
                    title="Engineering Projects"
                    imageSrc="/projects/drone-exposed.jpg"
                    imageAlt="Engineering Projects"
                    description="See my robotics, 3D design, electronics, and IoT projects."
                >
                    <Button as={Link} size="md" color="default" variant="faded" href="#research" className='bg-[#111] text-white border-white/10'>
                        View Projects
                    </Button>
                </SectionCard>
                <SectionCard
                    href="#software"
                    title="Software Projects"
                    imageSrc="/projects/simulation-physics-compressed.gif"
                    imageAlt="Software Projects"
                    description="See my software projects which incorporate AI, simulations, mobile apps, commercial websites, and games."
                >
                    <Button as={Link} size="md" color="default" variant="faded" href="#research" className='bg-[#111] text-white border-white/10'>
                        View Projects
                    </Button>
                </SectionCard>
                <SectionCard
                    href="#music"
                    title="Music"
                    imageSrc="/projects/ableton.png"
                    imageAlt="Music"
                    description="Listen to my latest tracks and remixes."
                >
                    <Button as={Link} size="md" color="default" variant="faded" href="#research" className='bg-[#111] text-white border-white/10'>
                        Listen Now
                    </Button>
                </SectionCard>

            </div>)}
        </section>
    );
}