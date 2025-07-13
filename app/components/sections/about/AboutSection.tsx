import Image from "next/image";
import { UI_TEXT_CONSTANTS } from "@/app/constants/ui-text-constants";

const AboutSection = () => {
    return (
        <section id="about" className="relative my-12 lg:my-16">
            <div className="hidden lg:flex flex-col items-center absolute top-16 -right-8 my-5 lg:py-8">
                <span className="bg-[#1a1443] w-fit text-white rotate-90 p-2 px-5 text-2xl rounded-md tracking-wider">
                    {UI_TEXT_CONSTANTS.aboutSectionTitle}
                </span>
                <span className="h-36 w-[2px] bg-[#1a1443]"></span>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 my-5 lg:py-8">
                <div className="order-2 lg:order-1">
                    <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">
                        {UI_TEXT_CONSTANTS.aboutWhoAmI}
                    </p>
                    <p className="text-gray-200 text-sm lg:text-lg">
                        {UI_TEXT_CONSTANTS.aboutDescription1}
                    </p>
                    <p className="text-gray-200 text-sm lg:text-lg mt-4">
                        {UI_TEXT_CONSTANTS.aboutDescription2}
                    </p>
                </div>
                <div className="flex justify-center order-1 lg:order-2">
                    <Image
                        src={UI_TEXT_CONSTANTS.socialLinks.profileImage}
                        width={280}
                        height={280}
                        alt={UI_TEXT_CONSTANTS.personalName}
                        className="rounded-lg transition-all duration-1000 grayscale hover:grayscale-0 hover:scale-110 cursor-pointer w-[280px] h-[280px]"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutSection;