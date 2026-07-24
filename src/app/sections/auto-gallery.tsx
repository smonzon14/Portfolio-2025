"use client";
import NextLink from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Link } from "@heroui/link";

import { Project } from "../projects";
import { ProjectItem } from "./grid-gallery";

const slideClassMap: { [key: number]: string } = {
    3: "basis-full md:basis-1/3 h-[18rem]",
    5: "basis-1/2 md:basis-1/5 h-[12rem]",
};

export const AutoScrollGallery = ({
    projects,
    title,
    sectionId,
    viewAllHref,
    isMobileDevice = false,
    slidesPerView = 3,
}: {
    projects: Project[];
    title: string;
    sectionId: string;
    viewAllHref?: string;
    isMobileDevice?: boolean;
    slidesPerView?: 3 | 5;
}) => {
    const [emblaRef] = useEmblaCarousel(
        { loop: true, align: "start", duration: 20 },
        [
            Autoplay({
                delay: 2200,
                stopOnInteraction: false,
                stopOnMouseEnter: true,
            }),
        ]
    );

    return (
        <div className="relative w-full pb-6" id={sectionId}>
            <div className="flex flex-row items-baseline justify-between pb-10">
                <h2 className="text-4xl z-[21]">{title}</h2>
                {viewAllHref && (
                    <Link
                        as={NextLink}
                        href={viewAllHref}
                        className="text-inherit opacity-60 hover:opacity-100 text-md z-[21]"
                    >
                        View all →
                    </Link>
                )}
            </div>
            <div className="relative">
                <div className="overflow-hidden py-2" ref={emblaRef}>
                    <div className="flex touch-pan-y -ml-2">
                        {projects.map((project) => (
                            <div
                                key={project.key}
                                className={`shrink-0 grow-0 min-w-0 pl-2 ${slideClassMap[slidesPerView] ?? slideClassMap[3]}`}
                            >
                                <ProjectItem
                                    project={project}
                                    isMobileDevice={isMobileDevice}
                                    fillContainer
                                />
                            </div>
                        ))}
                    </div>
                </div>
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 left-0 z-20 w-10 md:w-20 bg-gradient-to-r from-black to-transparent"
                />
                <div
                    aria-hidden
                    className="pointer-events-none absolute inset-y-0 right-0 z-20 w-10 md:w-20 bg-gradient-to-l from-black to-transparent"
                />
            </div>
        </div>
    );
};
