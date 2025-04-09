"use client";

import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
    "fixed bottom-8 right-6 z-50 flex items-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:text-xl transition-all duration-300 ease-out";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
    const [btnCls, setBtnCls] = useState(DEFAULT_BTN_CLS);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > SCROLL_THRESHOLD) {
                setBtnCls(DEFAULT_BTN_CLS.replace(" hidden", ""));
            } else {
                setBtnCls(DEFAULT_BTN_CLS + " hidden");
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true } as AddEventListenerOptions);
        return () => {
            window.removeEventListener("scroll", handleScroll, { passive: true } as EventListenerOptions);
        };
    }, []);

    const onClickBtn = () => window.scrollTo({ top: 0, behavior: "smooth" });

    return (
        <button className={btnCls} aria-label="back-to-top" tabIndex={0} title="back-to-top" onClick={onClickBtn}>
            <FaArrowUp />
        </button>
    );
};

export default ScrollToTop;
