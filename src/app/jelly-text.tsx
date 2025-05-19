

import { ReactNode } from 'react';

export const JellyText = ({ children }: { children: ReactNode | string}) => {
    return (
        <div className="relative overflow-hidden inline-block text-4xl sm:text-5xl md:text-7xl lg:text-9xl text-white">
            <video preload='auto' autoPlay loop muted playsInline className="w-full h-full absolute top-0 object-cover z-0">
                <source src="jellies2.mp4" type="video/mp4">
                </source>
            </video>
            <div className="width-full mix-blend-multiply z-10 bg-[var(--background)]">
                {children}
            </div>
        </div>
    );
}