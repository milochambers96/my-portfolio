import { ReactNode } from "react";

interface BackgroundProps {
  children: ReactNode;
}

const Background = ({ children }: BackgroundProps) => {
  return (
    <div className="min-h-screen bg-woodland-background relative">
      {/* Noise overlay */}
      <div className="absolute inset-0 opacity-75">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.99"
              numOctaves="3"
              stitchTiles="stitch"
            />
          </filter>
          <rect
            width="100%"
            height="100%"
            filter="url(#noiseFilter)"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
};

export default Background;
