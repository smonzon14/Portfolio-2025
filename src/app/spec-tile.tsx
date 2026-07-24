import React from "react";

export const SpecTile = ({
    label,
    className = "",
    children,
}: {
    label?: string;
    className?: string;
    children: React.ReactNode;
}) => (
    <div className={"bg-black/40 border-1 border-white/10 p-4 flex flex-col gap-2 " + className}>
        {label && (
            <span className="text-xs uppercase tracking-widest text-white/40">{label}</span>
        )}
        {children}
    </div>
);

export const DottedLeader = () => (
    <span className="flex-1 min-w-[24px] border-b border-dotted border-white/30" aria-hidden />
);
