'use client';

// @flow strict
import Image from "next/image";
import Link from "next/link";

import { IoSchoolOutline } from "react-icons/io5";
import { MdDownload, MdVerifiedUser, MdOutlineVerified } from "react-icons/md";
import { UI_TEXT_CONSTANTS } from "@/app/constants/ui-text-constants";

import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "@/app/components/ui/AnimationLottie";
import HologramCard from "../../ui/HologramCard";
import GlitchText from "../../ui/GlitchText";
import TerminalWindow from "../../ui/TerminalWindow";

const Education = () => {
    return (
        <section id="education" className="relative z-50 my-12 lg:my-24">
            {/* Cyber Section Divider */}
            <div className="flex justify-center -translate-y-[1px] mb-8">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan to-cyber-magenta to-transparent w-full" />
                </div>
            </div>

            {/* Section Header */}
            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <div className="w-24 h-[2px] bg-gradient-to-r from-transparent to-cyber-cyan"></div>
                    <div className="bg-cyber-surface border border-cyber-cyan/50 w-fit text-cyber-cyan p-3 px-6 text-xl rounded-md tracking-wider font-mono backdrop-blur-sm mx-4">
                        <span className="animate-pulse text-cyber-green">[</span>
                        <GlitchText text={UI_TEXT_CONSTANTS.educationSectionTitle} className="mx-2" />
                        <span className="animate-pulse text-cyber-green">]</span>
                    </div>
                    <div className="w-24 h-[2px] bg-gradient-to-l from-transparent to-cyber-magenta"></div>
                </div>
            </div>

            <div className="py-8">
                <div className="flex flex-col gap-8">
                    {/* Animation Section */}
                    <div className="flex justify-center items-start">
                        <HologramCard className="p-6 w-fit">
                            <div className="relative">
                                <div className="w-64 h-64 relative">
                                    <AnimationLottie animationPath={lottieFile} />
                                    
                                    {/* Overlay scan effect */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-cyan/5 to-transparent opacity-70 animate-pulse"></div>
                                </div>
                                
                                {/* Info Display */}
                                <div className="mt-4 p-3 bg-cyber-surface/50 rounded border border-cyber-cyan/30">
                                    <div className="font-mono text-xs text-center space-y-1">
                                        <div className="text-cyber-cyan">EDUCATION_SYSTEM.exe</div>
                                        <div className="text-gray-400">Status: <span className="text-cyber-green">ACTIVE</span></div>
                                        <div className="text-gray-400">Records: <span className="text-cyber-magenta">{UI_TEXT_CONSTANTS.educations.length}</span></div>
                                    </div>
                                </div>
                            </div>
                        </HologramCard>
                    </div>

                    {/* Education Cards Grid */}
                    <div className="flex justify-center w-full">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-6xl">
                            {UI_TEXT_CONSTANTS.educations.map((education, index) => (
                                <HologramCard key={education.id} className="group">
                                    <div className="relative overflow-hidden">
                                        {/* Header */}
                                        <div className="bg-cyber-surface/50 border-b border-cyber-cyan/30 p-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-3 h-3 rounded-full bg-cyber-green animate-pulse"></div>
                                                    <span className="font-mono text-xs text-cyber-cyan">
                                                        CERT_{String(index + 1).padStart(2, '0')}
                                                    </span>
                                                </div>
                                                <div className="font-mono text-xs text-cyber-green">
                                                    {education.duration}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="p-4">
                                            <div className="flex items-start gap-4">
                                                {/* Icon */}
                                                <div className="text-cyber-magenta transition-all duration-300 group-hover:scale-110 group-hover:text-cyber-cyan mt-1 relative">
                                                    <IoSchoolOutline size={32} />
                                                    {education.certificado && (
                                                        <div className="absolute -top-1 -right-1 w-3 h-3 bg-cyber-green rounded-full animate-pulse"></div>
                                                    )}
                                                </div>

                                                {/* Text Content */}
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-bold text-cyber-cyan mb-2 font-mono group-hover:text-cyber-magenta transition-colors duration-300">
                                                        {education.title}
                                                    </h3>
                                                    <p className="text-gray-300 text-sm mb-4">
                                                        {education.institution}
                                                    </p>

                                                    {/* Status and Certificate */}
                                                    <div className="space-y-3">
                                                        <div className="flex items-center space-x-4 text-xs font-mono">
                                                            <div className="flex items-center space-x-1">
                                                                <MdVerifiedUser className="text-cyber-green" />
                                                                <span className="text-gray-400">VERIFIED</span>
                                                            </div>
                                                            {education.certificado && (
                                                                <div className="flex items-center space-x-1">
                                                                    <MdOutlineVerified className="text-cyber-cyan" />
                                                                    <span className="text-gray-400">CERTIFIED</span>
                                                                </div>
                                                            )}
                                                        </div>

                                                        {/* Certificate Download Button */}
                                                        {education.certificado && (
                                                            <Link 
                                                                href={education.certificado}
                                                                target="_blank"
                                                                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyber-cyan to-cyber-magenta px-4 py-2 rounded-md text-black font-mono text-sm font-bold hover:shadow-lg hover:shadow-cyber-cyan/25 transition-all duration-300 group-hover:scale-105"
                                                            >
                                                                <MdDownload size={16} />
                                                                <span>{UI_TEXT_CONSTANTS.educationCertificateButton}</span>
                                                            </Link>
                                                        )}
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

                    {/* Summary Terminal */}
                    <div className="flex justify-center mt-8">
                        <div className="w-full max-w-2xl">
                            <TerminalWindow 
                                title="education_summary.log"
                                lines={[
                                    { id: '1', content: '$ analyze_education_data', type: 'command' },
                                    { id: '2', content: 'Scanning educational records...', type: 'output', delay: 500 },
                                    { id: '3', content: `Total certifications: ${UI_TEXT_CONSTANTS.educations.length}`, type: 'success', delay: 1000 },
                                    { id: '4', content: `Verified credentials: ${UI_TEXT_CONSTANTS.educations.filter(e => e.certificado).length}`, type: 'success', delay: 1500 },
                                    { id: '5', content: 'Learning status: CONTINUOUS_IMPROVEMENT', type: 'success', delay: 2000 }
                                ]}
                                autoType={true}
                                height="200px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;