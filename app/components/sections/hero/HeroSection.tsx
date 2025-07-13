import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

import hero from "@/app/assets/svg/hero.svg"
import { UI_TEXT_CONSTANTS } from "@/app/constants/ui-text-constants";

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
                        <span className=" text-pink-500">{UI_TEXT_CONSTANTS.heroName}</span>
                        {UI_TEXT_CONSTANTS.heroSoyText}
                        <span className=" text-[#16f2b3]">{UI_TEXT_CONSTANTS.heroRole} </span>
                        {UI_TEXT_CONSTANTS.heroRoleSuffix}
                    </h1>

                    <div className="my-12 flex items-center gap-5">
                        <Link
                            href={UI_TEXT_CONSTANTS.socialLinks.github}
                            target='_blank'
                            aria-label={UI_TEXT_CONSTANTS.ariaLabelGitHub}
                            className="transition-all text-pink-500 hover:scale-125 duration-300"
                        >
                            <BsGithub size={30} />
                        </Link>
                        <Link
                            href={UI_TEXT_CONSTANTS.socialLinks.linkedin}
                            target='_blank'
                            aria-label={UI_TEXT_CONSTANTS.ariaLabelLinkedIn}
                            className="transition-all text-pink-500 hover:scale-125 duration-300"
                        >
                            <BsLinkedin size={30} />
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="#contact"
                            aria-label={UI_TEXT_CONSTANTS.ariaLabelContact}
                            className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
                        >
                            <div className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3 cursor-pointer">
                                <span>{UI_TEXT_CONSTANTS.heroButtonContact}</span>
                                <RiContactsFill size={16} />
                            </div>
                        </Link>

                        <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href={UI_TEXT_CONSTANTS.socialLinks.cvUrl}
                        >
                            <span>{UI_TEXT_CONSTANTS.heroButtonCV}</span>
                            <MdDownload size={16} />
                        </Link>
                    </div>

                </div>
                <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
                    <div className="flex flex-row">
                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
                        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
                    </div>
                    <div className="px-4 lg:px-8 py-5">
                        <div className="flex flex-row space-x-2">
                            <div className="h-3 w-3 rounded-full bg-red-400"></div>
                            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
                            <div className="h-3 w-3 rounded-full bg-green-200"></div>
                        </div>
                    </div>
                    <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
                        <code className="font-mono text-xs md:text-sm lg:text-base">
                            <div className="blink">
                                <span className="mr-2 text-pink-500">{UI_TEXT_CONSTANTS.heroCodeConst}</span>
                                <span className="mr-2 text-white">{UI_TEXT_CONSTANTS.heroCodeConstDeveloper}</span>
                                <span className="mr-2 text-pink-500">{UI_TEXT_CONSTANTS.heroCodeEquals}</span>
                                <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeOpenBrace}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">{UI_TEXT_CONSTANTS.heroCodeNombre}</span>
                                <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeQuote}</span>
                                <span className="text-amber-300">{UI_TEXT_CONSTANTS.heroCodeName}</span>
                                <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeQuote}{UI_TEXT_CONSTANTS.heroCodeComma}</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className=" text-white">{UI_TEXT_CONSTANTS.heroCodeTecnologias}</span>
                                <span className="text-gray-400">{UI_TEXT_CONSTANTS.heroCodeOpenBracket}</span>
                                {UI_TEXT_CONSTANTS.heroCodeTechnologies.map((tech, index) => (
                                    <span key={tech}>
                                        <span className="text-amber-300">{tech}</span>
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
                                <span className="text-orange-400">{UI_TEXT_CONSTANTS.heroCodeExperience}</span>
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
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
