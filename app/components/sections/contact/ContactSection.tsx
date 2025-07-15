'use client';

// @flow strict
import Link from 'next/link';
import { BiLogoLinkedin } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { IoLogoGithub } from "react-icons/io";
import { MdAlternateEmail, MdSignalWifi4Bar } from "react-icons/md";
import { HiOutlineTerminal } from "react-icons/hi";
import ContactForm from './FormContactSection';
import { UI_TEXT_CONSTANTS } from "@/app/constants/ui-text-constants";
import HologramCard from "../../ui/HologramCard";
import GlitchText from "../../ui/GlitchText";
import TerminalWindow from "../../ui/TerminalWindow";

function ContactSection() {
    return (
        <section id="contact" className="my-6 sm:my-8 lg:my-12 xl:my-16 relative mt-12 sm:mt-16 lg:mt-24 text-white px-2 sm:px-0">
            <div className="flex justify-center mb-6 sm:mb-8">
                <div className="bg-cyber-surface border border-cyber-cyan/50 w-fit text-cyber-cyan p-2 sm:p-3 px-4 sm:px-8 text-lg sm:text-xl rounded-md tracking-wider font-mono backdrop-blur-sm cyber-border glow-cyan">
                    <span className="animate-pulse">&gt;</span> {UI_TEXT_CONSTANTS.contactSectionTitle} <span className="animate-pulse">&lt;</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-start">
                {/* Contact Form */}
                <HologramCard className="order-2 lg:order-1 mt-4 sm:mt-6 lg:mt-0">
                    <div className="p-4 sm:p-6">
                        <div className="mb-4 sm:mb-6">
                            <GlitchText 
                                text="ESTABLISH_CONNECTION" 
                                className="text-lg sm:text-xl font-bold text-cyber-cyan font-mono mb-2"
                            />
                            <div className="w-full h-px bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-transparent mb-3 sm:mb-4"></div>
                            <div className="font-mono text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4 break-words">
                                <span className="text-cyber-green">user@contact:~$</span> 
                                <span className="text-cyber-cyan ml-2">init_secure_channel</span>
                            </div>
                        </div>
                        <ContactForm />
                    </div>
                </HologramCard>

                {/* Contact Info */}
                <div className="lg:w-full order-1 lg:order-2">
                    {/* Status Panel */}
                    <HologramCard className="mb-4 sm:mb-6">
                        <div className="p-4 sm:p-6">
                            <div className="flex items-center justify-between mb-3 sm:mb-4">
                                <GlitchText 
                                    text="CONNECTION_STATUS" 
                                    className="text-base sm:text-lg font-bold text-cyber-cyan font-mono"
                                />
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 sm:w-3 sm:h-3 bg-cyber-green rounded-full animate-pulse"></div>
                                    <span className="font-mono text-xs text-cyber-green">ONLINE</span>
                                </div>
                            </div>
                            
                            <div className="space-y-3 sm:space-y-4">
                                {/* Email */}
                                <div className="flex items-center gap-3 sm:gap-4 p-3 bg-cyber-surface/30 rounded border border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-colors duration-300 group">
                                    <div className="bg-cyber-cyan/20 p-2 rounded-full group-hover:bg-cyber-cyan/30 transition-colors duration-300 flex-shrink-0">
                                        <MdAlternateEmail className="text-cyber-cyan sm:hidden" size={20} />
                                        <MdAlternateEmail className="text-cyber-cyan hidden sm:block" size={24} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-mono text-xs text-gray-400 mb-1">EMAIL_PROTOCOL</div>
                                        <a 
                                            href={UI_TEXT_CONSTANTS.socialLinks.emailHref}
                                            className="text-cyber-cyan hover:text-cyber-magenta transition-colors duration-300 font-mono text-sm break-all"
                                        >
                                            {UI_TEXT_CONSTANTS.socialLinks.email}
                                        </a>
                                    </div>
                                    <MdSignalWifi4Bar className="text-cyber-green animate-pulse flex-shrink-0" size={16} />
                                </div>

                                {/* Location */}
                                <div className="flex items-center gap-3 sm:gap-4 p-3 bg-cyber-surface/30 rounded border border-cyber-cyan/20 hover:border-cyber-cyan/50 transition-colors duration-300 group">
                                    <div className="bg-cyber-cyan/20 p-2 rounded-full group-hover:bg-cyber-cyan/30 transition-colors duration-300 flex-shrink-0">
                                        <CiLocationOn className="text-cyber-cyan sm:hidden" size={20} />
                                        <CiLocationOn className="text-cyber-cyan hidden sm:block" size={24} />
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <div className="font-mono text-xs text-gray-400 mb-1">LOCATION_DATA</div>
                                        <span className="text-gray-300 font-mono text-sm break-words">
                                            {UI_TEXT_CONSTANTS.personalLocation}
                                        </span>
                                    </div>
                                    <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse flex-shrink-0"></div>
                                </div>
                            </div>
                        </div>
                    </HologramCard>

                    {/* Social Networks */}
                    <HologramCard>
                        <div className="p-4 sm:p-6">
                            <div className="mb-3 sm:mb-4">
                                <GlitchText 
                                    text="SOCIAL_NETWORKS" 
                                    className="text-base sm:text-lg font-bold text-cyber-cyan font-mono mb-2"
                                />
                                <div className="w-full h-px bg-gradient-to-r from-cyber-cyan via-cyber-magenta to-transparent"></div>
                            </div>

                            <div className="flex items-center gap-4 sm:gap-6 justify-center">
                                <Link 
                                    target="_blank" 
                                    aria-label={UI_TEXT_CONSTANTS.ariaLabelGitHub} 
                                    href={UI_TEXT_CONSTANTS.socialLinks.github}
                                    className="group"
                                >
                                    <div className="relative">
                                        <div className="bg-cyber-surface border border-cyber-cyan/50 p-3 sm:p-4 rounded-lg hover:border-cyber-magenta hover:shadow-lg hover:shadow-cyber-cyan/25 transition-all duration-300 group-hover:scale-110">
                                            <IoLogoGithub className="text-cyber-cyan group-hover:text-cyber-magenta transition-colors duration-300 sm:hidden" size={28} />
                                            <IoLogoGithub className="text-cyber-cyan group-hover:text-cyber-magenta transition-colors duration-300 hidden sm:block" size={32} />
                                        </div>
                                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 font-mono text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                            GITHUB
                                        </div>
                                    </div>
                                </Link>

                                <Link 
                                    target="_blank" 
                                    aria-label={UI_TEXT_CONSTANTS.ariaLabelLinkedIn} 
                                    href={UI_TEXT_CONSTANTS.socialLinks.linkedin}
                                    className="group"
                                >
                                    <div className="relative">
                                        <div className="bg-cyber-surface border border-cyber-cyan/50 p-3 sm:p-4 rounded-lg hover:border-cyber-magenta hover:shadow-lg hover:shadow-cyber-cyan/25 transition-all duration-300 group-hover:scale-110">
                                            <BiLogoLinkedin className="text-cyber-cyan group-hover:text-cyber-magenta transition-colors duration-300 sm:hidden" size={28} />
                                            <BiLogoLinkedin className="text-cyber-cyan group-hover:text-cyber-magenta transition-colors duration-300 hidden sm:block" size={32} />
                                        </div>
                                        <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 font-mono text-xs text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                                            LINKEDIN
                                        </div>
                                    </div>
                                </Link>
                            </div>

                            {/* Terminal Status */}
                            <div className="mt-4 sm:mt-6 p-3 bg-black/30 rounded border border-cyber-cyan/20">
                                <div className="font-mono text-xs space-y-1">
                                    <div className="text-cyber-green break-words">$ social_status --check</div>
                                    <div className="text-gray-400">GitHub: <span className="text-cyber-green">ACTIVE</span></div>
                                    <div className="text-gray-400">LinkedIn: <span className="text-cyber-green">ACTIVE</span></div>
                                    <div className="text-gray-400">Response time: <span className="text-cyber-cyan">&lt; 24h</span></div>
                                </div>
                            </div>
                        </div>
                    </HologramCard>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;