"use client"
import React from 'react'
import { ParallaxProvider, Parallax } from 'react-scroll-parallax'
import { IntroSection } from './sections/intro-section';
import MiniCardsSection from './sections/mini-cards-section';
import { Divider } from "@heroui/divider";
import Script from 'next/script';
import ProjectShowcase from './sections/project-showcase';

export const ParallaxHeader = ({ isMobileDevice = true }: { isMobileDevice?: boolean }) => (
    <ParallaxProvider>
        <div
        className="absolute flex justify-center items-center top-0 right-0 w-screen h-[2000px] z-2 overflow-hidden"
        >
        <Parallax speed={-40}>

        <div id="waves-canvas"
            className="self-center"
            style={{ transform: "rotate(-25deg)" }}
        >
            
        <Script id="waves-canvas-script" src="/waves.js" strategy="afterInteractive" type="module" />

        </div>
        </Parallax>

        </div>
        <IntroSection isMobileDevice={isMobileDevice}/>
        <ProjectShowcase height={isMobileDevice ? 150 : 250} edgeFadeWidth={isMobileDevice ? 20 : 120}/>

        <Divider className="my-4" />

        <MiniCardsSection/>
    </ParallaxProvider>
);