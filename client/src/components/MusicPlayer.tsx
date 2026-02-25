import React, { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX, Music } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/i18n/I18nProvider';

const musicTracks = [
  { id: 1, name: 'Classical Ambience', artist: 'Office Ensemble' },
  { id: 2, name: 'Professional Jazz', artist: 'Business Quartet' },
  { id: 3, name: 'Corporate Lounge', artist: 'Executive Sounds' },
];

export default function MusicPlayer() {
  const { locale } = useI18n();
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrack, setCurrentTrack] = useState(0);
  const [volume, setVolume] = useState(0.3);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    console.log(isPlaying ? 'Pausing music' : 'Playing music');
    setIsPlaying(!isPlaying);
  };

  const changeTrack = (direction: 'next' | 'prev') => {
    const maxTracks = musicTracks.length;
    if (direction === 'next') {
      setCurrentTrack((prev) => (prev + 1) % maxTracks);
    } else {
      setCurrentTrack((prev) => (prev === 0 ? maxTracks - 1 : prev - 1));
    }
  };

  return (
    <>
      {/* Floating Music Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full h-14 w-14 bg-primary hover:bg-primary/90 shadow-xl"
          title={locale === 'uk' ? 'Офісна музика' : 'Office Music'}
        >
          <Music className="h-6 w-6 text-white" />
        </Button>
      </motion.div>

      {/* Music Player Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed bottom-24 right-6 w-80 bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 z-50 overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary p-4">
              <h3 className="text-white font-semibold flex items-center gap-2">
                <Music className="h-5 w-5" />
                {locale === 'uk' ? 'Офісна Атмосфера' : 'Office Atmosphere'}
              </h3>
              <p className="text-primary-foreground/80 text-sm">
                {locale === 'uk' ? 'Музика для продуктивності' : 'Music for productivity'}
              </p>
            </div>

            {/* Current Track */}
            <div className="p-4">
              <div className="text-center mb-4">
                <h4 className="font-medium text-gray-900 dark:text-gray-100">
                  {musicTracks[currentTrack]?.name}
                </h4>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {musicTracks[currentTrack]?.artist}
                </p>
                <p className="text-xs text-gray-400 mt-1">
                  {locale === 'uk' ? 'Трек' : 'Track'} {currentTrack + 1} / {musicTracks.length}
                </p>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-4 mb-4">
                <Button
                  onClick={() => changeTrack('prev')}
                  variant="ghost"
                  size="sm"
                  className="rounded-full h-10 w-10"
                >
                  ⏮️
                </Button>
                
                <Button
                  onClick={togglePlay}
                  className="bg-primary hover:bg-primary/90 rounded-full h-12 w-12"
                >
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5 ml-0.5" />}
                </Button>
                
                <Button
                  onClick={() => changeTrack('next')}
                  variant="ghost"
                  size="sm"
                  className="rounded-full h-10 w-10"
                >
                  ⏭️
                </Button>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-2 mb-4">
                <Button
                  onClick={() => setVolume(volume === 0 ? 0.3 : 0)}
                  variant="ghost"
                  size="sm"
                  className="h-8 w-8"
                >
                  {volume === 0 ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                </Button>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.1"
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="flex-1 h-2 bg-gray-200 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer"
                />
              </div>

              {/* Status */}
              <div className="text-center">
                <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                  isPlaying 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' 
                    : 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                }`}>
                  {isPlaying ? '🎵 Відтворення' : '⏸️ Пауза'}
                </span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}