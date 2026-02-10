import {
  MdOutlineEmail,
  MdOutlinePhone,
} from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export function Contact() {
  return (
    <section id="contacto" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          <p className="text-sm font-medium text-sky-700">Contacto</p>
          <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Comunícate</h2>
          <p className="mt-2 text-gray-600">Estamos aquí para responder tus preguntas y ayudarte.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div className="space-y-4">
            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <div className="mt-1 text-sky-600"><MdOutlineEmail size={20} /></div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Email</h3>
                <p className="text-sm text-gray-600">Envía tu mensaje directamente</p>
                <p className="mt-1 text-sm font-medium">montesdenzel25@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-3 rounded-lg border border-gray-200 p-4">
              <div className="mt-1 text-sky-600"><MdOutlinePhone size={20} /></div>
              <div>
                <h3 className="text-base font-semibold text-gray-900">Teléfono</h3>
                <p className="text-sm text-gray-600">Llama para hablar directamente</p>
                <p className="mt-1 text-sm font-medium">+57 302 2353071</p>
              </div>
            </div>

            <div className="flex items-start justify-between gap-3 rounded-lg border border-gray-200 p-4">
              <div className="flex items-start gap-3">
                <div className="mt-1 text-sky-600"><FaMapMarkerAlt size={18} /></div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900">Ubicación</h3>
                  <p className="text-sm text-gray-600">Cartagena, Colombia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125576.54351509082!2d-75.59092827298832!3d10.40035708069388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625e7ae9d1351%3A0xb161392e033f26ca!2sCartagena%20de%20Indias%2C%20Bol%C3%ADvar!5e0!3m2!1ses-419!2sco!4v1769983641715!5m2!1ses-419!2sco"
              className="w-full h-64 sm:h-80 "
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
