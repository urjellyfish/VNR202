// src/components/AudioPlayer.jsx
import React, { useEffect, useRef } from 'react';

export default function AudioPlayer({ soundEnabled, triggerSlideChange }) {
  const audioCtxRef = useRef(null);

  // Play subtle sound effect on slide change using Web Audio API
  useEffect(() => {
    if (!soundEnabled || !triggerSlideChange) return;

    try {
      if (!audioCtxRef.current) {
        audioCtxRef.current = new (window.AudioContext || window.webkitAudioContext)();
      }

      const ctx = audioCtxRef.current;
      if (ctx.state === 'suspended') {
        ctx.resume();
      }

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.05, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.08);
    } catch (e) {
      // Ignore audio context autoplay restrictions
    }
  }, [triggerSlideChange, soundEnabled]);

  return null;
}
