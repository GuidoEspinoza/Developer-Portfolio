'use client';

import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

import hero from "@/app/assets/svg/hero.svg"
import { UI_TEXT_CONSTANTS } from "@/app/constants/ui-text-constants";
import GlitchText from "@/app/components/ui/GlitchText";
import NeonButton from "@/app/components/ui/NeonButton";
import HologramCard from "@/app/components/ui/HologramCard";

const HeroSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
            <Image
                src={hero}
                alt={UI_TEXT_CONSTANTS.altHero}
                width={1572}
                height={795}
                priority
                className="absolute -top-[98px] -z-10"
            />

            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
                <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
                    <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                        {UI_TEXT_CONSTANTS.heroTitle} <br />
                        {UI_TEXT_CONSTANTS.heroSubtitle} {' '}
                        <GlitchText 
                            text={UI_TEXT_CONSTANTS.heroName}
                            trigger="auto"
                            intensity="low"
                            className="text-cyber-cyan cyber-transition inline-block"
                        />
                        {UI_TEXT_CONSTANTS.heroSoyText}
                        <GlitchText 
                            text={UI_TEXT_CONSTANTS.heroRole}
                            trigger="hover"
                            intensity="medium"
                            className="text-cyber-magenta cyber-transition inline-block"
                        /> {' '}
                        {UI_TEXT_CONSTANTS.heroRoleSuffix}
                    </h1>

                    <div className="my-12 flex items-center gap-5">
                        <Link
                            href={UI_TEXT_CONSTANTS.socialLinks.github}
                            target='_blank'
                            aria-label={UI_TEXT_CONSTANTS.ariaLabelGitHub}
                            className="transition-all text-cyber-cyan hover:text-cyber-magenta hover:scale-125 duration-300 hover:glow-magenta group cursor-pointer"
                        >
                            <BsGithub size={30} className="transition-transform duration-300 group-hover:rotate-12" />
                        </Link>
                        <Link
                            href={UI_TEXT_CONSTANTS.socialLinks.linkedin}
                            target='_blank'
                            aria-label={UI_TEXT_CONSTANTS.ariaLabelLinkedIn}
                            className="transition-all text-cyber-cyan hover:text-cyber-magenta hover:scale-125 duration-300 hover:glow-magenta group cursor-pointer"
                        >
                            <BsLinkedin size={30} className="transition-transform duration-300 group-hover:-rotate-12" />
                        </Link>
                    </div>

                    <div className="flex items-center w-full gap-3 flex-col lg:flex-row justify-center md:justify-start">
                        <Link href="#contact" className="group">
                            <NeonButton
                                variant="primary"
                                size="lg"
                                className="cyber-border-primary group-hover:scale-105 transition-transform duration-300"
                            >
                                <span>{UI_TEXT_CONSTANTS.heroButtonContact}</span>
                                <RiContactsFill size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
                            </NeonButton>
                        </Link>

                        <Link href={UI_TEXT_CONSTANTS.socialLinks.cvUrl} target="_blank" className="group">
                            <NeonButton 
                                variant="secondary"
                                size="lg"
                                className="cyber-border-accent group-hover:scale-105 transition-transform duration-300"
                            >
                                <span>{UI_TEXT_CONSTANTS.heroButtonCV}</span>
                                <MdDownload size={16} className="ml-2 transition-transform duration-300 group-hover:translate-y-1" />
                            </NeonButton>
                        </Link>
                    </div>

                </div>
                <div className="order-1 lg:order-2">
                    <HologramCard className="cyber-border-primary relative">
                        <div className="flex flex-row">
                            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-cyber-cyan to-cyber-magenta"></div>
                            <div className="h-[1px] w-full bg-gradient-to-r from-cyber-magenta to-transparent"></div>
                        </div>
                        <div className="px-4 lg:px-8 py-5">
                            <div className="flex flex-row space-x-2">
                                <div className="h-3 w-3 rounded-full bg-red-400"></div>
                                <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                                <div className="h-3 w-3 rounded-full bg-green-200"></div>
                            </div>
                        </div>
                        <div className="overflow-hidden border-t-[2px] border-cyber-cyan px-4 lg:px-8 py-4 lg:py-8">
                            <code className="font-mono text-xs md:text-sm lg:text-base">
                                <div className="blink">
                                    <span className="mr-2 text-cyber-cyan">{UI_TEXT_CONSTANTS.heroCodeConst}</span>
                                    <span className="mr-2 text-white">{UI_TEXT_CONSTANTS.heroCodeConstDeveloper}</span>
                                    <span className="mr-2 text-cyber-cyan">{UI_TEXT_CONSTANTS.heroCodeEquals}</span>
                                    <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeOpenBrace}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-white">{UI_TEXT_CONSTANTS.heroCodeNombre}</span>
                                    <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeQuote}</span>
                                    <span className="text-cyber-green">{UI_TEXT_CONSTANTS.heroCodeName}</span>
                                    <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeQuote}{UI_TEXT_CONSTANTS.heroCodeComma}</span>
                                </div>
                                <div className="ml-4 lg:ml-8 mr-2">
                                    <span className=" text-white">{UI_TEXT_CONSTANTS.heroCodeTecnologias}</span>
                                    <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeOpenBracket}</span>
                                    {UI_TEXT_CONSTANTS.heroCodeTechnologies.map((tech, index) => (
                                        <span key={tech}>
                                            <span className="text-cyber-orange">{tech}</span>
                                            {index < UI_TEXT_CONSTANTS.heroCodeTechnologies.length - 1 && (
                                                <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeArraySeparator}</span>
                                            )}
                                        </span>
                                    ))}
                                    <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeCloseBracket}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-white">{UI_TEXT_CONSTANTS.heroCodeExperienciaKey}</span>
                                    <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeQuote}</span>
                                    <span className="text-cyber-magenta">{UI_TEXT_CONSTANTS.heroCodeExperience}</span>
                                    <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeQuote}</span>
                                    <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeComma}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-white">{UI_TEXT_CONSTANTS.heroCodeAprendizajeContinuo}</span>
                                    <span className="text-orange-400">{UI_TEXT_CONSTANTS.heroCodeContinuousLearning.toString()}</span>
                                    <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeComma}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-white">{UI_TEXT_CONSTANTS.heroCodeApasionadoPorElDesarrollo}</span>
                                    <span className="text-orange-400">{UI_TEXT_CONSTANTS.heroCodePassionate.toString()}</span>
                                    <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeComma}</span>
                                </div>
                                <div>
                                    <span className="ml-4 lg:ml-8 mr-2 text-white">{UI_TEXT_CONSTANTS.heroCodeSolucionadorDeProblemas}</span>
                                    <span className="text-orange-400">{UI_TEXT_CONSTANTS.heroCodeProblemSolver.toString()}</span>
                                </div>
                                <div>
                                    <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeCloseBrace}</span>
                                </div>
                            </code>
                        </div>
                    </HologramCard>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
