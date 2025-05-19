
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
}

export const SectionCard = ({
    title,
    imageSrc,
    imageAlt,
    description,
    children,
    className,
    ...props
} : SectionCardProps) => {
    return (
        <Card isFooterBlurred className={"bg-black relative flex-grow h-[400px] lg:h-[600px] text-white gap-4 relative overflow-hidden border-1 border-white/20 " + className} { ...props } >
                <Image
                    src={imageSrc}
                    alt={imageAlt}
                    className="object-cover w-full h-full opacity-70 hover:opacity-80 hover:scale-105 transition-all duration-300 ease-in-out"
                    width={500}
                    height={500}
                    loading="eager"

                />
                
            <CardFooter className="justify-between flex-wrap absolute bg-black/50 bottom-0 z-2 border-t-1 pointer-events-none border-t-white/20 text-left gap-4">
                <h2 className="text-4xl">{title}</h2>
                
                <div className="flex flex-col pointer-events-none max-w-[500px] text-white/80">
                    <p>{description}</p>
                </div>
                <div className="flex flex-row gap-2 pointer-events-auto flex-wrap">
                    {children}
                </div>
            </CardFooter>
        </Card>
    );
}