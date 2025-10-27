"use client";

import React, { useMemo, MouseEvent } from "react";
import NextLink from "next/link";
import { Image } from "@heroui/react";
import { projects } from "../projects";

type ProjectShowcaseProps = {
  /** seconds for one full loop (lower = faster) */
  speedSeconds?: number;
  /** pixel width of left/right fade overlays */
  edgeFadeWidth?: number;
  /** gallery height in px (clamped to 500px) */
  height?: number;
};

export default function ProjectShowcase({
  speedSeconds = 80,
  edgeFadeWidth = 120,
  height = 250,
}: ProjectShowcaseProps) {
  // clamp height to 500px as requested
  const clampedH = Math.min(Math.max(height, 220), 500);

  // Flatten images but retain which project to scroll to
  const staticOrder = [
    "nyt",
    "mushete",
    "mage",
    "feedkevin",
    "music-spectrogram-inpainting",
    "swimsense",
    "drone",
    "honors",
    "simulation-physics",
    "biwheel",
    "simulation-cgol",
  ];

  const glowItems = ["mage", "music-spectrogram-inpainting", "honors", "swimsense"];

  const items = staticOrder
    .map((key) => projects.find((p) => p.key === key))
    .filter((p) => p !== undefined)
    .map((p) => ({
      src:
        p!.images.find((img) => !img.src.endsWith(".mp4"))?.src ||
        p!.images[0].src,
      caption: p!.description,
      projectKey: p!.key,
    }));

  // Duplicate items to create seamless infinite scroll track
  const doubled = useMemo(() => [...items, ...items], [items]);

  const handleClick = (e: MouseEvent, key: string) => {
    // Smooth-scroll to the project section if present on page
    const el = document.getElementById(key);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      // Optionally, update hash for sharing
      history.replaceState(null, "", `#${key}`);
      const modalEl = document.getElementById(`${key}_modal`);
      if (modalEl) {
        modalEl.click();
      }
    }
    // If not found, let Next.js default anchor behavior happen (e.g., if you route elsewhere)
  };

  return (
    <section
      className="relative w-screen max-w-[95vw] overflow-hidden bg-transparent"
      style={{ height: clampedH }}
      aria-label="Project showcase"
    >
      {/* Left/Right fade to black overlays */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 z-20"
        style={{
          width: edgeFadeWidth,
          background:
            "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 z-20"
        style={{
          width: edgeFadeWidth,
          background:
            "linear-gradient(270deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Scroller */}
      <div
        className="scroller relative h-full p-8 overflow-x-scroll"
        style={{ maskImage: "none" }}
      >
        <div
          className="track absolute left-0 flex items-center gap-2 sm:gap-6 will-change-transform group"
          style={{
            animation: `scrollX ${speedSeconds}s linear infinite`,
          }}
        >
          {doubled.map((item, idx) => (
            <NextLink
              key={`${item.projectKey}-${idx}`}
              href={`#${item.projectKey}`}
              onClick={(e) => handleClick(e, item.projectKey)}
              aria-label={`Open project ${item.projectKey}`}
              className="relative block shrink-0 transition-transform duration-500 ease-out hover:scale-[1.05]"
            >
              <figure
                className="group/item relative overflow-hidden rounded-xl ring-1 ring-white/5 transition-opacity duration-300"
                style={{
                  height: clampedH - 60,
                  width: Math.min(clampedH * 1.3, 720),
                  boxShadow: glowItems.includes(item.projectKey)
                    ? "0px 0px 30px 5px hsl(37.03 100% 100% / 0.8)"
                    : "", // Centered shadow
                }}
              >
                <figcaption className="pointer-events-none absolute m-4 left-0 bottom-0 z-10 rounded-bl-md px-2 pt-2 text-md leading-none text-white/85 z-10 line-clamp-2" style={{ lineHeight: "1.2" }}>
                  {item.caption}
                </figcaption>
                <div className="text-lg absolute top-0 left-0 w-full h-full z-0 bg-black text-center flex items-center justify-center">
                  Go to project
                </div>
                <div className="relative opacity-100 hover:opacity-40 transition-opacity duration-200">
                  <Image
                    removeWrapper
                    src={item.src}
                    alt={item.caption || item.projectKey}
                    className="h-full w-full object-cover z-1"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent pointer-events-none" />
                </div>
              </figure>
            </NextLink>
          ))}
        </div>
      </div>

      {/* Styles for animation & hover-to-pause */}
      <style jsx>{`
        .scroller:hover .track {
          animation-play-state: paused !important;
        }
        .scroller:not(:hover) .track {
          /* Restart animation by resetting animation property */
          animation: none;
          /* Force reflow to restart animation */
          will-change: auto;
        }
        .scroller:not(:hover) .track {
          animation: scrollX var(--scroll-speed, 80s) linear infinite;
          will-change: transform;
        }
        .scroller {
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none; /* Firefox */
        }
        @keyframes scrollX {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        /* Respect reduced motion */
        @media (prefers-reduced-motion: reduce) {
          .track {
            animation: none !important;
            transform: translateX(0) !important;
          }
        }
      `}</style>
    </section>
  );
}
