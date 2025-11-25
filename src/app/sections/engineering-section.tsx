"use client";
import { engineeringProjects } from "../projects";
import { ProjectCard } from "../embla/project-card";
import { useRef, useState, useEffect } from "react";
import Image from "next/image";
export const EngineeringSection = ({
  isMobileDevice = true,
}: {
  isMobileDevice?: boolean;
}) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftGradient, setShowLeftGradient] = useState(false);
  const [showRightGradient, setShowRightGradient] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const el = scrollRef.current;
      if (!el) return;
      setShowLeftGradient(el.scrollLeft > 0);
      setShowRightGradient(el.scrollLeft + el.clientWidth < el.scrollWidth);
    };
    const el = scrollRef.current;
    if (el) {
      el.addEventListener("scroll", handleScroll);
      handleScroll();
    }
    return () => {
      if (el) el.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section
      className="relative flex flex-col max-w-[1340px] w-full gap-4"
      id="engineering"
    >
      {/* {showLeftGradient && (
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-20 bg-gradient-to-r from-black via-transparent to-transparent" />
      )}
      {showRightGradient && (
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-20 bg-gradient-to-l from-black via-transparent to-transparent" />
      )} */}

      <div className="relative w-full pb-6">
        <div className="grid grid-cols-2 md:grid-cols-6 grid-rows-0 auto-cols-[16rem] auto-rows-[16rem] gap-2">
          {engineeringProjects.map((project) => {
            const sizeMap = {
              sm: "col-span-1 row-span-1",
              md: "col-span-2 row-span-1",
              lg: "col-span-2 md:row-span-2",
            } as const;

            const span =
              sizeMap[
                (project as any).size as keyof typeof sizeMap
              ] ?? sizeMap.md;

            const firstImage = (project as any).images?.[0];

            return (
              <a
                key={(project as any).key ?? (project as any).name}
                href={(project as any).link ?? "#"}
                target="_blank"
                rel="noreferrer"
                className={`${span} relative block overflow-hidden opacity-60 hover:opacity-100 transition-opacity duration-300`}
              >
                {firstImage?.src ? (
                  <Image
                    width={350}
                    height={350}
                    src={firstImage.src}
                    alt={project.description ?? (project as any).name}
                    className="absolute inset-0 h-full w-full object-cover"
                    draggable={false}
                  />
                ) : (
                  <div className="absolute inset-0 bg-neutral-900" />
                )}
                <div className="pointer-events-none absolute inset-x-0 bottom-0">
                  <div className="bg-gradient-to-t from-black/70 to-transparent px-3 py-2">
                    <p className="text-sm text-white/90 leading-tight line-clamp-3">
                      {project.description ?? (project as any).name}
                    </p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};
