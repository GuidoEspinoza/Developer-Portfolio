'use client'
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { HiOutlineTerminal } from "react-icons/hi";
import experience from '@/app/assets/lottie/code.json'
import AnimationLottie from "@/app/components/ui/AnimationLottie";
import HologramCard from "../../ui/HologramCard";
import GlitchText from "../../ui/GlitchText";
import TerminalWindow from "../../ui/TerminalWindow";
import { UI_TEXT_CONSTANTS } from "@/app/constants/ui-text-constants";

const Experience = () => {
    return (
        <section id="experience" className="relative z-50 my-6 sm:my-8 lg:my-12 xl:my-24 px-2 sm:px-0">
            {/* Cyber Section Header */}
            <div className="flex justify-center mb-6 sm:mb-8">
                <div className="bg-cyber-surface border border-cyber-cyan/50 w-fit text-cyber-cyan p-2 sm:p-3 px-4 sm:px-8 text-lg sm:text-xl rounded-md tracking-wider font-mono backdrop-blur-sm cyber-border glow-cyan">
                    <span className="animate-pulse">&gt;</span> {UI_TEXT_CONSTANTS.experienceSectionTitle} <span className="animate-pulse">&lt;</span>
                </div>
            </div>

            <div className="py-4 sm:py-6 lg:py-8">
                {/* Terminal Introduction */}
                <div className="mb-8 sm:mb-10 lg:mb-12">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                        <TerminalWindow 
                            title="mission_logs.exe"
                            className="w-full"
                            lines={[
                                { id: '1', content: '$ access_experience_database', type: 'command' },
                                { id: '2', content: 'Loading professional timeline...', type: 'output', delay: 500 },
                                { id: '3', content: '[SUCCESS] Database connected successfully.', type: 'success', delay: 1000 },
                                { id: '4', content: `[SUCCESS] Records found: ${UI_TEXT_CONSTANTS.experiences.length}`, type: 'success', delay: 1500 }
                            ]}
                            autoType={true}
                            height="250px sm:300px"
                        />
                        
                        <HologramCard className="p-4 sm:p-6 cyber-border glow-cyan">
                            <div className="font-mono text-xs sm:text-sm space-y-2">
                                <div className="text-cyber-cyan text-base sm:text-lg mb-3 sm:mb-4">$ experience --summary</div>
                                <div className="text-gray-300">Total missions: <span className="text-cyber-green font-bold">{UI_TEXT_CONSTANTS.experiences.length}</span></div>
                                <div className="text-gray-300">Status: <span className="text-cyber-green font-bold animate-pulse">ACTIVE_DEVELOPER</span></div>
                                <div className="text-gray-300">Specialization: <span className="text-cyber-magenta font-bold">E-COMMERCE_SOLUTIONS</span></div>
                                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent my-3 sm:my-4"></div>
                                <div className="text-xs text-gray-400">Authenticated • Security Level: FRONTEND_EXPERT</div>
                            </div>
                        </HologramCard>
                    </div>
                </div>

                {/* Experience Cards Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
                    {UI_TEXT_CONSTANTS.experiences.map((exp, index) => (
                        <HologramCard key={exp.id} className="p-0 overflow-hidden group">
                            <div className="relative">
                                {/* Header Bar */}
                                <div className="bg-cyber-surface/50 border-b border-cyber-cyan/30 p-2 sm:p-3">
                                    <div className="flex items-center justify-between gap-2">
                                        <div className="flex items-center space-x-2 flex-shrink-0">
                                            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyber-green animate-pulse"></div>
                                            <span className="font-mono text-xs text-cyber-cyan">
                                                MISSION_{String(index + 1).padStart(2, '0')}
                                            </span>
                                        </div>
                                        <div className="font-mono text-xs text-cyber-green text-right min-w-0 flex-shrink-0">
                                            {exp.duration}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-3 sm:p-4">
                                    <div className="flex items-start gap-3 sm:gap-4">
                                        {/* Icon */}
                                        <div className="text-cyber-magenta transition-all duration-300 group-hover:scale-110 group-hover:text-cyber-cyan mt-1">
                                            <HiOutlineTerminal size={24} className="sm:hidden" />
                                            <HiOutlineTerminal size={28} className="hidden sm:block" />
                                        </div>

                                        {/* Text Content */}
                                        <div className="flex-1 min-w-0">
                                            <h3 className="text-base sm:text-lg font-bold text-cyber-cyan mb-1 font-mono group-hover:text-cyber-magenta transition-colors duration-300 break-words">
                                                {exp.title}
                                            </h3>
                                            <p className="text-gray-300 text-sm mb-2 sm:mb-3 break-words">
                                                {exp.company}
                                            </p>

                                            {/* Status Verification */}
                                            <div className="flex items-center gap-2 text-xs font-mono flex-wrap">
                                                <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-cyber-green rounded-full animate-pulse flex-shrink-0"></div>
                                                <span className="text-cyber-green flex-shrink-0">VERIFIED</span>
                                                <div className="flex-1 h-px bg-gradient-to-r from-cyber-green/50 to-transparent min-w-[20px]"></div>
                                                <span className="text-gray-400 text-xs break-words text-right">{exp.duration}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Bottom Scan Line */}
                                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyber-cyan to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            </div>
                        </HologramCard>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;