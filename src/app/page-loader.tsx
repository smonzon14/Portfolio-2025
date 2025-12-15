"use client";
import { useEffect, useState } from "react";
import FullscreenLoader from "./fullscreen-loader";

export default function PageLoader({ children }: { children: React.ReactNode }) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        let loaded = false;

        const checkLoaded = () => {
            if (loaded) return;
            loaded = true;
            setIsLoaded(true);
            try { window.dispatchEvent(new CustomEvent("app-loaded")); } catch {}
        };
        // if wait is longer the 5 seconds, load the page
        setTimeout(() => {
            if (!loaded) {
                checkLoaded();
            }
        }, 7000);

        const handleLoad = () => {
            const videos = Array.from(document.querySelectorAll(".jelly-video")) as HTMLVideoElement[];
            const promises = [
                ...videos.map(
                    (vid) =>
                        new Promise((res) =>
                            vid.readyState >= 3 ? res(true) : vid.addEventListener("loadeddata", () => res(true))
                        )
                ),
            ];
            Promise.all(promises).then(checkLoaded);
        };
        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
            return () => window.removeEventListener("load", handleLoad);
        }
    }, []);

    return (
        <>
            <div
                className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-[1s] ${
                    isLoaded ? "opacity-0 pointer-events-none" : "opacity-100"
                }`}
            >
                <FullscreenLoader />
            </div>
            {children}
        </>
    );
}