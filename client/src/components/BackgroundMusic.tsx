import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.15;
      
      const handleCanPlay = () => setIsLoaded(true);
      const handleError = (e: Event) => {
        console.log("Audio error:", e);
        setIsLoaded(false);
      };
      
      audioRef.current.addEventListener('canplaythrough', handleCanPlay);
      audioRef.current.addEventListener('error', handleError);
      
      return () => {
        audioRef.current?.removeEventListener('canplaythrough', handleCanPlay);
        audioRef.current?.removeEventListener('error', handleError);
      };
    }
  }, []);

  const toggleMusic = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          console.log("Play error:", err);
        });
      } else {
        audioRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3"
      />
      <Button
        variant="ghost"
        size="icon"
        onClick={toggleMusic}
        className="fixed bottom-6 left-6 z-50 bg-background/80 backdrop-blur-sm border border-border shadow-lg"
        data-testid="button-music-toggle"
      >
        {isPlaying ? (
          <Volume2 className="h-5 w-5" />
        ) : (
          <VolumeX className="h-5 w-5" />
        )}
        <span className="sr-only">Toggle music</span>
      </Button>
    </>
  );
}
