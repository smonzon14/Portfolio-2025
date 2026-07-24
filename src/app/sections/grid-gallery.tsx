"use client";
import Image from "next/image";
import NextLink from "next/link";
import { Project } from "../projects";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { useState } from "react";
import { Spinner } from "@heroui/spinner";
import { Button, Link, useDisclosure } from "@heroui/react";

const Media = ({ src, caption, autoplay = true, controls = true }: { src: string, caption: string, autoplay: boolean, controls?: boolean }) => {
    const [loading, setLoading] = useState(true);

    if (src.endsWith('.mp4')) {
        return (
            <div className="relative w-full h-full flex items-center justify-center">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30 pointer-events-none">
                        <Spinner color="warning" size="lg" />
                    </div>
                )}
                <video
                    className="object-cover max-h-[80vh] max-w-full"
                    preload="metadata"
                    src={src + "#t=0.1"}
                    autoPlay={autoplay}
                    loop={autoplay}
                    controls={controls}
                    onLoadedData={() => setLoading(false)}
                />
            </div>
        );
    } else if (src.endsWith('.mp3') || src.endsWith('.wav')) {
        return (
            <div className="relative w-full h-full flex flex-col items-center justify-center">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30 pointer-events-none">
                        <Spinner color="warning" size="lg" />
                    </div>
                )}
                <audio
                    src={src}
                    autoPlay={autoplay}
                    controls={controls}
                    onLoadedData={() => setLoading(false)}
                    className="w-full"
                />
            </div>
        );
    } else {
        return (
            <div className="relative w-full h-full flex items-center justify-center">
                {loading && (
                    <div className="absolute inset-0 flex items-center justify-center z-10 bg-black/30">
                        <Spinner color="warning" size="lg" />
                    </div>
                )}
                <Image
                    className="object-cover"
                    loading="lazy"
                    src={src}
                    alt={caption}
                    width={600}
                    height={600}
                    unoptimized={src.endsWith(".gif")}
                    onLoad={() => setLoading(false)}
                    style={loading ? { visibility: "hidden" } : {}}
                />
            </div>
        );
    }
};
export const GridGallery = ({
  projects,
  title,
  sectionId,
  cols = 12,
  isMobileDevice = false,
  viewAllHref,
  titleClassName = "text-4xl",
  light = false,
}: {
  projects: Project[];
    title: string;
    sectionId: string;
    cols?: number;
    isMobileDevice?: boolean;
    viewAllHref?: string;
    titleClassName?: string;
    light?: boolean;
}) => {
  const getGridColsClass = (cols: number) => {
    const colsMap: { [key: number]: string } = {
      1: 'md:grid-cols-1',
      2: 'md:grid-cols-2',
      3: 'md:grid-cols-3',
      4: 'md:grid-cols-4',
      5: 'md:grid-cols-5',
      6: 'md:grid-cols-6',
      7: 'md:grid-cols-7',
      8: 'md:grid-cols-8',
      9: 'md:grid-cols-9',
      10: 'md:grid-cols-10',
      11: 'md:grid-cols-11',
      12: 'md:grid-cols-12'
    };
    return colsMap[cols] || 'md:grid-cols-12';
  };

  return (<div className="relative w-full pb-6 " id={sectionId}>
        <div className="flex flex-row flex-wrap items-baseline justify-between gap-x-4 gap-y-2 pb-10">
          <h2 className={titleClassName + " z-[21]"}>{title}</h2>
          {viewAllHref && (
            <Link
              as={NextLink}
              href={viewAllHref}
              className="text-inherit opacity-60 hover:opacity-100 text-md z-[21] whitespace-nowrap shrink-0"
            >
              View all →
            </Link>
          )}
        </div>
          <div className={`grid grid-cols-1 auto-rows-[18rem] md:auto-rows-[9rem] gap-2 grid-flow-dense ${getGridColsClass(cols)}`}>
            {projects.map((project) => (
              <ProjectItem key={project.key} project={project} isMobileDevice={isMobileDevice} light={light}/>
            ))}
          </div>
        </div>);
};

export const ProjectItem = ({project, isMobileDevice, fillContainer = false, light = false}: {project: Project; isMobileDevice: boolean; fillContainer?: boolean; light?: boolean;}) => {
    // If you use useDisclosure, make sure to import it:
    const { isOpen, onOpen, onOpenChange } = useDisclosure?.() ?? {};
    const sizeMap = {
            sm: "col-span-1 md:col-span-3 row-span-1 md:row-span-2",
            md: "col-span-1 md:col-span-3 row-span-1 md:row-span-3",
            lg: "col-span-1 md:col-span-6 row-span-1 md:row-span-2",
            xl: "col-span-1 md:col-span-5 row-span-1 md:row-span-3",
            xxl: "col-span-1 md:col-span-6 row-span-1 md:row-span-3",
        } as const;

    const span = fillContainer
        ? "h-full w-full"
        : sizeMap[
        project.size as keyof typeof sizeMap
        ] ?? sizeMap.md;

    let firstImage = project.images?.find((img) => !img.src.endsWith(".mp4") && !img.src.endsWith(".mp3") && !img.src.endsWith(".wav"));
    if (project.key === "mage"){
        firstImage = {src: "/projects/mage/mage_live.gif", caption: "GIF of MAGE generating conga drum audio from real-time hand tracking using MediaPipe."};
    }

    const cardRef = React.useRef<HTMLAnchorElement>(null);
    const [isActive, setIsActive] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => {
            if (!isMobileDevice || !cardRef.current) return;
            const rect = cardRef.current.getBoundingClientRect();
            const cardCenter = rect.top + rect.height / 2;
            // Use visualViewport for more accurate viewport size on mobile
            const windowCenter = (window.visualViewport?.height ?? window.innerHeight) / 2;
            // Allow a threshold for "centered"
            const threshold = rect.height / 2;
            setIsActive(Math.abs(cardCenter - windowCenter) < threshold);
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        window.addEventListener("resize", handleScroll);
        window.addEventListener("touchmove", handleScroll, { passive: true });
        window.visualViewport?.addEventListener("resize", handleScroll);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            window.removeEventListener("resize", handleScroll);
            window.removeEventListener("touchmove", handleScroll);
            window.visualViewport?.removeEventListener("resize", handleScroll);
        };
    }, [isMobileDevice]);

    return (
        <>
            <a
                key={project.key ?? project.name}
                onClick={onOpen}
                rel="noreferrer"
                ref={cardRef}
                className={`${span} ${isActive ? "holo-active" : ""} ${light ? "light-card bg-white border-black/10" : "bg-black/40 border-white/10"} group relative flex flex-col overflow-hidden holographic-card duration-300 pointer-events-auto cursor-pointer border-1`}
            >
                <div className={`relative flex-1 min-h-0 overflow-hidden ${light ? "bg-white" : "bg-black"}`}>
                    {firstImage?.src ? (
                        <Image
                            width={700}
                            height={700}
                            src={firstImage.src}
                            alt={project.description ?? project.name}
                            className={`absolute inset-0 h-full w-full transition-transform duration-500 group-hover:scale-105 ` + (project.key === "beamshyft" ? " object-contain" : " object-cover")}
                            draggable={false}
                        />
                    ) : (
                        <div className={`absolute inset-0 ${light ? "bg-neutral-200" : "bg-neutral-900"}`} />
                    )}
                </div>
                <div className={`flex flex-col gap-0.5 p-3 border-t-1 ${light ? "border-black/10" : "border-white/10"}`}>
                    <span className={`text-[10px] uppercase tracking-widest ${light ? "text-black/40" : "text-white/40"}`}>
                        {project.date}
                    </span>
                    <p className={`font-bold text-md truncate ${light ? "text-black/90" : "text-white/90"}`}>
                        {project.name}
                    </p>
                    <p className={`text-xs line-clamp-1 ${light ? "text-black/60" : "text-white/50"}`}>{project.description}</p>
                </div>
            </a>
            
           <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="dark max-w-max" backdrop="blur" scrollBehavior="outside">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-2xl max-w-[700px]">{project.name}</ModalHeader>
                            <ModalBody >
                                <div className="flex flex-col gap-8 max-w-[700px]" >
                                    <div className="text-md">{project.description}</div>
                                    {project.link && (
                                <div className="w-full flex justify-center"><Button as={Link} color="primary" variant="faded" href={project.link} target="_blank" rel="noopener noreferrer" showAnchorIcon>
                                    Project Link
                                </Button></div>)}
                                    <div className="flex flex-col gap-4 items-center">
                                        {project.images.map((image, index) => (
                                            <div key={index} className="items-center flex flex-col gap-4 bg-black/40 p-4 rounded-lg min-w-[200px] min-h-[200px]">
                                                <p className="self-start text-xl">{"fig." + (index+1)}</p>
                                                    <Media src={image.src} caption={image.caption} autoplay={false}/>
                                                <p className="text-center text-sm self-center text-justify">{image.caption}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter className="flex flex-end gap-4">
                                <div>
                                <Button color="danger" onPress={onClose} className="min-h-[40px]">
                                    Close
                                </Button>
                                </div>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>

    )
}