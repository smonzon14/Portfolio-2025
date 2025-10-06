import { ReactNode } from "react";

export const JellyText = ({ children }: { children: ReactNode | string }) => {
  return (
    <div className="relative overflow-hidden inline-block text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white">
      <video
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full absolute top-0 object-cover z-0 pt-1"
        style={{ filter: "brightness(1.6)" }}
        // Hint to browser for priority loading (not a guarantee)
        data-priority="true"
      >
        <source src="jellies2.mp4" type="video/mp4" />
      </video>
      <div className="width-full mix-blend-multiply z-10 bg-[var(--background)]">
        {children}
      </div>
    </div>
  );
};
