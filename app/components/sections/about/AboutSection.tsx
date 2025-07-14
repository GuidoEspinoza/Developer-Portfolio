'use client';

import Image from "next/image";
import { UI_TEXT_CONSTANTS } from "@/app/constants/ui-text-constants";
import HologramCard from "../../ui/HologramCard";
import GlitchText from "../../ui/GlitchText";

const AboutSection = () => {
    return (
        <section id="about" className="relative my-12 lg:my-16">
            {/* Cyber Section Header */}
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8 my-5 lg:py-8">
                <div className="bg-cyber-surface border border-cyber-cyan/50 w-fit text-cyber-cyan rotate-90 p-2 px-5 text-xl rounded-md tracking-wider font-mono backdrop-blur-sm">
                    <span className="animate-pulse">&gt;</span> {UI_TEXT_CONSTANTS.aboutSectionTitle}
                </div>
                <div className="h-36 w-[2px] bg-gradient-to-b from-cyber-cyan via-cyber-magenta to-transparent"></div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 my-5 lg:py-8">
                {/* Profile Content */}
                <div className="order-2 lg:order-1">
                    <HologramCard className="p-6">
                        <div className="mb-6">
                            <GlitchText 
                                text={UI_TEXT_CONSTANTS.aboutWhoAmI}
                                className="font-bold text-xl text-cyber-cyan mb-4 font-mono uppercase tracking-wider"
                            />
                            <div className="w-full h-px bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-transparent mb-4"></div>
                        </div>

                        {/* Bio Text with Terminal Style */}
                        <div className="space-y-4">
                            <div className="font-mono text-sm">
                                <span className="text-cyber-green">user@portfolio:~$</span> 
                                <span className="text-cyber-cyan ml-2">cat developer_bio.txt</span>
                            </div>
                            
                            <div className="border-l-2 border-cyber-cyan/30 pl-4 space-y-3">
                                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                                    {UI_TEXT_CONSTANTS.aboutDescription1}
                                </p>
                                <p className="text-gray-300 text-sm lg:text-base leading-relaxed">
                                    {UI_TEXT_CONSTANTS.aboutDescription2}
                                </p>
                            </div>

                            {/* Status Indicators */}
                            <div className="grid grid-cols-2 gap-4 mt-6 p-4 bg-black/20 rounded border border-cyber-cyan/20">
                                <div className="text-center">
                                    <div className="text-cyber-green text-lg font-mono">ONLINE</div>
                                    <div className="text-xs text-gray-400">Status</div>
                                </div>
                                <div className="text-center">
                                    <div className="text-cyber-magenta text-lg font-mono">ACTIVE</div>
                                    <div className="text-xs text-gray-400">Mode</div>
                                </div>
                            </div>
                        </div>
                    </HologramCard>
                </div>

                {/* Profile Image */}
                <div className="flex justify-center order-1 lg:order-2">
                    <HologramCard className="p-4 w-fit">
                        <div className="relative group">
                            {/* Cyber Frame */}
                            <div className="absolute -inset-2 border border-cyber-cyan/50 rounded-lg animate-pulse group-hover:border-cyber-magenta/70 transition-colors duration-300"></div>
                            <div className="absolute -inset-1 border border-cyber-cyan/20 rounded-lg group-hover:border-cyber-magenta/40 transition-colors duration-300"></div>
                            
                            <Image
                                src={UI_TEXT_CONSTANTS.socialLinks.profileImage}
                                width={280}
                                height={280}
                                alt={UI_TEXT_CONSTANTS.personalName}
                                className="rounded-lg transition-all duration-500 filter contrast-125 brightness-110 hover:brightness-125 hover:scale-105 cursor-pointer w-[280px] h-[280px] relative z-10"
                                style={{
                                    filter: 'drop-shadow(0 0 20px rgba(0, 255, 255, 0.3))'
                                }}
                            />
                            
                            {/* Scan Lines Effect */}
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg pointer-events-none"></div>
                            
                            {/* Corner Brackets */}
                            <div className="absolute top-0 left-0 w-4 h-4 border-l-2 border-t-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute top-0 right-0 w-4 h-4 border-r-2 border-t-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 left-0 w-4 h-4 border-l-2 border-b-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            <div className="absolute bottom-0 right-0 w-4 h-4 border-r-2 border-b-2 border-cyber-cyan opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>
                    </HologramCard>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;