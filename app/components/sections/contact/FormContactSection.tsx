"use client";
// @flow strict
import { useState } from "react";
import { TbMailForward } from "react-icons/tb";
import { toast } from "react-toastify";

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
                throw new Error(errorData.message || "Algo salió mal");
            }

            toast.success("¡Mensaje enviado correctamente!");
            setUserInput({
                name: "",
                email: "",
                message: "",
            });
        } catch (error) {
            if (error instanceof Error) {
                toast.error(error.message || "Error al enviar el mensaje");
            } else {
                toast.error("Ha ocurrido un error inesperado");
            }
        } finally {
            setIsLoading(false);
        };
    };

    return (
        <div>
            <p className="font-medium mb-5 text-[#16f2b3] text-xl uppercase">Contáctame</p>
            <div className="max-w-3xl text-white rounded-lg border border-[#464c6a] p-3 lg:p-5">
                <p className="text-sm text-[#d3d8e8]">
                    {"Si tienes alguna pregunta o inquietud, no dudes en ponerte en contacto conmigo. Estoy abierto a cualquier oportunidad de trabajo que se alinee con mis habilidades e intereses."}
                </p>
                <form className="mt-6 flex flex-col gap-4" onSubmit={handleSendMail}>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name" className="text-base">
                            Tu Nombre:
                        </label>
                        <input
                            id="name"
                            name="name"
                            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            type="text"
                            maxLength={100}
                            required
                            aria-required="true"
                            aria-label="Ingresa tu nombre"
                            onChange={(e) => setUserInput({ ...userInput, name: e.target.value })}
                            onBlur={checkRequired}
                            value={userInput.name}
                        />
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" className="text-base">
                            Tu Email:
                        </label>
                        <input
                            id="email"
                            name="email"
                            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            type="email"
                            maxLength={100}
                            required
                            aria-required="true"
                            aria-label="Ingresa tu email"
                            value={userInput.email}
                            onChange={(e) => setUserInput({ ...userInput, email: e.target.value })}
                            onBlur={() => {
                                checkRequired();
                                setError({ ...error, email: !isValidEmail(userInput.email) });
                            }}
                        />
                        {error.email && (
                            <p className="text-sm text-red-400">Por favor, ingresa un correo válido</p>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <label htmlFor="message" className="text-base">
                            Tu Mensaje:
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            className="bg-[#10172d] w-full border rounded-md border-[#353a52] focus:border-[#16f2b3] ring-0 outline-0 transition-all duration-300 px-3 py-2"
                            maxLength={500}
                            required
                            aria-required="true"
                            aria-label="Ingresa tu comentario"
                            onChange={(e) => setUserInput({ ...userInput, message: e.target.value })}
                            onBlur={checkRequired}
                            rows={4}
                            value={userInput.message}
                        />
                    </div>

                    <div className="flex flex-col items-center gap-3">
                        {error.required && (
                            <p className="text-sm text-red-400">¡Todos los campos son requeridos!</p>
                        )}
                        <button
                            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-5 md:px-12 py-2.5 md:py-3 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold cursor-pointer"
                            type="submit"
                            tabIndex={0}
                            disabled={isLoading}
                        >
                            {isLoading ? (
                                <span>Enviando mensaje...</span>
                            ) : (
                                <span className="flex items-center gap-1">
                                    ENVIAR MENSAJE
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