import Image from "next/image";

import placeHolderProfile from '@/app/assets/svg/384x384.svg';

const AboutSection = () => {
    return (
        <div id="about" className="my-12 lg:my-16 relative">
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-xl rounded-md">
                    Acerca de mí
                </span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
                <div className="order-2 lg:order-1">
                    <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
                        ¿Quién soy?
                    </p>
                    <p className="text-gray-200 text-sm lg:text-lg">
                        Mi nombre es Guido Espinoza, soy un desarrollador Front-End especializado en ReactJS y VTEX IO, con experiencia en la creación y optimización de más de 10 sitios web de ecommerce. He liderado proyectos desde cero, garantizando resultados medibles, como una reducción del 20% en tiempos de desarrollo y un aumento del 15% en rendimiento. 
                    </p>
                    <p className="text-gray-200 text-sm lg:text-lg mt-4">
                        Me encanta crear experiencias web atractivas y funcionales. Siempre estoy buscando aprender nuevas tecnologías y mejorar mis habilidades. En mi tiempo libre, disfruto de la lectura, la música y algunos videojuegos. Estoy comprometido con la calidad, el aprendizaje continuo y el liderazgo técnico en equipos multidisciplinarios.
                    </p>
                </div>
                <div className="flex justify-center order-1 lg:order-2">
                    <Image
                        src={placeHolderProfile}
                        width={280}
                        height={280}
                        alt="Guido Espinoza"
                        className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer"
                    />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;