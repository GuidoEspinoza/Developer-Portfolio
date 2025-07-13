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
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">{UI_TEXT_CONSTANTS.contactFormTitle}</p>
            <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
                <p className="text-sm text-[#d3d8e8]">
                    {UI_TEXT_CONSTANTS.contactFormDescription}
                </p>
                <form className="mt-6 flex flex-col gap-4" onSubmit={handleSendMail}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-base">
                            {UI_TEXT_CONSTANTS.contactFormNameLabel}
                        </label>
                        <input
                            id="name"
                            name="name"
                            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
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
                        <label htmlFor="email" className="text-base">
                            {UI_TEXT_CONSTANTS.contactFormEmailLabel}
                        </label>
                        <input
                            id="email"
                            name="email"
                            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
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
                            <p className="text-sm text-red-400">{UI_TEXT_CONSTANTS.contactFormErrorInvalidEmail}</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-base">
                            {UI_TEXT_CONSTANTS.contactFormMessageLabel}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
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

                    <div className="flex flex-col items-center gap-3">
                        {error.required && (
                            <p className="text-sm text-red-400">{UI_TEXT_CONSTANTS.contactFormErrorRequired}</p>
                        )}
                        <button
                            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold cursor-pointer"
                            type="submit"
                            tabIndex={0}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span>{UI_TEXT_CONSTANTS.contactFormSubmitButtonLoading}</span>
                            ) : (
                                <span className="flex items-center gap-1">
                                    {UI_TEXT_CONSTANTS.contactFormSubmitButton}
                                    <TbMailForward size={20} />
                                </span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;