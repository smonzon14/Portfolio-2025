"use client";
import { useEffect } from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { IntroSection } from "./sections/intro-section";
// import MiniCardsSection from "./sections/mini-cards-section";
import Script from "next/script";
// import ProjectShowcase from "./sections/project-showcase";
// import { GridGallery } from "./sections/grid-gallery";
// import { researchProjects } from "./projects";

export const ParallaxHeader = ({
  isMobileDevice = true,
}: {
  isMobileDevice?: boolean;
}) => {
  // const resizedProjects = researchProjects
  //   .filter((project) => project.key.includes("honors") === false)
  //   .map((project) => {
  //   return {
  //     ...project,
  //     size: "sm" as const,
  //   };
  // });

  // Re-init the waves after client-side navigation back to this page —
  // waves.js only auto-runs on the initial script load.
  useEffect(() => {
    const w = window as unknown as { initWaves?: () => void };
    w.initWaves?.();
  }, []);

  return (
    <ParallaxProvider>
      <div
        className="absolute flex justify-center items-center top-0 right-0 w-screen h-[185vh] z-2 overflow-hidden opacity-80 pointer-events-none"
        style={{
          maskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
          WebkitMaskImage: "linear-gradient(to bottom, black 75%, transparent 100%)",
        }}
      >
        {isMobileDevice ? null : (
          <Parallax speed={-10}>
            <div
              id="waves-canvas"
              className="self-center"
              style={{ transform: "rotate(-25deg)" }}
            >
              <Script
                id="waves-canvas-script"
                src="/waves.js"
                strategy="afterInteractive"
                type="module"
              />
            </div>
          </Parallax>
        )}
      </div>
      <IntroSection isMobileDevice={isMobileDevice} />
      {/* <div className="relative flex flex-col max-w-[1340px] w-full gap-4">
        <GridGallery
      title=""
      projects={resizedProjects}
      sectionId="engineering"
      cols={9}
      isMobileDevice={isMobileDevice}
        />
      </div> */}
      {/* <div className="flex justify-center my-8">
        <div className="animate-bounce flex flex-col items-center">
          <span className="text-gray-500 text-sm mb-1">Scroll to see more</span>
          <svg
            className="w-6 h-6 text-gray-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div> */}


      
      
      {/* {isMobileDevice ? null : (
        <ProjectShowcase
          height={230}
          edgeFadeWidth={120}
        />
      )} */}
    </ParallaxProvider>
  );
};
