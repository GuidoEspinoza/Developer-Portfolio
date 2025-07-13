// @flow strict
import Image from "next/image";
import Link from "next/link";

import { BsPersonWorkspace } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { UI_TEXT_CONSTANTS } from "@/app/constants/ui-text-constants";

import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "@/app/components/ui/AnimationLottie";
import GlowCard from "../../ui/GlowCard";

import section from '@/app/assets/svg/section.svg';
import blurCard from '@/app/assets/svg/blur-card.svg';

const Education = () => {
    return (
        <section id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <Image
                src={section}
                alt={UI_TEXT_CONSTANTS.altHero}
                width={1572}
                height={795}
                className="absolute top-0 -z-10"
            />
            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md tracking-wider">
                        {UI_TEXT_CONSTANTS.educationSectionTitle}
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="py-8">
                <div className="flex flex-col gap-8">
                    <div className="flex justify-center items-start">
                        <div className="w-3/4 h-3/4 md:w-1/4 md:h-1/4">
                            <AnimationLottie animationPath={lottieFile} />
                        </div>
                    </div>

                    <div className="flex justify-center w-full">
                        <div className="flex flex-col md:flex-row gap-6 w-full md:flex-wrap justify-center">
                            {
                                UI_TEXT_CONSTANTS.educations.map(education => (
                                    <div key={education.id} className=" w-full md:w-[49%]">
                                        <GlowCard key={education.id} identifier={`education-${education.id}`}>
                                            <div className="p-3 relative text-white">
                                                <Image
                                                    src={blurCard}
                                                    alt={UI_TEXT_CONSTANTS.altBlurCard}
                                                    width={1080}
                                                    height={200}
                                                    className="absolute bottom-0 opacity-80 "
                                                />
                                                <div className="flex justify-center">
                                                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                                                        {education.duration}
                                                    </p>
                                                </div>
                                                <div className="flex items-center gap-x-8 px-3 py-5">
                                                    <div className="text-violet-500  transition-all duration-300 hover:scale-125">
                                                        <BsPersonWorkspace size={36} />
                                                    </div>
                                                    <div className="w-full">
                                                        <p className="text-base sm:text-xl mb-2 font-medium uppercase">
                                                            {education.title}
                                                        </p>
                                                        <div className="flex flex-col md:flex-row gap-1 items-center justify-between w-full min-h-[52px]">
                                                            <p className="text-sm sm:text-base">{education.institution}</p>
                                                            {education.certificado !== "" && (
                                                                <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold z-50" role="button" target="_blank" href={education.certificado}
                                                                >
                                                                    <span>{UI_TEXT_CONSTANTS.educationCertificateButton}</span>
                                                                    <MdDownload size={16} />
                                                                </Link>
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </GlowCard>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;