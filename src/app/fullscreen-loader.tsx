"use client";
export default function FullscreenLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      
      <p className="text-white text-lg tracking-widest animate-pulse">LOADING...</p>

    </div>
  );
}