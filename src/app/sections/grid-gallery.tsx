"use client";
import Image from "next/image";
import { Project } from "../projects";
import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from "@heroui/modal";
import { useState } from "react";
import { Spinner } from "@heroui/spinner";
import { Button, Link, useDisclosure } from "@heroui/react";

const ImageOrVideo = ({ src, caption, autoplay = true, controls=true }: { src: string, caption: string, autoplay: boolean, controls?: boolean }) => {
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
                    className="object-cover"
                    preload="metadata"
                    src={src + "#t=0.1"}
                    autoPlay={autoplay}
                    loop={autoplay}
                    muted
                    controls={controls}
                    onLoadedData={() => setLoading(false)}
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
                    width={500}
                    height={500}
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
  isMobileDevice = true,
  cols = 12,
}: {
  projects: Project[];
    title: string;
    sectionId: string;
    cols?: number;
  isMobileDevice?: boolean;
}) => {
  return (<div className="relative w-full pb-6" id={sectionId}>
        <h2 className="text-5xl pb-10 z-[21]">{title}</h2>
          <div className={`grid grid-cols-1 grid-rows-0 auto-cols-[16rem] auto-rows-[12rem] gap-1 md:grid-cols-${cols}`}>
            {projects.map((project) => (
              <ProjectItem key={project.key} project={project} />
            ))}
          </div>
        </div>);
};

const ProjectItem = ({project}: {project: Project;}) => {
    // If you use useDisclosure, make sure to import it:
    const { isOpen, onOpen, onOpenChange } = useDisclosure?.() ?? {};
    const sizeMap = {
            sm: "col-span-1 md:col-span-3 row-span-1 md:row-span-2",
            md: "col-span-1 md:col-span-3 row-span-1 md:row-span-3",
            lg: "col-span-1 md:col-span-6 row-span-1 md:row-span-2",
            xl: "col-span-1 md:col-span-5 row-span-2 md:row-span-3",
            xxl: "col-span-1 md:col-span-6 row-span-2 md:row-span-3",
        } as const;

    const textSizeMap = {
        sm: "text-2xl",
        md: "text-2xl",
        lg: "text-3xl",
        xl: "text-3xl",
        xxl: "text-4xl",
    } as const;

    const span =
        sizeMap[
        project.size as keyof typeof sizeMap
        ] ?? sizeMap.md;

    const textSize =
        textSizeMap[
        project.size as keyof typeof textSizeMap
        ] ?? textSizeMap.md;

    const firstImage = project.images?.find((img) => !img.src.endsWith(".mp4"));

    return (
        <>
            <a
                key={project.key ?? project.name}
                onClick={onOpen}
                rel="noreferrer"
                className={`${span} relative block overflow-hidden  duration-300 pointer-events-auto cursor-pointer border-1 border-white/10 `}
            >
                {firstImage?.src ? (
                    <Image
                        width={700}
                        height={700}
                        src={firstImage.src}
                        alt={project.description ?? project.name}
                        className={`absolute inset-0 h-full w-full hover:scale-105 duration-300 opacity-60 hover:opacity-100 ` + (project.key === "beamshyft" ? " object-contain" : " object-cover")}
                        draggable={false}
                    />
                ) : (
                    <div className="absolute inset-0 bg-neutral-900" />
                )}
                <div className="absolute inset-x-0 bottom-0 pointer-events-none">
                    <div className="bg-gradient-to-t from-black/90 to-transparent px-2 py-6 backdrop-blur-sm">
                        <p className={"font-bold text-white/90 line-clamp-3 w-fit " + textSize}>
                            {project.name}
                            <span className="text-sm font-normal block mt-1 text-[#ccc]">{project.description}</span>
                        </p>
                    </div>
                </div>
            </a>
           <Modal isOpen={isOpen} onOpenChange={onOpenChange} className="dark max-w-max" backdrop="blur" scrollBehavior="outside">
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1 text-2xl">{project.name}</ModalHeader>
                            <ModalBody >
                                <div className="flex flex-col gap-8 max-w-[700px]" >
                                    <div className="text-lg">{project.description}</div>
                                    {project.link && (
                                <div className="w-full flex justify-center"><Button as={Link} color="primary" variant="faded" href={project.link} target="_blank" rel="noopener noreferrer" showAnchorIcon>
                                    Project Link
                                </Button></div>)}
                                    <div className="flex flex-col gap-4 items-center">
                                        {project.images.map((image, index) => (
                                            <div key={index} className="items-center flex flex-col gap-4 bg-black/40 p-4 rounded-lg min-w-[200px] min-h-[200px]">
                                                <p className="self-start text-xl">{"fig." + (index+1)}</p>
                                                    <ImageOrVideo src={image.src} caption={image.caption} autoplay={false}/>
                                                <p className="text-center">{image.caption}</p>
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