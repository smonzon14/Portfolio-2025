"use client"

import React, { useEffect, useState } from 'react';
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import { SectionCard } from "../section-card";
import { useInView } from 'react-intersection-observer';

export const CVSection = () => {
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
                <div className="lg:sticky top-[34vh] z-10 flex flex-col gap-4 flex-wrap">
                    <div className="text-3xl md:text-4xl lg:text-5xl jelly-text">
                        CURRICULUM VITAE
                    </div>
                    <div className="pb-20 flex flex-row gap-4 justify-between w-full items-center flex-wrap">
                        <p className="lg:max-w-[500px]">Whether it&#39;s building innovative software, engineering electrical systems, or exploring the intersection between AI and music, I strive to push my creative boundaries through experimentation and learning from failures. <br /><br />Below you will find an incomplete list of the things I&#39;ve made. The list is always growing, as I continue to take on harder challenges aligned with my passion for engineering, science, and music. I hope you enjoy.<br /><br />Sincerely,<br />Sebastian Monzón</p>
                        <div className="w-full"><Button download="Sebastian Monzon CV" as={Link} size="lg" color="primary" variant="bordered" href="/SebastianMonzonCV.pdf">
                            Download CV
                        </Button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right-0 top-0 flex flex-row gap-4 justify-between h-full flex-wrap">
                <SectionCard
                    href="#research"
                    title="Research"
                    imageSrc="/projects/diffusion-diagram.png"
                    imageAlt="Research"
                    description="Between generative music AI and underwater IoT, my journey as a researcher has only just begun."
                >
                    <Button as={Link} size="md" color="primary" variant="shadow" href="#research">
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
                    <Button as={Link} size="md" color="primary" variant="shadow" href="#engineering">
                        View Projects
                    </Button>
                </SectionCard>
                <SectionCard
                    href="#coding"
                    title="Coding Projects"
                    imageSrc="/projects/simulation-physics.gif"
                    imageAlt="Coding Projects"
                    description="See my coding project highlights which incorporate AI, simulations, mobile apps, commercial websites, and games."
                >
                    <Button as={Link} size="md" color="primary" variant="shadow" href="#coding">
                        View Projects
                    </Button>
                    <Button as={Link} size="md" color="primary" className="text-white" variant="light" href="https://github.com/smonzon14" target="_blank" rel="noopener noreferrer" showAnchorIcon>
                        GitHub
                    </Button>
                </SectionCard>
                <SectionCard
                    href="#music"
                    title="Music"
                    imageSrc="/projects/ableton.png"
                    imageAlt="Music"
                    description="Listen to my latest tracks and remixes."
                >
                    <Button as={Link} size="md" color="primary" variant="shadow" href="#music">
                        Listen Now
                    </Button>
                </SectionCard>

            </div>
        </section>
    );
}