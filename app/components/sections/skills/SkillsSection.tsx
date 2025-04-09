import Image from "next/image";
import Marquee from "react-fast-marquee";

import html from "@/app/assets/svg/html.svg";
import css from "@/app/assets/svg/css.svg";
import javascript from "@/app/assets/svg/javascript.svg";
import react from "@/app/assets/svg/react.svg";
import typescript from "@/app/assets/svg/typescript.svg";
import tailwind from "@/app/assets/svg/tailwind.svg";
import nextJS from "@/app/assets/svg/nextJS.svg";
import vtex from "@/app/assets/svg/vtex.svg";
import git from "@/app/assets/svg/git.svg";

const skillsData: string[] = [
    'HTML',
    'CSS',
    'Javascript',
    'ReactJS',
    'Typescript',
    'Tailwind',
    'NextJS',
    'VtexIO',
    'Git'
]

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
        <section id="skills" className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]">
            <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-[42%] translate-x-1/2 filter blur-3xl  opacity-20"></div>

            <div className="flex justify-center -translate-y-[1px]">
                <div className="w-3/4">
                    <div className="h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent  w-full" />
                </div>
            </div>

            <div className="flex justify-center my-5 lg:py-8">
                <div className="flex  items-center">
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                    <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-2xl rounded-md tracking-wider">
                        Tecnologías
                    </span>
                    <span className="w-24 h-[2px] bg-[#1a1443]"></span>
                </div>
            </div>

            <div className="w-full my-12">
                <Marquee
                    gradient={false}
                    speed={80}
                    pauseOnHover={true}
                    pauseOnClick={true}
                    delay={0}
                    play={true}
                    direction="left"
                >
                    {skillsData.map((skill, id) => (
                        <div className="w-36 min-w-fit h-fit flex flex-col items-center justify-center transition-all duration-500 m-3 sm:m-5 rounded-lg group relative hover:scale-[1.15] cursor-pointer"
                            key={id}>
                            <div className="h-full w-full rounded-lg border border-[#1f223c] bg-[#11152c] shadow-none shadow-gray-50 group-hover:border-violet-500 transition-all duration-500">
                                <div className="flex -translate-y-[1px] justify-center">
                                    <div className="w-3/4">
                                        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
                                    </div>
                                </div>
                                <div className="flex flex-col items-center justify-center gap-3 p-6">
                                    <div className="h-8 sm:h-10">
                                        <Image
                                            src={skillsImage(skill)?.src}
                                            alt={skill}
                                            width={40}
                                            height={40}
                                            className="h-full w-auto rounded-lg"
                                        />
                                    </div>
                                    <p className="text-white text-sm sm:text-lg">
                                        {skill}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section>
    );
};

export default Skills;