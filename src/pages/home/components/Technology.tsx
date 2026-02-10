import { FaReact, FaPhp, FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

export function Technology() {
  return (
    <section id="tecnologias" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <p className="text-sm font-medium text-sky-700">Tecnologías</p>
            <h2 className="mt-2 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Construido con herramientas modernas y confiables
            </h2>
            <p className="mt-3 text-gray-600">
              FacturaLink utiliza frameworks actuales y bases de datos robustas para garantizar velocidad y seguridad en cada transacción. La arquitectura fue diseñada pensando en clínicas que necesitan un sistema estable, sin demoras, que funcione cuando más lo requieres.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-4 text-gray-800">
              <span className="inline-flex items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm font-medium">
                <FaReact className="text-sky-600" /> React
              </span>
              <span className="inline-flex items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm font-medium">
                <FaNodeJs className="text-green-600" /> Node.js
              </span>
              <span className="inline-flex items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm font-medium">
                <FaPhp className="text-indigo-700" /> PHP
              </span>
              <span className="inline-flex items-center gap-2 rounded border border-gray-200 px-3 py-2 text-sm font-medium">
                <DiMysql className="text-cyan-700" /> MySQL
              </span>
            </div>
          </div>

          <div>
            <div className="h-64 sm:h-72 lg:h-80 w-full rounded-lg bg-slate-100" />
          </div>
        </div>
      </div>
    </section>
  );
}
