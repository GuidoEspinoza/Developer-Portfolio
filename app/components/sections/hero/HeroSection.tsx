import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

import hero from "@/app/assets/svg/hero.svg"

const HeroSection = () => {
    return (
        <section className="relative flex flex-col items-center justify-between py-4 lg:py-12">
            <Image
                src={hero}
                alt="Hero"
                width={1572}
                height={795}
                priority
                className="absolute -top-[98px] -z-10"
            />

            <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
                <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
                    <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
                        Hola, <br />
                        mi nombre es {' '}
                        <span className=" text-pink-500">Guido Espinoza</span>
                        {`, soy `}
                        <span className=" text-[#16f2b3]">Front-End Developer </span>
                        Profesional.
                    </h1>

                    <div className="my-12 flex items-center gap-5">
                        <Link
                            href='https://github.com/GuidoEspinoza'
                            target='_blank'
                            aria-label="GitHub"
                            className="transition-all text-pink-500 hover:scale-125 duration-300"
                        >
                            <BsGithub size={30} />
                        </Link>
                        <Link
                            href='https://www.linkedin.com/in/guido-espinoza/'
                            target='_blank'
                            aria-label="LinkedIn"
                            className="transition-all text-pink-500 hover:scale-125 duration-300"
                        >
                            <BsLinkedin size={30} />
                        </Link>
                    </div>

                    <div className="flex items-center gap-3">
                        <Link
                            href="#contact"
                            aria-label="Ir a la sección de contacto"
                            className="bg-gradient-to-r to-pink-500 from-violet-600 p-[1px] rounded-full transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
                        >
                            <div className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out md:font-semibold flex items-center gap-1 hover:gap-3 cursor-pointer">
                                <span>Contáctame</span>
                                <RiContactsFill size={16} />
                            </div>
                        </Link>

                        <Link className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold" role="button" target="_blank" href='https://wrdc7yopavc4jezh.public.blob.vercel-storage.com/CV_Guido_Espinoza-yN3pcP54bry2Zvmaf04IUMp3j5YUBd.pdf'
                        >
                            <span>Obtener CV</span>
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
                                <span className="mr-2 text-pink-500">const</span>
                                <span className="mr-2 text-white">developer</span>
                                <span className="mr-2 text-pink-500">=</span>
                                <span className="text-gray-400">{'{'}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">nombre:</span>
                                <span className="text-gray-400">{`'`}</span>
                                <span className="text-amber-300">Guido Espinoza</span>
                                <span className="text-gray-400">{`',`}</span>
                            </div>
                            <div className="ml-4 lg:ml-8 mr-2">
                                <span className=" text-white">tecnologías:</span>
                                <span className="text-gray-400">{`['`}</span>
                                <span className="text-amber-300">HTML</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">CSS</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Javascript</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">ReactJS</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Typescript</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Tailwind</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">NextJS</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">VtexIO</span>
                                <span className="text-gray-400">{"', '"}</span>
                                <span className="text-amber-300">Git</span>
                                <span className="text-gray-400">{"'],"}</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">experiencia:</span>
                                <span className="text-gray-400">{`'`}</span>
                                <span className="text-orange-400">Más de 3 años desarrollando aplicaciones web modernas y escalables</span>
                                <span className="text-gray-400">{`'`}</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">aprendizajeContinuo:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">apasionadoPorElDesarrollo:</span>
                                <span className="text-orange-400">true</span>
                                <span className="text-gray-400">,</span>
                            </div>
                            <div>
                                <span className="ml-4 lg:ml-8 mr-2 text-white">solucionadorDeProblemas:</span>
                                <span className="text-orange-400">true</span>
                            </div>
                            <div>
                                <span className="text-gray-400">{`};`}</span>
                            </div>
                        </code>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
