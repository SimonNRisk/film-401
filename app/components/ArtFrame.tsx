"use client";

import Image from "next/image";

interface ArtFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function ArtFrame({ children, className = "" }: ArtFrameProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Content area - positioned inside the frame opening */}
      <div className="absolute inset-[8%] overflow-hidden z-0">
        {children}
      </div>
      
      {/* Frame image - on top, slightly larger than container */}
      <div className="absolute inset-[-4%] z-10 pointer-events-none">
        <Image
          src="/Light-Oak-Frame.png"
          alt="Oak picture frame"
          fill
          className="object-fill"
          priority
        />
      </div>
    </div>
  );
}
