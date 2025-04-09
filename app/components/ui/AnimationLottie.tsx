"use client"

import Lottie from "lottie-react";

interface AnimationLottieProps {
    animationPath: object;
}

const AnimationLottie: React.FC<AnimationLottieProps> = ({ animationPath }) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationPath,
        style: {
            width: '100%'
        }
    };

    return (
        <Lottie {...defaultOptions} />
    );
};

export default AnimationLottie;