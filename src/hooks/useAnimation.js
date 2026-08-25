import { useState, useCallback } from 'react';

export default function useAnimation(initialPlaying = true) {
  const [isPlaying, setIsPlaying] = useState(initialPlaying);
  const [speed, setSpeed] = useState('normal'); // slow | normal | fast

  const toggle = useCallback(() => setIsPlaying((prev) => !prev), []);
  const play = useCallback(() => setIsPlaying(true), []);
  const pause = useCallback(() => setIsPlaying(false), []);

  return { isPlaying, toggle, play, pause, speed, setSpeed };
}
