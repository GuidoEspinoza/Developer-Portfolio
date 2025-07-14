'use client';

import React from 'react';
import SubtleBackground from '../ui/SubtleBackground';
import CyberCursor from '../ui/CyberCursor';
import AdvancedParticles from '../ui/AdvancedParticles';
import ScanlineOverlay from '../ui/ScanlineOverlay';
import DashboardProvider from './DashboardProvider';

interface ClientLayoutProps {
  children: React.ReactNode;
}

const ClientLayout: React.FC<ClientLayoutProps> = ({ children }) => {
  return (
    <DashboardProvider>
      {/* Subtle Background Effect */}
      <SubtleBackground 
        intensity="medium"
        variant="particles"
        interactive={true}
        className="fixed inset-0 z-0" 
      />
      
      {/* Advanced Particles */}
      <AdvancedParticles 
        intensity="medium"
        type="data-stream"
        mouseInteraction={true}
        className="fixed inset-0 z-[2]" 
      />
      
      {/* Scanline Overlay */}
      <ScanlineOverlay 
        density="low"
        speed="slow"
        opacity={0.1}
        className="fixed inset-0 z-[1]" 
      />
      
      {/* Cyber Cursor */}
      <CyberCursor />
      
      {children}
    </DashboardProvider>
  );
};

export default ClientLayout;
