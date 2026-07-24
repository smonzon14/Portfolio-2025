"use client";
import React from "react";
import { useInView } from "react-intersection-observer";

/**
 * Fade-and-rise scroll reveal. Wraps children in a div that animates in the
 * first time it enters the viewport. With `stagger`, the wrapper stays static
 * and its direct children animate in sequence instead (delays capped at 600ms
 * so large grids don't trickle forever).
 */
export const Reveal = ({
    children,
    className = "",
    delay = 0,
    stagger,
    rootMargin = "0px 0px -35% 0px",
}: {
    children: React.ReactNode;
    className?: string;
    delay?: number;
    stagger?: number;
    /** shrink the viewport trigger zone; default fires once the block is ~35% up from the bottom */
    rootMargin?: string;
}) => {
    const { ref: inViewRef, inView } = useInView({
        threshold: 0.1,
        triggerOnce: true,
        rootMargin,
    });
    const elRef = React.useRef<HTMLDivElement | null>(null);
    const setRefs = React.useCallback(
        (el: HTMLDivElement | null) => {
            elRef.current = el;
            inViewRef(el);
        },
        [inViewRef]
    );
    React.useEffect(() => {
        if (!stagger || !elRef.current) return;
        Array.from(elRef.current.children).forEach((child, i) => {
            (child as HTMLElement).style.transitionDelay = `${delay + Math.min(i * stagger, 600)}ms`;
        });
    }, [stagger, delay]);
    return (
        <div
            ref={setRefs}
            className={`${stagger ? "reveal-stagger" : "reveal"}${inView ? " revealed" : ""} ${className}`}
            style={!stagger && delay ? ({ "--reveal-delay": `${delay}ms` } as React.CSSProperties) : undefined}
        >
            {children}
        </div>
    );
};
