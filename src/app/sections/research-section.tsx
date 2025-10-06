"use client";
import { researchProjects } from "../projects";
import { ProjectCard } from "../embla/project-card";
import { useRef, useState, useEffect } from "react";
export const ResearchSection = ({
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
      id="research"
    >
      <h2 className="text-4xl pb-4">RESEARCH x{researchProjects.length}</h2>

      {showLeftGradient && (
        <div className="pointer-events-none absolute left-0 top-0 h-full w-20 z-20 bg-gradient-to-r from-black via-transparent to-transparent" />
      )}
      {showRightGradient && (
        <div className="pointer-events-none absolute right-0 top-0 h-full w-20 z-20 bg-gradient-to-l from-black via-transparent to-transparent" />
      )}

      <div className="relative w-full overflow-x-auto pb-6" ref={scrollRef}>
        <div className="flex flex-row gap-4 h-full w-fit">
          {researchProjects.map((project, index) => (
            <ProjectCard
              project={project}
              key={index}
              isMobileDevice={isMobileDevice}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
