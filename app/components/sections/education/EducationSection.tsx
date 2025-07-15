'use client';

// @flow strict
import Link from "next/link";

import { IoSchoolOutline } from "react-icons/io5";
import { MdDownload, MdVerifiedUser, MdOutlineVerified } from "react-icons/md";
import { UI_TEXT_CONSTANTS } from "@/app/constants/ui-text-constants";

import HologramCard from "../../ui/HologramCard";
import TerminalWindow from "../../ui/TerminalWindow";

const Education = () => {
    return (
        <section id="education" className="relative z-50 my-6 sm:my-8 lg:my-12 xl:my-24 px-2 sm:px-0">
            {/* Cyber Section Divider */}
            <div className="flex justify-center -translate-y-[1px] mb-6 sm:mb-8">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan to-cyber-magenta to-transparent w-full" />
                </div>
            </div>

            {/* Section Header */}
            <div className="flex justify-center mb-6 sm:mb-8">
                <div className="bg-cyber-surface border border-cyber-cyan/50 w-fit text-cyber-cyan p-2 sm:p-3 px-4 sm:px-8 text-lg sm:text-xl rounded-md tracking-wider font-mono backdrop-blur-sm cyber-border glow-cyan">
                    <span className="animate-pulse">&gt;</span> {UI_TEXT_CONSTANTS.educationSectionTitle} <span className="animate-pulse">&lt;</span>
                </div>
            </div>

            <div className="py-4 sm:py-6 lg:py-8">
                <div className="flex flex-col gap-6 sm:gap-8">

                    {/* Education Cards Grid */}
                    <div className="flex justify-center w-full">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 w-full max-w-6xl">
                            {[...UI_TEXT_CONSTANTS.educations]
                                .sort((a, b) => b.id - a.id)
                                .map((education, index) => (
                                <HologramCard key={education.id} className="group">
                                    <div className="relative overflow-hidden">
                                        {/* Header */}
                                        <div className="bg-cyber-surface/50 border-b border-cyber-cyan/30 p-2 sm:p-3">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-2">
                                                    <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-cyber-green animate-pulse"></div>
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
                                        <div className="p-3 sm:p-4">
                                            <div className="flex items-start gap-3 sm:gap-4">
                                                {/* Icon */}
                                                <div className="text-cyber-magenta transition-all duration-300 group-hover:scale-110 group-hover:text-cyber-cyan mt-1 relative flex-shrink-0">
                                                    <IoSchoolOutline size={28} className="sm:hidden" />
                                                    <IoSchoolOutline size={32} className="hidden sm:block" />
                                                    {education.certificado && (
                                                        <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 bg-cyber-green rounded-full animate-pulse"></div>
                                                    )}
                                                </div>

                                                {/* Text Content */}
                                                <div className="flex-1 space-y-3 sm:space-y-4 min-w-0">
                                                    <div>
                                                        <h3 className="text-base sm:text-lg font-bold text-cyber-cyan mb-2 font-mono group-hover:text-cyber-magenta transition-colors duration-300 break-words">
                                                            {education.title}
                                                        </h3>
                                                        <p className="text-gray-300 text-sm mb-3 sm:mb-4 break-words">
                                                            {education.institution}
                                                        </p>
                                                    </div>

                                                    {/* Status Verification */}
                                                    <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-xs font-mono">
                                                        <div className="flex items-center space-x-1">
                                                            <MdVerifiedUser className="text-cyber-green flex-shrink-0" />
                                                            <span className="text-gray-400">VERIFIED</span>
                                                        </div>
                                                        {education.certificado && (
                                                            <div className="flex items-center space-x-1">
                                                                <MdOutlineVerified className="text-cyber-cyan flex-shrink-0" />
                                                                <span className="text-gray-400">CERTIFIED</span>
                                                            </div>
                                                        )}
                                                    </div>

                                                    {/* Certificate Download Button */}
                                                    {education.certificado && education.certificado.trim() !== "" && (
                                                        <div className="pt-2">
                                                            <Link 
                                                                href={education.certificado}
                                                                target="_blank"
                                                                className="inline-flex items-center gap-2 bg-transparent border-2 border-cyber-cyan hover:border-cyber-magenta px-3 sm:px-4 py-2 rounded-md text-cyber-cyan hover:text-cyber-magenta font-mono text-xs font-bold hover:shadow-xl hover:shadow-cyber-cyan/40 transition-all duration-300 hover:scale-105 hover:bg-cyber-cyan/10 group/btn w-full sm:w-auto justify-center sm:justify-start"
                                                            >
                                                                <MdDownload size={16} className="animate-bounce group-hover/btn:animate-pulse flex-shrink-0" />
                                                                <span className="uppercase tracking-wider text-center">{UI_TEXT_CONSTANTS.educationCertificateButton}</span>
                                                            </Link>
                                                        </div>
                                                    )}
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
                    <div className="flex justify-center mt-6 sm:mt-8">
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
                                height="160px sm:200px"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;