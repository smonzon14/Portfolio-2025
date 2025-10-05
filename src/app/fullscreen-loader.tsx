"use client";
export default function FullscreenLoader() {
  return (
    <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center">
      <div className="w-12 h-12 border-4 border-t-transparent border-white rounded-full animate-spin"></div>
      <p className="text-white text-lg tracking-widest animate-pulse mt-4">LOADING PROJECTS...</p>
    </div>
  );
}
