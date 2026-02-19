import { FaFacebook, FaInstagram, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export function RedesSociales() {
    return (
        <>

            <section className="w-full bg-white">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16 text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                        Contactame en redes sociales
                    </h2>
                    <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-4 sm:gap-6">
                        <button aria-label="Facebook" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:text-sky-700 hover:border-sky-300 transition-colors">
                            <FaFacebook size={18} />
                        </button>
                        <button aria-label="Instagram" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:text-sky-700 hover:border-sky-300 transition-colors">
                            <FaInstagram size={18} />
                        </button>
                        <button aria-label="X" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:text-sky-700 hover:border-sky-300 transition-colors">
                            <RiTwitterXFill size={18} />
                        </button>
                        <button aria-label="Discord" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:text-sky-700 hover:border-sky-300 transition-colors">
                            <FaDiscord size={18} />
                        </button>
                        <button aria-label="LinkedIn" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-700 hover:text-sky-700 hover:border-sky-300 transition-colors">
                            <FaLinkedinIn size={18} />
                        </button>
                    </div>
                </div>
            </section>
        </>
    )
}