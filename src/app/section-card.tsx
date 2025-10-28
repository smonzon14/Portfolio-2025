
import React from "react";
import { Card, CardProps } from "@heroui/card";
import Image from "next/image";


import { CardFooter } from "@heroui/card";


interface SectionCardProps extends CardProps {
    title: string;
    href: string;
    imageSrc: string;
    imageAlt: string;
    description: string;
    children: React.ReactNode[] | React.ReactNode | string;
    className?: string;
    cardFooterClassName?: string;
}

export const SectionCard = ({
    title,
    imageSrc,
    imageAlt,
    description,
    children,
    className,
    cardFooterClassName,
    ...props
} : SectionCardProps) => {
    return (
        <Card isFooterBlurred className={"bg-black relative flex-grow h-[400px] lg:h-[400px] text-white gap-4 relative overflow-hidden border-1 border-white/10 " + className} { ...props } >
            <React.Suspense
                fallback={
                    <div className="w-full h-full flex items-center justify-center bg-black/30">
                        <div className="animate-pulse bg-gray-700 rounded w-full h-full opacity-70" />
                    </div>
                }
            >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="object-cover w-full h-full opacity-70 hover:opacity-80 hover:scale-105 transition-all duration-300 ease-in-out"
                    width={500}
                    height={500}
                />
            </React.Suspense>

            <CardFooter className={"justify-between flex-wrap absolute bottom-0 z-2 pointer-events-none  text-left gap-2 " + cardFooterClassName}>
                <h2 className="text-4xl">{title}</h2>
                
                <div className="flex flex-col pointer-events-none max-w-[450px] text-white/80">
                    <p className="text-md">{description}</p>
                </div>
                <div className="gap-2 pointer-events-auto flex-wrap flex flex-row self-end">
                    {children}
                </div>
            </CardFooter>
        </Card>
    );
}