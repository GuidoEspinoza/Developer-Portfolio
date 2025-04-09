import Image from "next/image";

const AboutSection = () => {
    return (
        <section id="about" className="relative my-12 lg:my-16">
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8 my-5 lg:py-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-2xl rounded-md tracking-wider">
                    Acerca de mí
                </span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 my-5 lg:py-8">
                <div className="order-2 lg:order-1">
                    <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
                        ¿Quién soy?
                    </p>
                    <p className="text-gray-200 text-sm lg:text-lg">
                        Mi nombre es Guido Espinoza, y me especializo en el desarrollo Front-End, con un enfoque en ReactJS y VTEX IO. A lo largo de mi carrera, he trabajado en la creación y optimización de más de 10 sitios web de ecommerce, liderando proyectos desde su concepción hasta su ejecución, lo que ha permitido obtener resultados tangibles como una reducción del 20% en los tiempos de desarrollo y una mejora del 15% en el rendimiento de los sitios.
                    </p>
                    <p className="text-gray-200 text-sm lg:text-lg mt-4">
                        Mi pasión radica en diseñar experiencias web que no solo sean visualmente atractivas, sino también altamente funcionales. Además, siempre estoy en búsqueda de nuevas tecnologías que me permitan mejorar mis habilidades y aportar más valor en cada proyecto. Fuera del trabajo, me encanta escribir código, escuchar música y disfrutar de algunos videojuegos. Estoy comprometido con la mejora continua, la calidad y el liderazgo técnico dentro de equipos multidisciplinarios.
                    </p>
                </div>
                <div className="flex justify-center order-1 lg:order-2">
                    <Image
                        src='https://wrdc7yopavc4jezh.public.blob.vercel-storage.com/profile_image-eDka2DSUzuoJa9uQ4FmgZvab8rjppC.png'
                        width={280}
                        height={280}
                        alt="Guido Espinoza"
                        className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer w-[280px] h-[280px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;