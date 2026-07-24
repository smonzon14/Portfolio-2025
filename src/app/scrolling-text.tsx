"use client";

export const ScrollingText = ({ direction = "normal" }: { direction?: "normal" | "reverse" }) => {
  const scrollingText = ["ENGINEER", "RESEARCHER", "DESIGNER", "MUSICIAN"];
  const animationClass = direction === "reverse" ? "animate-scroll-reverse" : "animate-scroll";

  return (
    <>
      <div className="w-full overflow-hidden my-12 opacity-20 pointer-events-none">
        <div className={`inline-flex whitespace-nowrap ${animationClass}`}>
          {Array(4).fill(scrollingText).flat().map((text, i) => (
            <span key={i} className="text-2xl font-bold mx-8">{text}</span>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }

        @keyframes scroll-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        .animate-scroll-reverse {
          animation: scroll-reverse 30s linear infinite;
        }
      `}</style>
    </>
  );
};
