import { ReactNode } from "react";

export const JellyText = ({ children }: { children: ReactNode | string }) => {
  return (
    <div className="relative overflow-hidden inline-block text-5xl sm:text-6xl md:text-7xl lg:text-9xl text-white bg-black [isolation:isolate]">
      <video
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full absolute top-0 object-cover pt-1 jelly-video"
        style={{ filter: "brightness(1.6)" }}
        ref={(video) => {
          if (video) {
            video.playbackRate = 0.7;
          }
        }}
        data-priority="true"
        poster="jellies2-poster.jpg"
      >
        <source src="jellies10.mp4" type="video/mp4" />
      </video>
      <div className="width-full mix-blend-multiply bg-[var(--background)] relative">
        {children}
      </div>
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none mix-blend-lighten"
        aria-hidden="true"
      >
        <span
          style={{
            color: "#1945c0ff"
          }}
        >
          {children}
        </span>
      </div>
    </div>
  );
};
