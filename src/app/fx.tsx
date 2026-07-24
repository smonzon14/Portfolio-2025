"use client";
import React from "react";

export const useReducedMotion = () => {
    const [reduced, setReduced] = React.useState(false);
    React.useEffect(() => {
        const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
        const update = () => setReduced(mq.matches);
        update();
        mq.addEventListener("change", update);
        return () => mq.removeEventListener("change", update);
    }, []);
    return reduced;
};

/**
 * Slight scroll-linked vertical drift, written to `transform` on the target
 * element. Positive `by` makes the element travel faster than the page (pops
 * toward the viewer), negative makes it lag behind (recedes). `by` is the max
 * offset in px, reached when the element is half a viewport from center.
 */
export const useDrift = (ref: React.RefObject<HTMLElement | null>, by: number) => {
    const reduced = useReducedMotion();
    React.useEffect(() => {
        const el = ref.current;
        if (!el || !by || reduced) return;
        let raf = 0;
        let applied = 0;
        const update = () => {
            const r = el.getBoundingClientRect();
            const vh = window.innerHeight;
            // subtract the drift we already applied so the rect read doesn't feed back
            const baseCenter = r.top - applied + r.height / 2;
            const progress = Math.max(-1, Math.min(1, (baseCenter - vh / 2) / (vh / 2)));
            applied = progress * by;
            el.style.transform = `translateY(${applied.toFixed(2)}px)`;
        };
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            cancelAnimationFrame(raf);
            el.style.transform = "";
        };
    }, [ref, by, reduced]);
};

/** Wrapper element with scroll drift, for content that isn't its own component. */
export const Drift = ({
    by,
    className,
    children,
}: {
    by: number;
    className?: string;
    children: React.ReactNode;
}) => {
    const ref = React.useRef<HTMLDivElement>(null);
    useDrift(ref, by);
    return (
        <div ref={ref} className={className}>
            {children}
        </div>
    );
};

/** Glow layer whose intensity follows how much of it is on screen. */
export const ScrollGlow = ({ className = "" }: { className?: string }) => {
    const ref = React.useRef<HTMLDivElement>(null);
    const reduced = useReducedMotion();
    React.useEffect(() => {
        if (reduced) return;
        const el = ref.current;
        if (!el) return;
        let raf = 0;
        const update = () => {
            const r = el.getBoundingClientRect();
            const vh = window.innerHeight;
            const visible = Math.min(r.bottom, vh) - Math.max(r.top, 0);
            const ratio = Math.max(0, Math.min(1, visible / Math.min(r.height, vh)));
            el.style.opacity = (0.2 + 0.8 * ratio).toFixed(3);
        };
        const onScroll = () => {
            cancelAnimationFrame(raf);
            raf = requestAnimationFrame(update);
        };
        update();
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onScroll);
        return () => {
            window.removeEventListener("scroll", onScroll);
            window.removeEventListener("resize", onScroll);
            cancelAnimationFrame(raf);
        };
    }, [reduced]);
    return <div aria-hidden ref={ref} className={"pointer-events-none " + className} />;
};
