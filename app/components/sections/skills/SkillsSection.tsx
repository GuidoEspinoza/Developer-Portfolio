'use client';

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { UI_TEXT_CONSTANTS } from "@/app/constants/ui-text-constants";
import HologramCard from "@/app/components/ui/HologramCard";
import GlitchText from "@/app/components/ui/GlitchText";

import html from "@/app/assets/svg/html.svg";
import css from "@/app/assets/svg/css.svg";
import javascript from "@/app/assets/svg/javascript.svg";
import react from "@/app/assets/svg/react.svg";
import typescript from "@/app/assets/svg/typescript.svg";
import tailwind from "@/app/assets/svg/tailwind.svg";
import nextJS from "@/app/assets/svg/nextJS.svg";
import vtex from "@/app/assets/svg/vtex.svg";
import git from "@/app/assets/svg/git.svg";

const skillsImage = (skill: string) => {
    const skillID = skill.toLowerCase();
    switch (skillID) {
        case 'html':
            return html;
        case 'css':
            return css;
        case 'javascript':
            return javascript;
        case 'nextjs':
            return nextJS;
        case 'reactjs':
            return react;
        case 'typescript':
            return typescript;
        case 'tailwind':
            return tailwind;
        case 'vtexio':
            return vtex;
        case 'git':
            return git;
        default:
            break;
    }
}

function Skills() {
    return (
        <section id="skills" className="relative z-50 border-t my-12 lg:my-24 border-cyber-cyan/30 cyber-border" style={{ overflow: 'hidden' }}>
            {/* Cyberpunk background effects */}
            <div className="w-[100px] h-[100px] bg-cyber-cyan/20 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl opacity-20 glow-cyan"></div>

            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-cyber-cyan to-cyber-magenta w-full glow-cyan" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex items-center">
                    <span className="w-24 h-[2px] bg-cyber-surface"></span>
                    <span className="bg-cyber-surface border border-cyber-cyan w-fit text-cyber-cyan p-2 px-5 text-2xl rounded-md tracking-wider font-mono glow-text-cyan cyber-border">
                        <GlitchText 
                            text={UI_TEXT_CONSTANTS.skillsSectionTitle}
                            trigger="hover"
                            intensity="low"
                            className="inline-block"
                        />
                    </span>
                    <span className="w-24 h-[2px] bg-cyber-surface"></span>
                </div>
            </div>

            {/* Skills Marquee */}
            <div className="w-full my-12 overflow-hidden" style={{ overflow: 'hidden !important' }}>
                <Marquee
                    gradient={false}
                    speed={60}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                    style={{ overflow: 'hidden' }}
                >
                    {UI_TEXT_CONSTANTS.skillsData.map((skill, id) => (
                        <div 
                            className="flex-shrink-0 w-44 h-48 flex flex-col items-center justify-center transition-all duration-700 m-4 sm:m-6 rounded-lg group relative cursor-pointer skill-card-hover"
                            key={id}
                            style={{ 
                                animationDelay: `${id * 0.2}s`,
                                overflow: 'visible'
                            }}
                        >
                            <HologramCard className="h-full w-full group-hover:cyber-glow-primary transition-all duration-500 hologram-effect group-hover:scale-105">
                                <div className="flex -translate-y-[1px] justify-center">
                                    <div className="w-3/4">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-cyan to-cyber-magenta transition-all duration-500 group-hover:via-cyber-magenta group-hover:to-cyber-green" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-5 p-6 h-full">
                                    <div className="h-20 w-20 flex items-center justify-center transition-all duration-500 group-hover:scale-125 skill-icon-hover relative">
                                        {/* Efecto de aura detrás del ícono */}
                                        <div className="absolute inset-0 bg-cyber-cyan/20 rounded-full blur-md scale-150 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                        <Image
                                            src={skillsImage(skill)?.src}
                                            alt={skill}
                                            width={80}
                                            height={80}
                                            className="h-full w-auto rounded-lg filter transition-all duration-500 group-hover:drop-shadow-[0_0_25px_rgba(0,255,255,0.9)] group-hover:brightness-110 relative z-10"
                                        />
                                        {/* Partículas de efecto */}
                                        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                            {[...Array(6)].map((_, i) => (
                                                <div
                                                    key={i}
                                                    className="absolute w-1 h-1 bg-cyber-cyan rounded-full animate-ping"
                                                    style={{
                                                        top: `${Math.random() * 100}%`,
                                                        left: `${Math.random() * 100}%`,
                                                        animationDelay: `${i * 0.1}s`,
                                                        animationDuration: '2s'
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                    <p className="text-cyber-cyan text-sm font-mono group-hover:glow-text-cyan transition-all duration-500 text-center group-hover:text-cyber-magenta group-hover:scale-110 font-bold">
                                        {skill}
                                    </p>
                                    {/* Línea de conexión cyberpunk */}
                                    <div className="w-0 h-[1px] bg-gradient-to-r from-cyber-cyan to-cyber-magenta group-hover:w-full transition-all duration-700"></div>
                                </div>
                            </HologramCard>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Skills;