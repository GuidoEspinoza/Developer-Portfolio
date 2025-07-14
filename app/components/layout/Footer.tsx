'use client';

import Link from 'next/link';
import { UI_TEXT_CONSTANTS } from "@/app/constants/ui-text-constants";
import GlitchText from "../ui/GlitchText";

function Footer() {
    const currentYear = new Date().getFullYear();
    
    return (
        <footer className="relative border-t bg-cyber-background border-cyber-cyan/30 text-white mt-16">
            {/* Cyber top border */}
            <div className="mx-auto px-6 sm:px-12 lg:max-w-[70rem] xl:max-w-[76rem] 2xl:max-w-[92rem]">
                <div className="flex justify-center -translate-y-[1px]">
                    <div className="absolute top-0 h-[2px] w-full bg-gradient-to-r from-transparent via-cyber-cyan via-cyber-magenta to-transparent animate-pulse"></div>
                </div>
                
                <div className="py-8 lg:py-12">
                    {/* Terminal-style footer */}
                    <div className="bg-cyber-surface/20 border border-cyber-cyan/30 rounded-lg p-6 backdrop-blur-sm">
                        {/* Header */}
                        <div className="border-b border-cyber-cyan/20 pb-4 mb-4">
                            <div className="flex items-center justify-between">
                                <div className="font-mono text-sm text-cyber-cyan">
                                    <span className="text-cyber-green">system@portfolio:</span>
                                    <span className="text-cyber-cyan">~$ footer_info</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <div className="w-2 h-2 bg-cyber-green rounded-full animate-pulse"></div>
                                    <span className="font-mono text-xs text-gray-400">SYSTEM_ACTIVE</span>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-4">
                            {/* Copyright */}
                            <div className="flex flex-col md:flex-row items-center justify-center gap-2 text-center">
                                <span className="font-mono text-gray-300">
                                    © {currentYear}. {UI_TEXT_CONSTANTS.footerCopyright}
                                </span>
                                <Link 
                                    target="_blank" 
                                    href={UI_TEXT_CONSTANTS.socialLinks.linkedin} 
                                    className="text-cyber-magenta hover:text-cyber-cyan transition-colors duration-300 font-mono font-bold"
                                >
                                    <GlitchText text={UI_TEXT_CONSTANTS.footerAuthor} className="text-sm" />
                                </Link>
                            </div>

                            {/* System Info */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-cyber-cyan/20">
                                <div className="text-center">
                                    <div className="font-mono text-xs text-gray-400">BUILD</div>
                                    <div className="font-mono text-sm text-cyber-cyan">v2.{currentYear}</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-mono text-xs text-gray-400">STATUS</div>
                                    <div className="font-mono text-sm text-cyber-green">OPERATIONAL</div>
                                </div>
                                <div className="text-center">
                                    <div className="font-mono text-xs text-gray-400">UPTIME</div>
                                    <div className="font-mono text-sm text-cyber-magenta">24/7</div>
                                </div>
                            </div>

                            {/* Terminal command */}
                            <div className="pt-4 border-t border-cyber-cyan/20">
                                <div className="font-mono text-xs text-center space-y-1">
                                    <div className="text-gray-400">
                                        <span className="text-cyber-green">developer@portfolio:</span>
                                        <span className="text-cyber-cyan">~$ echo "Gracias por visitar mi reino digital"</span>
                                    </div>
                                    <div className="text-cyber-magenta">
                                        Gracias por visitar mi reino digital
                                    </div>
                                    <div className="text-gray-500">
                                        <span className="text-cyber-green">developer@portfolio:</span>
                                        <span className="text-cyber-cyan">~$ █</span>
                                        <span className="animate-pulse">|</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Background scan effect */}
            <div className="absolute inset-0 bg-gradient-to-t from-cyber-cyan/5 to-transparent opacity-30 pointer-events-none"></div>
        </footer>
    );
};

export default Footer;