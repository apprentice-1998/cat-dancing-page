import { useState, useCallback } from 'react';

export function useAnimation() {
  const [isPlaying, setIsPlaying] = useState(true);
  const [danceStyle, setDanceStyle] = useState('bounce');

  const toggle = useCallback(() => {
    setIsPlaying(prev => !prev);
  }, []);

  const changeDance = useCallback((style) => {
    setDanceStyle(style);
  }, []);

  return { isPlaying, toggle, danceStyle, changeDance };
}
