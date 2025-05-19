"use client"
import React, { useEffect, useState } from 'react';
import { Link } from "@heroui/link";
import { useInView } from 'react-intersection-observer';

export const SkillsSection = ({ isMobileDevice=true } : {isMobileDevice?: boolean}) => {
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
        <section className="relative flex flex-col max-w-[1340px] w-full gap-8">
          <div className="lg:grid grid-cols-2 relative flex flex-row gap-10 justify-between h-full w-full items-center flex-wrap" id="skills" ref={ref}>
            <div className={"flex flex-col gap-4 w-[500px] transition-opacity transition duration-[1.5s] " + (isVisible ? "opacity-100" : "opacity-0")}>
              <div className="text-3xl md:text-4xl lg:text-5xl jelly-text">
                SKILLS & TECHNOLOGIES
              </div>
              <p>I&#39;m constantly looking to solve problems with what I know, and searching for opportunities to learn what I don&#39;t.
              </p>
              <div className="flex gap-4 flex-wrap">
                <ul className="list-none">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> HTML, CSS, & JavaScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Python
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Ruby on Rails
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> C/C++
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Node/React JS
                  </li>
                </ul>
                <ul className="list-none">
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> KiCAD
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Fusion 360
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Ableton Live
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Adobe Suite
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-green-500">✔</span> Matlab
                  </li>
                </ul>
              </div>
            </div>
            {!isMobileDevice && (
              <div id="skills-sphere" className={"transition-opacity transition duration-[4s] " + (isVisible ? "opacity-100" : "opacity-0")}>

                <canvas id="sphere-canvas" width="400" height="400">

                </canvas>
                <div className="absolute bottom-[-20px] right-0 text-white/40">
                  ^ Coded by me on <Link showAnchorIcon href="https://github.com/smonzon14/Fibonacci-Sphere" target="_blank" rel="noopener noreferrer">GitHub</Link> and <Link showAnchorIcon href="https://codepen.io/smonzon14/pen/NWjRZWe" target="_blank" rel="noopener noreferrer">CodePen</Link>.
                </div>
              </div>)}
          </div>
        </section>
    );
}