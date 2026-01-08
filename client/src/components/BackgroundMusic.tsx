import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackgroundMusic() {
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMuted || !isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
          setIsMuted(false);
        }).catch(() => {
          console.log("Autoplay prevented");
        });
      } else {
        audioRef.current.pause();
        setIsMuted(true);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Clair_de_Lune_%28Debussy%29.ogg"
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMusic}
        className="fixed bottom-6 left-6 z-50 bg-background/80 backdrop-blur-sm border border-border shadow-lg"
        data-testid="button-music-toggle"
      >
        {isMuted ? (
          <VolumeX className="h-5 w-5" />
        ) : (
          <Volume2 className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle music</span>
      </Button>
    </>
  );
}
