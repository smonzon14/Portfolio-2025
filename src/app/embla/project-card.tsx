"use client"
import "./carousel.css"
import React, { useEffect, useMemo, useRef, useCallback } from 'react'
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Link,
} from "@heroui/react";
import { Card, CardHeader, CardFooter, CardBody } from "@heroui/card"
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaCarouselType, EmblaEventType } from 'embla-carousel'

import { useDotButton, DotButton } from './embla-carousel-dot-buttons'
// import { usePrevNextButtons, NextButton, PrevButton } from './embla-carousel-arrow-buttons'
import Autoplay from 'embla-carousel-autoplay'
import { Project } from "../projects"
import Image from "next/image"
import { useState } from "react";
import { Spinner } from "@heroui/react";
const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max)

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

const Carousel = ({ project, onOpenModal, isMobileDevice=true }: { project: Project, onOpenModal?: () => void, isMobileDevice: boolean }) => {
    const autoplayDelay = useMemo(() => Math.random() * 3000 + 6000, []); // Calculate delay once
    const bgImageRef = useRef<HTMLDivElement>(null)

    const [emblaRef, emblaApi] = useEmblaCarousel(
        { loop: true },
        isMobileDevice ? [] : [
            Autoplay({
                delay: autoplayDelay, // Use the pre-calculated delay
                stopOnInteraction: true,
            })
        ]
    );

    const onNavButtonClick = useCallback((emblaApi: EmblaCarouselType) => {
        const autoplay = emblaApi.plugins().autoplay
        if (!autoplay) return
        const resetOrStop =
            autoplay.options.stopOnInteraction === false
                ? autoplay.reset
                : autoplay.stop

        resetOrStop()
    }, [])

    const tweenFactor = useRef(0)

    const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi, onNavButtonClick)

    // const {
    //     prevBtnDisabled,
    //     nextBtnDisabled,
    //     onPrevButtonClick,
    //     onNextButtonClick
    // } = usePrevNextButtons(emblaApi)

    const setTweenFactor = useCallback((emblaApi: EmblaCarouselType) => {
        tweenFactor.current = TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length
    }, [])

    const tweenOpacity = useCallback(
        (emblaApi: EmblaCarouselType, eventName?: EmblaEventType) => {
            const engine = emblaApi.internalEngine()
            const scrollProgress = emblaApi.scrollProgress()
            const slidesInView = emblaApi.slidesInView()
            const isScrollEvent = eventName === 'scroll'

            emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
                let diffToTarget = scrollSnap - scrollProgress
                const slidesInSnap = engine.slideRegistry[snapIndex]

                slidesInSnap.forEach((slideIndex) => {
                    if (isScrollEvent && !slidesInView.includes(slideIndex)) return

                    if (engine.options.loop) {
                        engine.slideLooper.loopPoints.forEach((loopItem) => {
                            const target = loopItem.target()

                            if (slideIndex === loopItem.index && target !== 0) {
                                const sign = Math.sign(target)

                                if (sign === -1) {
                                    diffToTarget = scrollSnap - (1 + scrollProgress)
                                }
                                if (sign === 1) {
                                    diffToTarget = scrollSnap + (1 - scrollProgress)
                                }
                            }
                        })
                    }

                    const tweenValue = 1 - Math.abs(diffToTarget * tweenFactor.current)
                    const opacity = numberWithinRange(tweenValue, 0, 1).toString()
                    emblaApi.slideNodes()[slideIndex].style.opacity = opacity
                })
            })
        },
        []
    )

    useEffect(() => {
        if (!emblaApi) return

        setTweenFactor(emblaApi)
        tweenOpacity(emblaApi)
        emblaApi
            .on('reInit', setTweenFactor)
            .on('reInit', tweenOpacity)
            .on('scroll', tweenOpacity)
            .on('slideFocus', tweenOpacity)
    }, [emblaApi, tweenOpacity, setTweenFactor])

    const selectedImage = project.images[emblaApi?.selectedScrollSnap() || 0];
    return (
        <div
            id={project.key}
            className="relative flex-grow flex w-[340px] lg:max-w-[40%] min-w-[280px] max-w-[400px] transition-all"
        >
            <Card
                isFooterBlurred
                className="bg-black relative flex-grow text-white gap-0 overflow-hidden border border-white/20 p-0"
            >
                {/* Header overlays image */}
                <CardHeader className="absolute top-0 left-0 w-full flex-col items-center text-center px-2 pt-4 z-10 pointer-events-none bg-black/40 backdrop-blur-md">
                    <h2 className="text-xl font-semibold">{project.name}</h2>
                </CardHeader>

                {/* Background image blur for desktop */}
                {!isMobileDevice && (
                    <div
                        ref={bgImageRef}
                        className="h-full w-full flex items-center justify-center absolute top-0 left-0 blur-[10px] pointer-events-none"
                    >
                        {!selectedImage.src.endsWith('.mp4') &&
                            !selectedImage.src.endsWith('.gif') && (
                                <Image
                                    className="object-cover w-full h-full opacity-20"
                                    src={selectedImage.src}
                                    alt={selectedImage.caption}
                                    width={100}
                                    height={100}
                                    unoptimized={selectedImage.src.endsWith('.gif')}
                                />
                            )}
                    </div>
                )}

                {/* Image/video fills card */}
                <CardBody className="p-0 min-h-max relative pointer-events-none">
                    <div className="embla relative h-full w-full overflow-hidden">
                        <div className="embla__viewport h-full" ref={emblaRef}>
                            <div className="embla__container h-full">
                                {project.images.map((image, index) => (
                                    <div className="embla__slide flex-grow" key={index}>
                                        <div className="relative h-[360px] sm:h-[400px] md:h-[500px] flex items-center justify-center">
                                            <ImageOrVideo
                                                src={image.src}
                                                caption={image.caption}
                                                autoplay={false}
                                                controls={false}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </CardBody>

                {/* Footer overlays image */}
                <CardFooter className="absolute bottom-0 left-0 w-full bg-black/40 backdrop-blur-md pb-4 z-10 border-t border-white/20 text-left flex flex-col justify-between px-2 pt-2">
                    {scrollSnaps.length > 1 && (
                        <div className="embla flex flex-row justify-center w-full pointer-events-none mb-2">
                            <div className="flex-row flex gap-2 pointer-events-auto z-2">
                                {scrollSnaps.map((_, index) => (
                                    <DotButton
                                        key={index}
                                        onClick={() => onDotButtonClick(index)}
                                        className={
                                            'embla__dot' +
                                            (index === selectedIndex
                                                ? ' embla__dot--selected'
                                                : '')
                                        }
                                    />
                                ))}
                            </div>
                        </div>
                    )}
                    <p className="mx-2 text-sm md:text-base line-clamp-3 text-center min-h-[40px] !leading-tight mb-2">
                        {selectedImage.caption}
                    </p>
                    <Button
                        id={`${project.key}_modal`}
                        color="warning"
                        size="md"
                        variant="flat"
                        onPress={onOpenModal}
                        className="self-center"
                    >
                        Read more
                    </Button>
                </CardFooter>
            </Card>

            {/* Carousel arrows
            <div className="flex flex-row justify-between absolute bottom-[50%] w-full p-4 pointer-events-none z-20">
                <div className="pointer-events-auto">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                </div>
                <div className="pointer-events-auto">
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
                </div>
            </div> */}
        </div>
    )
};

export function ProjectCard({ project, isMobileDevice=true }: {
    project: Project,
    children?: React.ReactNode[] | React.ReactNode | string,
    isMobileDevice?: boolean
}) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const carousel = useMemo(() => <Carousel project={project} onOpenModal={onOpen} isMobileDevice={isMobileDevice}/>, [project, onOpen, isMobileDevice])

    return (
        <>
            {carousel}
            {isOpen && (
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
                                            <div key={index} className="items-center flex flex-col gap-4 bg-black/40 p-4 rounded-lg">
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
            </Modal>)}
        </>
    )
}