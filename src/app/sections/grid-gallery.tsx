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
  cols = 12,
}: {
  projects: Project[];
    title: string;
    sectionId: string;
    cols?: number;
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

  return (<div className="relative w-full pb-6" id={sectionId}>
        <h2 className="text-5xl pb-10 z-[21]">{title}</h2>
          <div className={`grid grid-cols-1 auto-rows-[12rem] gap-1 grid-flow-dense ${getGridColsClass(cols)}`}>
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
                className={`${span} relative block overflow-hidden holographic-card duration-300 pointer-events-auto brightness-[0.5] hover:brightness-[1.0] cursor-pointer border-1 border-white/10 bg-black`}
            >
                {firstImage?.src ? (
                    <Image
                        width={700}
                        height={700}
                        src={firstImage.src}
                        alt={project.description ?? project.name}
                        className={`absolute inset-0 h-full w-full duration-300 ` + (project.key === "beamshyft" ? " object-contain" : " object-cover")}
                        draggable={false}
                    />
                ) : (
                    <div className="absolute inset-0 bg-neutral-900" />
                )}
                <div className="absolute inset-x-0 bottom-0 pointer-events-none">
                    <div className="bg-gradient-to-t from-black/100 to-transparent px-2 py-40 pb-4">
                        <p className={"font-bold text-white/90 line-clamp-3 w-fit " + textSize}>
                            {project.name}
                            <span className="text-sm font-normal block mt-1 text-[#ccc]">{project.description}</span>
                        </p>
                    </div>
                </div>
            </a>
            <style jsx>{`


.holographic-card::before {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    0deg, 
    transparent, 
    transparent 30%, 
    rgba(255,255,255,0.3)
  );
  transform: rotate(-45deg);
  transition: all 0.5s ease;
  opacity: 0;
}

.holographic-card:hover {
z-index: 10;
  transform: scale(1.05);
  box-shadow: 0 0 20px rgba(255,255,255,0.5);
}

.holographic-card:hover::before {
z-index: 11;
  opacity: 1;
  transform: rotate(-45deg) translateY(100%);
}
            `}</style>
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