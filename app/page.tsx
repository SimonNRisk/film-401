"use client";

import { useState } from "react";
import { useIsMobile } from "./hooks/useIsMobile";
import { ArtFrame } from "./components/ArtFrame";
import { Modal } from "./components/Modal";

const videos = [
  {
    id: "a7pU6FKxjY4",
    title: "Artwork I",
    description: `This piece explores the intersection of memory and perception through a carefully constructed visual narrative. The deliberate pacing allows viewers to inhabit the space between moments, finding meaning in the pauses and silences that punctuate our everyday experience.

The choice of natural lighting was intentional—we wanted to capture the ephemeral quality of late afternoon light as it filters through domestic spaces, creating a sense of intimacy and transience. The handheld camera work reflects the subjective nature of memory itself: imperfect, searching, always in motion.

Sound design plays a crucial role here, with ambient textures layered beneath the visual narrative to create an immersive atmosphere that draws the viewer deeper into the emotional landscape of the piece.`,
  },
  {
    id: "2lT_0OFcB9c",
    title: "Artwork II",
    description: `In this work, we examine the relationship between space and identity, questioning how the environments we inhabit shape our sense of self. The architectural elements serve not merely as backdrop but as active participants in the narrative.

The decision to shoot in a single location over multiple days allowed us to observe how changing light transforms familiar spaces into something strange and new. This temporal layering mirrors the way memory accumulates and distorts our perception of place.

The minimal dialogue is a conscious choice—we believe in the eloquence of gesture and expression, allowing the visual language to carry the emotional weight of the story. Each frame is composed with painterly attention to color, texture, and depth.`,
  },
];

function FramedVideo({
  videoId,
  title,
  onInfoClick,
}: {
  videoId: string;
  title: string;
  onInfoClick: () => void;
}) {
  return (
    <div className="flex flex-col items-center transition-transform duration-400 ease-out hover:scale-[1.02]">
      <ArtFrame className="w-[min(550px,90vw)] aspect-video frame-shadow">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full border-none bg-black"
        />
      </ArtFrame>
      <button
        onClick={onInfoClick}
        className="mt-6 px-8 py-3 plaque text-sepia text-sm font-medium tracking-[0.2em] uppercase rounded-sm shadow-md hover:brightness-110 transition-all cursor-pointer"
      >
        {title}
      </button>
    </div>
  );
}

export default function Home() {
  const isMobile = useIsMobile();
  const [selectedArtwork, setSelectedArtwork] = useState<number | null>(null);

  return (
    <div className="gallery-bg min-h-screen relative">
      <div className="min-h-screen flex flex-col items-center px-4 py-12 md:px-6 md:py-12">
        <header className="text-center mb-16 md:mb-16 header-line">
          <h1 className="text-4xl md:text-6xl font-light text-sepia tracking-[0.2em] uppercase m-0">
            Film 401 Portfolio
          </h1>
          <p className="text-base md:text-xl font-normal italic text-sepia-light tracking-[0.15em] mt-3">
            A Curated Collection
          </p>
        </header>

        <main
          className="grid gap-12 md:gap-16 max-w-6xl w-full px-4 md:px-8 justify-items-center"
          style={{
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
          }}
        >
          {videos.map((video, index) => (
            <FramedVideo
              key={video.id}
              videoId={video.id}
              title={video.title}
              onInfoClick={() => setSelectedArtwork(index)}
            />
          ))}
        </main>

        <footer className="mt-auto pt-16 text-center">
          <p className="text-base text-sepia tracking-[0.2em] opacity-80 m-0">
            Abagail McIntyre-Tsiang
          </p>
        </footer>
      </div>

      {/* Modal for artwork descriptions */}
      <Modal
        isOpen={selectedArtwork !== null}
        onClose={() => setSelectedArtwork(null)}
      >
        {selectedArtwork !== null && (
          <p className="whitespace-pre-line">
            {videos[selectedArtwork].description}
          </p>
        )}
      </Modal>
    </div>
  );
}
