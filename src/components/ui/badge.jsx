import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';

export default function AudioPlayer() {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3");
    audio.loop = true;
    audio.volume = 0.3;
    audio.muted = true;
    audioRef.current = audio;
    return () => {
      if (audioRef.current) { audioRef.current.pause(); audioRef.current = null; }
    };
  }, []);

  const toggleMute = () => {
    if (audioRef.current) {
      if (isMuted) { audioRef.current.muted = false; audioRef.current.play().catch(() => { }); }
      else { audioRef.current.muted = true; }
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      onClick={toggleMute}
      className="fixed top-6 right-6 z-50 w-11 h-11 rounded-full border border-primary/30 flex items-center justify-center transition-colors hover:bg-primary/10"
      style={{ background: 'hsl(345 52% 13%)', backdropFilter: 'blur(8px)' }}
      aria-label={isMuted ? "Unmute background music" : "Mute background music"}
    >
      {isMuted ? <VolumeX className="w-4 h-4 text-primary" /> : <Volume2 className="w-4 h-4 text-primary" />}
    </motion.button>
  );
}