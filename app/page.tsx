"use client";

import { useIsMobile } from "./hooks/useIsMobile";
import { ArtFrame } from "./components/ArtFrame";

const videos = [
  {
    id: "a7pU6FKxjY4",
    title: "Artwork I",
  },
  {
    id: "2lT_0OFcB9c",
    title: "Artwork II",
  },
];

function FramedVideo({ videoId, title }: { videoId: string; title: string }) {
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
      <p className="mt-6 px-8 py-3 plaque text-sepia text-sm font-medium tracking-[0.2em] uppercase rounded-sm shadow-md">
        {title}
      </p>
    </div>
  );
}

export default function Home() {
  const isMobile = useIsMobile();

  return (
    <div className="gallery-bg min-h-screen relative">
      <div className="min-h-screen flex flex-col items-center px-4 py-12 md:px-6 md:py-12">
        <header className="text-center mb-16 md:mb-16 header-line">
          <h1 className="text-4xl md:text-6xl font-light text-sepia tracking-[0.3em] uppercase m-0">
            The Gallery
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
          {videos.map((video) => (
            <FramedVideo
              key={video.id}
              videoId={video.id}
              title={video.title}
            />
          ))}
        </main>

        <footer className="mt-auto pt-16 text-center">
          <p className="text-base text-sepia tracking-[0.3em] opacity-60 m-0">
            MMXXV
          </p>
        </footer>
      </div>
    </div>
  );
}
