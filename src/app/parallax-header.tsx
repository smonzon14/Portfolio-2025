"use client";
// import React from "react";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";
import { IntroSection } from "./sections/intro-section";
// import MiniCardsSection from "./sections/mini-cards-section";
import { Divider } from "@heroui/divider";
import Script from "next/script";
// import ProjectShowcase from "./sections/project-showcase";
// import { GridGallery } from "./sections/grid-gallery";
// import { researchProjects } from "./projects";

const ScrollingText = ({ direction = "normal" }: { direction?: "normal" | "reverse" }) => {
  const scrollingText = ["ENGINEER", "RESEARCHER", "DESIGNER", "MUSICIAN"];
  const animationClass = direction === "reverse" ? "animate-scroll-reverse" : "animate-scroll";
  
  return (
    <>
      <div className="w-full overflow-hidden my-12 opacity-20 pointer-events-none">
        <div className={`inline-flex whitespace-nowrap ${animationClass}`}>
          {Array(4).fill(scrollingText).flat().map((text, i) => (
            <span key={i} className="text-2xl font-bold mx-8">{text}</span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
        }
      `}</style>
    </>
  );
};

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
  return (
    <ParallaxProvider>
      <div className="absolute flex justify-center items-center top-0 right-0 w-screen h-[3000px] z-2 overflow-hidden opacity-80 pointer-events-none">
        {isMobileDevice ? null : (
          <Parallax speed={-30}>
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
      
      {
        isMobileDevice ? null : <Divider className="my-12" />
      }
      
      <Divider className="my-12" />
      {/* <ScrollingText direction="normal" /> */}

      <div
        style={{
          maxWidth: 1000,
          width: "100%",
          zIndex: 10,
          aspectRatio: "16/9",
          height: "auto",
        }}
        className="mb-12 mx-auto flex justify-center items-center"
      >
        <div className="w-full" style={{ aspectRatio: "16/9" }}>
          <iframe
        src="https://www.youtube.com/embed/6XUdCfi1rkw"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        className="w-full h-full block"
          ></iframe>
        </div>
      </div>
      {/* <ScrollingText direction="reverse" /> */}
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
      
      <Divider className="my-4" />
    </ParallaxProvider>
  );
};
