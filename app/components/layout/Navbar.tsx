'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";
import { navigationLinks } from '@/app/constants/navigation';
import { UI_TEXT_CONSTANTS } from '@/app/constants/ui-text-constants';

const Navbar = () => {
    const [activeSection, setActiveSection] = useState('');
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
        e.preventDefault();
        
        if (targetId === '#home') {
            window.scrollTo({ top: 0, behavior: 'smooth' });
            return;
        }

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerHeight = 100; // Altura del header fijo
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
            isScrolled ? 'backdrop-blur-md' : ''
        }`}>
            {/* Holographic Panel Container */}
            <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
                <div className="relative">
                    {/* Holographic Panel Background */}
                    <div className={`
                        relative mt-4 mx-4 
                        bg-gradient-to-r from-black/20 via-cyber-surface/40 to-black/20
                        backdrop-blur-xl
                        border border-cyber-cyan/30
                        rounded-lg
                        transition-all duration-500
                        ${isScrolled ? 'shadow-lg shadow-cyber-cyan/20' : ''}
                    `}>
                        {/* Corner Indicators */}
                        <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-cyber-cyan"></div>
                        <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-cyber-cyan"></div>
                        <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-cyber-cyan"></div>
                        <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-cyber-cyan"></div>

                        {/* Connection Lines */}
                        <div className="absolute -top-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-60"></div>
                        <div className="absolute -bottom-px left-4 right-4 h-px bg-gradient-to-r from-transparent via-cyber-magenta to-transparent opacity-60"></div>

                        {/* Navigation Content */}
                        <nav className="relative flex items-center justify-between py-4 px-6" 
                             aria-label={UI_TEXT_CONSTANTS.ariaLabelNavigation} 
                             role="navigation">
                            
                            {/* Logo/Brand */}
                            <div className="flex flex-shrink-0 items-center">
                                <Link
                                    href="/"
                                    onClick={(e) => handleSmoothScroll(e, '#home')}
                                    className="group relative"
                                >
                                    <div className="relative">
                                        <span className="text-cyber-cyan text-2xl lg:text-3xl font-bold font-mono tracking-wider
                                                       transition-all duration-300 group-hover:text-white
                                                       group-hover:drop-shadow-[0_0_10px_#00ffff]">
                                            {UI_TEXT_CONSTANTS.personalNameUpper}
                                        </span>
                                        {/* Holographic Glow Effect */}
                                        <div className="absolute inset-0 text-cyber-cyan text-2xl lg:text-3xl font-bold font-mono tracking-wider
                                                      opacity-0 group-hover:opacity-30 transition-opacity duration-300
                                                      blur-sm">
                                            {UI_TEXT_CONSTANTS.personalNameUpper}
                                        </div>
                                    </div>
                                    
                                    {/* Status Indicator */}
                                    <div className="absolute -top-1 -right-2 flex items-center space-x-1">
                                        <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                                        <span className="text-xs text-cyber-green font-mono opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            ONLINE
                                        </span>
                                    </div>
                                </Link>
                            </div>

                            {/* Navigation Links */}
                            <ul className="hidden md:flex items-center space-x-1">
                                {navigationLinks.map((link) => (
                                    <li key={link.path} className="relative">
                                        <Link 
                                            href={link.path}
                                            onClick={(e) => handleSmoothScroll(e, link.path)}
                                            className="group relative block px-4 py-2 no-underline outline-none"
                                        >
                                            {/* Holographic Button Background */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/5 to-transparent
                                                          opacity-0 group-hover:opacity-100 transition-all duration-300
                                                          border border-transparent group-hover:border-cyber-cyan/30
                                                          rounded backdrop-blur-sm"></div>
                                            
                                            {/* Link Text */}
                                            <span className="relative text-sm font-mono tracking-wide text-white/80
                                                           transition-all duration-300 
                                                           group-hover:text-cyber-cyan
                                                           group-hover:drop-shadow-[0_0_8px_#00ffff]">
                                                {link.name.toUpperCase()}
                                            </span>

                                            {/* Scan Line Effect */}
                                            <div className="absolute bottom-0 left-0 h-px w-0 bg-gradient-to-r from-cyber-cyan to-cyber-magenta
                                                          group-hover:w-full transition-all duration-500"></div>
                                            
                                            {/* Corner Brackets */}
                                            <div className="absolute top-1 left-1 w-1 h-1 border-t border-l border-cyber-cyan
                                                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <div className="absolute top-1 right-1 w-1 h-1 border-t border-r border-cyber-cyan
                                                          opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Mobile Menu Button */}
                            <div className="md:hidden">
                                <button className="group relative p-2">
                                    <div className="flex flex-col space-y-1">
                                        <div className="w-6 h-0.5 bg-cyber-cyan transition-all duration-300 group-hover:bg-cyber-magenta"></div>
                                        <div className="w-6 h-0.5 bg-cyber-cyan transition-all duration-300 group-hover:bg-cyber-magenta"></div>
                                        <div className="w-6 h-0.5 bg-cyber-cyan transition-all duration-300 group-hover:bg-cyber-magenta"></div>
                                    </div>
                                </button>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
