import React from "react";

/**
 * Full-bleed horizontal band. `elevated` lifts the surface slightly off pure
 * black with hairline borders, so alternating bands read as distinct rooms.
 * `frosted` is a translucent variant with a backdrop blur — use it where a
 * background effect (e.g. the hero waves) bleeds behind the band and should
 * stay visible but clearly separated.
 */
export const SectionBand = ({
    elevated = false,
    frosted = false,
    light = false,
    className = "",
    children,
}: {
    elevated?: boolean;
    frosted?: boolean;
    light?: boolean;
    className?: string;
    children: React.ReactNode;
}) => (
    <div
        className={
            "w-screen flex flex-col items-center px-4 md:px-6 py-16 " +
            (frosted
                ? "relative z-10 bg-gradient-to-b from-[rgba(12,12,12,0.15)] via-[rgba(12,12,12,0.7)] to-[#0c0c0c] backdrop-blur-[2px] border-y-1 border-white/10 "
                : elevated
                ? "bg-[#0c0c0c] border-y-1 border-white/10 "
                : light
                ? "bg-[#f5f5f4] text-black border-y-1 border-black/10 "
                : "") +
            className
        }
    >
        {children}
    </div>
);
