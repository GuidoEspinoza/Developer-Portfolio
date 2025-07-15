'use client';

import { useState, useEffect, useCallback } from 'react';

interface AudioConfig {
  enabled: boolean;
  volume: number;
  ambientSound: boolean;
  clickSounds: boolean;
  hoverSounds: boolean;
}

export const useCyberAudio = () => {
  const [config, setConfig] = useState<AudioConfig>({
    enabled: false, // Disabled by default para no ser intrusivo
    volume: 0.3,
    ambientSound: false,
    clickSounds: true,
    hoverSounds: false
  });

  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    if (config.enabled && typeof window !== 'undefined') {
      const context = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      setAudioContext(context);
      
      return () => {
        context.close();
      };
    }
  }, [config.enabled]);

  // Crear sonidos sintéticos cyberpunk
  const playTone = useCallback((frequency: number, duration: number, type: OscillatorType = 'sine') => {
    if (!audioContext || !config.enabled) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = type;

    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(config.volume * 0.1, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + duration);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration);
  }, [audioContext, config]);

  // Sonidos específicos
  const playClickSound = useCallback(() => {
    if (config.clickSounds) {
      playTone(800, 0.1, 'square');
      setTimeout(() => playTone(600, 0.05, 'square'), 50);
    }
  }, [config.clickSounds, playTone]);

  const playHoverSound = useCallback(() => {
    if (config.hoverSounds) {
      playTone(400, 0.1, 'sine');
    }
  }, [config.hoverSounds, playTone]);

  const playSuccessSound = useCallback(() => {
    if (config.enabled) {
      playTone(523, 0.2, 'sine'); // C5
      setTimeout(() => playTone(659, 0.2, 'sine'), 100); // E5
      setTimeout(() => playTone(784, 0.3, 'sine'), 200); // G5
    }
  }, [config.enabled, playTone]);

  const playErrorSound = useCallback(() => {
    if (config.enabled) {
      playTone(200, 0.3, 'sawtooth');
      setTimeout(() => playTone(150, 0.2, 'sawtooth'), 150);
    }
  }, [config.enabled, playTone]);

  const toggleAudio = useCallback(() => {
    setConfig(prev => ({ ...prev, enabled: !prev.enabled }));
  }, []);

  const updateConfig = useCallback((newConfig: Partial<AudioConfig>) => {
    setConfig(prev => ({ ...prev, ...newConfig }));
  }, []);

  return {
    config,
    playClickSound,
    playHoverSound,
    playSuccessSound,
    playErrorSound,
    toggleAudio,
    updateConfig
  };
};

export default useCyberAudio;
