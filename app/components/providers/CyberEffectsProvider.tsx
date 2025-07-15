'use client';

import React from 'react';
import SubtleBackground from '../ui/SubtleBackground';
import AdvancedParticles from '../ui/AdvancedParticles';
import ScanlineOverlay from '../ui/ScanlineOverlay';

const CyberEffectsProvider: React.FC = () => {
  return (
    <>
      {/* Subtle Background Effect */}
      <SubtleBackground 
        intensity="medium"
        variant="particles"
        interactive={true}
        className="fixed inset-0 z-[-1]" 
      />
      
      {/* Advanced Particles */}
      <AdvancedParticles 
        intensity="medium"
        type="data-stream"
        mouseInteraction={true}
        className="fixed inset-0 z-[1]" 
      />
      
      {/* Scanline Overlay */}
      <ScanlineOverlay 
        density="low"
        speed="slow"
        opacity={0.1}
        className="fixed inset-0 z-[2]" 
      />
    </>
  );
};

export default CyberEffectsProvider;
