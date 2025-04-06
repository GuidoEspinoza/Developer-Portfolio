// @flow strict
import Image from "next/image";
import Link from "next/link";

import { BsPersonWorkspace } from "react-icons/bs";
import { MdDownload } from "react-icons/md";

import lottieFile from '../../../assets/lottie/study.json';
import AnimationLottie from "../../helper/AnimationLottie";
import GlowCard from "../../helper/GlowCard";

import section from '@/app/assets/svg/section.svg';
import blurCard from '@/app/assets/svg/blur-card.svg';

const educations = [
    {
        id: 1,
        title: "Bootcamp Desarrollo Front-End",
        duration: "Mayo 2021 - Agosto 2021",
        institution: "Talento Digital para Chile",
        certificado: ""
    },
    {
        id: 2,
        title: "Curso Javascript",
        duration: "Abril 2022",
        institution: "Coderhouse",
        certificado: "https://wrdc7yopavc4jezh.public.blob.vercel-storage.com/Javascript-CoderHouse-TwmCo4EfI675TX77EBbH2Au5BsBFFj.pdf"
    },
    {
        id: 3,
        title: "Curso ReactJS",
        duration: "Julio 2022",
        institution: "Coderhouse",
        certificado: "https://wrdc7yopavc4jezh.public.blob.vercel-storage.com/ReactJS-CoderHouse-XOYDgHc8jwVTSrQxjAuAMVYOYR5fT9.pdf"
    },
    {
        id: 4,
        title: "Curso FrontEnd Developer",
        duration: "Marzo 2023",
        institution: "Platzi",
        certificado: "https://platzi.com/p/guidoespinozac/curso/2467-frontend-developer/diploma/detalle/"
    },
    {
        id: 5,
        title: "Curso Práctico FrontEnd Developer",
        duration: "Mayo 2023",
        institution: "Platzi",
        certificado: "https://platzi.com/p/guidoespinozac/curso/2477-frontend-developer-practico/diploma/detalle/"
    }
]

const Education = () => {
    return (
        <div id="education" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <Image
                src={section}
                alt="Hero"
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
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl rounded-md">
                        Educación / Certificaciones
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
                                educations.map(education => (
                                    <div key={education.id} className=" w-full md:w-[49%]">
                                        <GlowCard key={education.id} identifier={`education-${education.id}`}>
                                            <div className="p-3 relative text-white">
                                                <Image
                                                    src={blurCard}
                                                    alt="Hero"
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
                                                                    <span>Obtener Certificado</span>
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
        </div>
    );
};

export default Education;