"use client"
import React, { useEffect, useState } from 'react';
import { Link } from "@heroui/link";
import { useInView } from 'react-intersection-observer';
import { SpecTile } from '../spec-tile';

const skillGroups = [
    {
        label: "Software",
        items: ["HTML, CSS, & JavaScript", "Python", "C/C++", "Node/React JS", "Ruby on Rails", "Matlab"],
        className: "sm:row-span-2",
    },
    {
        label: "Hardware & Design",
        items: ["KiCAD", "Fusion 360"],
        className: "",
    },
    {
        label: "Creative",
        items: ["Ableton Live", "Adobe Suite"],
        className: "",
    },
];

export const SkillsSection = ({ isMobileDevice=true } : {isMobileDevice?: boolean}) => {
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

    // Re-init the sphere after client-side navigation back to this page —
    // sphere.js only auto-runs on the initial script load.
    useEffect(() => {
        const w = window as unknown as { initSphere?: () => void };
        w.initSphere?.();
    }, []);


    return (
        <section className="relative flex flex-col max-w-[1340px] w-full gap-8 justify-center items-center my-0 overflow-hidden" id="skills-section" ref={ref}>
          <div className="lg:grid grid-cols-2 relative flex flex-row gap-10 justify-between h-full w-full items-center flex-wrap" id="skills">
            <div className={"flex flex-col gap-4 w-[500px] transition-opacity transition duration-[1.5s] " + (isVisible ? "opacity-100" : "opacity-0")}>
              <div className="text-3xl md:text-4xl lg:text-5xl jelly-text">
                SKILLS & TECHNOLOGIES
              </div>
              <p className='text-md'>I&#39;m constantly looking to solve problems with what I know, and searching for opportunities to learn what I don&#39;t.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {skillGroups.map((group) => (
                  <SpecTile key={group.label} label={group.label} className={group.className}>
                    {group.items.map((item) => (
                      <span key={item} className="text-white text-md">{item}</span>
                    ))}
                  </SpecTile>
                ))}
              </div>
            </div>
            {!isMobileDevice && (
              <div id="skills-sphere" className={"relative transition-opacity transition duration-[4s] " + (isVisible ? "opacity-100" : "opacity-0")}>
                <div className="relative flex flex-col gap-2 p-4 overflow-hidden">
                  <div
                    aria-hidden
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background: "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 70%)",
                    }}
                  />
                  <canvas id="sphere-canvas" width="550" height="550" className='relative z-10 w-[550px] h-[550px] self-center'>

                  </canvas>
                  <div className="text-center opacity-70 text-sm z-10">
                    Coded by me on <Link showAnchorIcon href="https://github.com/smonzon14/Fibonacci-Sphere" target="_blank" rel="noopener noreferrer">GitHub</Link> and <Link showAnchorIcon href="https://codepen.io/smonzon14/pen/NWjRZWe" target="_blank" rel="noopener noreferrer">CodePen</Link>.
                  </div>
                </div>
              </div>)}
          </div>
        </section>
    );
}