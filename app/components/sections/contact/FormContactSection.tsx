"use client";
// @flow strict
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";
import { UI_TEXT_CONSTANTS } from "@/app/constants/ui-text-constants";

function ContactForm() {
    const [error, setError] = useState({ email: false, required: false });
    const [isLoading, setIsLoading] = useState(false);
    const [userInput, setUserInput] = useState({
        name: "",
        email: "",
        message: "",
    });

    const isValidEmail = (email: string): boolean => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const checkRequired = () => {
        if (userInput.email && userInput.message && userInput.name) {
            setError({ ...error, required: false });
        }
    };

    const handleSendMail = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!userInput.email || !userInput.message || !userInput.name) {
            setError({ ...error, required: true });
            return;
        } else if (error.email) {
            return;
        } else {
            setError({ ...error, required: false });
        };

        try {
            setIsLoading(true);
            const res = await fetch(`/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(userInput),
            });

            if (!res.ok) {
                const errorData = await res.json();
                throw new Error(errorData.message || UI_TEXT_CONSTANTS.contactFormErrorGeneric);
            }

            toast.success(UI_TEXT_CONSTANTS.contactFormSuccessMessage);
            setUserInput({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message || UI_TEXT_CONSTANTS.contactFormErrorMessage);
            } else {
                toast.error(UI_TEXT_CONSTANTS.contactFormErrorUnexpected);
            }
        } finally {
            setIsLoading(false);
        };
    };

    return (
        <div>
            <p className="font-medium mb-4 sm:mb-5 text-[#16f2b3] text-lg sm:text-xl uppercase">{UI_TEXT_CONSTANTS.contactFormTitle}</p>
            <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 sm:p-4 lg:p-5">
                <p className="text-sm text-[#d3d8e8] break-words">
                    {UI_TEXT_CONSTANTS.contactFormDescription}
                </p>
                <form className="mt-4 sm:mt-6 flex flex-col gap-3 sm:gap-4" onSubmit={handleSendMail}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-sm sm:text-base font-mono text-cyber-cyan">
                            {UI_TEXT_CONSTANTS.contactFormNameLabel}
                        </label>
                        <input
                            id="name"
                            name="name"
                            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-sm sm:text-base"
                            type="text"
                            maxLength={100}
                            required
                            aria-required="true"
                            aria-label={UI_TEXT_CONSTANTS.inputNameAriaLabel}
                            onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                            onBlur={checkRequired}
                            value={userInput.name}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-sm sm:text-base font-mono text-cyber-cyan">
                            {UI_TEXT_CONSTANTS.contactFormEmailLabel}
                        </label>
                        <input
                            id="email"
                            name="email"
                            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-sm sm:text-base"
                            type="email"
                            maxLength={100}
                            required
                            aria-required="true"
                            aria-label={UI_TEXT_CONSTANTS.inputEmailAriaLabel}
                            value={userInput.email}
                            onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                            onBlur={() => {
                                checkRequired();
                                setError({ ...error, email: !isValidEmail(userInput.email) });
                            }}
                        />
                        {error.email && (
                            <p className="text-sm text-red-400 break-words">{UI_TEXT_CONSTANTS.contactFormErrorInvalidEmail}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-sm sm:text-base font-mono text-cyber-cyan">
                            {UI_TEXT_CONSTANTS.contactFormMessageLabel}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2 text-sm sm:text-base resize-none"
                            maxLength={500}
                            required
                            aria-required="true"
                            aria-label={UI_TEXT_CONSTANTS.inputMessageAriaLabel}
                            onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                            onBlur={checkRequired}
                            rows={4}
                            value={userInput.message}
                        />
                    </div>

                    <div className="flex flex-col items-center gap-3 mt-2 sm:mt-3">
                        {error.required && (
                            <p className="text-sm text-red-400 text-center break-words">{UI_TEXT_CONSTANTS.contactFormErrorRequired}</p>
                        )}
                        <button
                            className="group relative inline-flex items-center gap-2 bg-transparent border-2 border-cyber-cyan hover:border-cyber-magenta px-6 sm:px-8 py-3 sm:py-4 rounded-md text-cyber-cyan hover:text-cyber-magenta font-mono text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-300 hover:shadow-xl hover:shadow-cyber-cyan/30 hover:bg-cyber-cyan/10 overflow-hidden w-full sm:w-auto justify-center"
                            type="submit"
                            tabIndex={0}
                            disabled={isLoading}
                        >
                            {/* Background glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-cyber-cyan/20 to-cyber-magenta/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Scan line effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-cyan/30 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                            
                            <span className="relative z-10 flex items-center gap-2">
                                {isLoading ? (
                                    <>
                                        <div className="w-4 h-4 border-2 border-cyber-cyan border-t-transparent rounded-full animate-spin"></div>
                                        <span className="whitespace-nowrap">{UI_TEXT_CONSTANTS.contactFormSubmitButtonLoading}</span>
                                    </>
                                ) : (
                                    <>
                                        <span className="whitespace-nowrap">{UI_TEXT_CONSTANTS.contactFormSubmitButton}</span>
                                        <TbMailForward size={18} className="group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0 sm:size-5" />
                                    </>
                                )}
                            </span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;