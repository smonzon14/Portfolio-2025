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
import { usePrevNextButtons, NextButton, PrevButton } from './embla-carousel-arrow-buttons'
import Autoplay from 'embla-carousel-autoplay'
import { Project } from "../projects"
import Image from "next/image"
const TWEEN_FACTOR_BASE = 0.84

const numberWithinRange = (number: number, min: number, max: number): number =>
    Math.min(Math.max(number, min), max)

const ImageOrVideo = ({ src, caption, autoplay=true }: { src: string, caption: string, autoplay: boolean }) => {
    if (src.endsWith('.mp4')) {
        return <video className="object-cover" preload="metadata" src={src + "#t=0.1"} autoPlay={autoplay} loop={autoplay} muted controls={!autoplay}/>
    } else {
        return <Image className="object-cover" src={src} alt={caption} width={500} height={500} unoptimized={src.endsWith(".gif")}/>
    }
}

const Carousel = ({ project, onOpenModal, isMobileDevice=true }: { project: Project, onOpenModal?: () => void, isMobileDevice: boolean }) => {
    const autoplayDelay = useMemo(() => Math.random() * 1000 + 4000, []); // Calculate delay once
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

    useEffect(() => {
        if (emblaApi) {
            console.log(emblaApi.slideNodes()) // Access API
        }
    }, [emblaApi])

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

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick
    } = usePrevNextButtons(emblaApi)

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
                    // if (slideIndex === engine.index.get()) {
                    //     bgImageRef.current!.style.opacity = opacity
                    // }

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
        <div className="relative flex-grow flex lg:h-[800px] w-[500px]">
            <Card isFooterBlurred className={"bg-black relative flex-grow text-white gap-4 relative overflow-hidden border-1 border-white/20"}>
                <CardHeader className="flex-col !items-center pointer-events-none text-center px-10 pt-4">
                    <h2 className="text-3xl text-shadow-lg">{project.name}</h2>
                </CardHeader>
                {!isMobileDevice && <div ref={bgImageRef} className="h-full w-full flex items-center justify-center absolute top-0 left-0 blur-[10px] pointer-events-none">
                    {!selectedImage.src.endsWith('.mp4') && !selectedImage.src.endsWith('.gif') && (<Image className="object-cover w-full h-full opacity-20" src={selectedImage.src} alt={selectedImage.caption} width={100} height={100} unoptimized={selectedImage.src.endsWith(".gif")} />)}
                </div>}

                <CardBody className="min-h-max">
                <div className="embla relative h-full w-full overflow-hidden">
                    <div className="embla__viewport h-full" ref={emblaRef}>
                        <div className="embla__container h-full">
                            {project.images.map((image, index) => (
                                <div className="embla__slide flex-grow" key={index}>

                                    <div className="relative h-full max-h-[400px] min-h-[400px] flex items-center justify-center">
                                        <ImageOrVideo src={image.src} caption={image.caption} autoplay={false}/>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>


                </div>
                </CardBody>
                <CardFooter className="min-h-max bg-black/50 pb-10 z-2 border-t-1 border-t-white/20 text-left flex flex-col justify-between">
                {scrollSnaps.length > 1 && (
                    <div className="embla !m-0 flex flex-row justify-center w-full pointer-events-none">

                        <div className="flex-row flex gap-2 p-2 pointer-events-auto bottom-0 z-2 ">
                            {scrollSnaps.map((_, index) => (
                                <DotButton
                                    key={index}
                                    onClick={() => onDotButtonClick(index)}
                                    className={'embla__dot'.concat(
                                        index === selectedIndex ? ' embla__dot--selected' : ''
                                    )}
                                />
                            ))}
                        </div>
                    </div>)}
                    <p className="p-2 sm:text-lg md:text-xl">{selectedImage.caption}</p>
                    <Button color="primary" className="min-h-[40px]" onPress={onOpenModal} >
                        Read more
                    </Button>
                </CardFooter>
            </Card>
            
            <div className="flex flex-row justify-between absolute bottom-[50%] w-full p-4 pointer-events-none">
                <div className="pointer-events-auto">
                    <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
                </div>


                <div className="pointer-events-auto">
                    <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />

                </div>
            </div>
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