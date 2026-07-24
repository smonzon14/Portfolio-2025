"use client";
import Script from "next/script";
import { useEffect } from "react";

/**
 * Three.js waves pinned to the bottom of a positioned, overflow-hidden
 * parent (the About band). Fades out toward the top so content stays legible.
 */
export const WavesBackdrop = () => {
    // Re-init after client-side navigation back to this page —
    // waves.js only auto-runs on the initial script load.
    useEffect(() => {
        const w = window as unknown as { initWaves?: () => void };
        w.initWaves?.();
    }, []);

    return (
        <div
            aria-hidden
            className="absolute inset-0 flex justify-center items-end overflow-hidden opacity-70 pointer-events-none"
            style={{
                maskImage: "linear-gradient(to top, black 25%, transparent 80%)",
                WebkitMaskImage: "linear-gradient(to top, black 25%, transparent 80%)",
            }}
        >
            <div
                id="waves-canvas"
                style={{ transform: "rotate(-25deg) translateY(30%)" }}
            >
                <Script
                    id="waves-canvas-script"
                    src="/waves.js"
                    strategy="afterInteractive"
                    type="module"
                />
            </div>
        </div>
    );
};
