'use client';

import Image from "next/image";
import { UI_TEXT_CONSTANTS } from "@/app/constants/ui-text-constants";
import HologramCard from "../../ui/HologramCard";
import GlitchText from "../../ui/GlitchText";

const AboutSection = () => {
    return (
        <section id="about" className="relative my-8 sm:my-12 lg:my-16 px-2 sm:px-0">
            {/* Cyber Section Header - Centered */}
            <div className="flex justify-center mb-6 sm:mb-8">
                <div className="bg-cyber-surface border border-cyber-cyan/50 w-fit text-cyber-cyan p-2 sm:p-3 px-4 sm:px-8 text-base sm:text-lg md:text-xl rounded-md tracking-wider font-mono backdrop-blur-sm cyber-border glow-cyan">
                    <span className="animate-pulse">&gt;</span> {UI_TEXT_CONSTANTS.aboutSectionTitle} <span className="animate-pulse">&lt;</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 my-5 lg:py-8 max-w-7xl mx-auto">
                {/* Profile Content */}
                <div className="order-2 lg:order-1">
                    <HologramCard className="p-4 sm:p-6 mx-2 sm:mx-0">
                        <div className="mb-4 sm:mb-6">
                            <GlitchText 
                                text={UI_TEXT_CONSTANTS.aboutWhoAmI}
                                className="font-bold text-lg sm:text-xl text-cyber-cyan mb-3 sm:mb-4 font-mono uppercase tracking-wider"
                            />
                            <div className="w-full h-px bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-transparent mb-3 sm:mb-4"></div>
                        </div>

                        {/* Bio Text with Terminal Style */}
                        <div className="space-y-3 sm:space-y-4">
                            <div className="font-mono text-xs sm:text-sm">
                                <span className="text-cyber-green">user@portfolio:~$</span> 
                                <span className="text-cyber-cyan ml-2">cat developer_bio.txt</span>
                            </div>
                            
                            <div className="border-l-2 border-cyber-cyan/30 pl-3 sm:pl-4 space-y-3">
                                <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                                    {UI_TEXT_CONSTANTS.aboutDescription1}
                                </p>
                                <p className="text-gray-300 text-xs sm:text-sm lg:text-base leading-relaxed">
                                    {UI_TEXT_CONSTANTS.aboutDescription2}
                                </p>
                            </div>

                            {/* Status Indicators */}
                            <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-4 sm:mt-6 p-3 sm:p-4 bg-black/20 rounded border border-cyber-cyan/20">
                                <div className="text-center">
                                    <div className="text-cyber-green text-sm sm:text-lg font-mono">ONLINE</div>
                                    <div className="text-xs text-gray-400">Status</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-cyber-magenta text-sm sm:text-lg font-mono">ACTIVE</div>
                                    <div className="text-xs text-gray-400">Mode</div>
                                </div>
                            </div>
                        </div>
                    </HologramCard>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center items-start order-1 lg:order-2">
                    <HologramCard className="p-3 sm:p-4 w-fit mx-2 sm:mx-0">
                        <div className="relative group">
                            {/* Cyber Frame */}
                            <div className="absolute -inset-1 sm:-inset-2 border border-cyber-cyan/50 rounded-lg animate-pulse group-hover:border-cyber-magenta/70 transition-colors duration-300"></div>
                            <div className="absolute -inset-0.5 sm:-inset-1 border border-cyber-cyan/20 rounded-lg group-hover:border-cyber-magenta/40 transition-colors duration-300"></div>
                            
                            <Image
                                src={UI_TEXT_CONSTANTS.socialLinks.profileImage}
                                width={280}
                                height={280}
                                alt={UI_TEXT_CONSTANTS.personalName}
                                className="rounded-lg transition-all duration-500 filter contrast-125 brightness-110 hover:brightness-125 hover:scale-105 cursor-pointer w-[200px] h-[200px] sm:w-[240px] sm:h-[240px] lg:w-[280px] lg:h-[280px] relative z-10 object-cover"
                                style={{
                                    filter: 'drop-shadow(0 0 15px rgba(0, 255, 255, 0.3))'
                                }}
                            />
                            
                            {/* Scan Lines Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                            
                            {/* Corner Brackets */}
                            <div className="absolute top-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-t-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-t-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 w-3 h-3 sm:w-4 sm:h-4 border-l-2 border-b-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 border-r-2 border-b-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </HologramCard>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;