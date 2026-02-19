import { MdKeyboardArrowRight } from "react-icons/md";

export function Features() {
  return (
    <section id="acerca" className="w-full bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-gray-900">Lo que obtienes</h2>
          <p className="mt-2 text-gray-600">Herramientas construidas para clínicas que valoran la eficiencia.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
          <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow transition-shadow">
            <div style={{backgroundImage: 'url(/src/assets/img/img-1.webp)'}} className="mb-4 h-36 sm:h-40 w-full rounded-md bg-slate-100 bg-cover bg-center" />
            <div className="flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Genera facturas electrónicas válidas</h3>
              <p className="mt-2 text-sm text-gray-600">Crea documentos que cumplen normativas sin esfuerzo adicional.</p>
              <button className="mt-auto pt-4 cursor-pointer inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:text-sky-800">
                Más <MdKeyboardArrowRight />
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow transition-shadow">
            <div style={{backgroundImage: 'url(/src/assets/img/img-2.png)'}} className="mb-4 h-36 sm:h-40 w-full rounded-md bg-slate-100 bg-cover bg-center" />
            <div className="flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Organiza tus registros de forma clara</h3>
              <p className="mt-2 text-sm text-gray-600">Mantén un control total sobre cada transacción y documento generado.</p>
              <button className="mt-auto pt-4 cursor-pointer inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:text-sky-800">
                Más <MdKeyboardArrowRight />
              </button>
            </div>
          </div>

          <div className="flex flex-col rounded-lg border border-gray-200 bg-white p-5 sm:p-6 shadow-sm hover:shadow transition-shadow">
            <div style={{backgroundImage: 'url(/src/assets/img/img-3.png)'}} className="mb-4 h-36 sm:h-40 w-full rounded-md bg-slate-100 bg-cover bg-center" />
            <div className="flex flex-col flex-1">
              <h3 className="text-lg font-semibold text-gray-900">Conecta con tus sistemas existentes</h3>
              <p className="mt-2 text-sm text-gray-600">Trabaja sin interrupciones con las herramientas que ya utilizas.</p>
              <button className="mt-auto pt-4 cursor-pointer inline-flex items-center gap-1 text-sm font-medium text-sky-700 hover:text-sky-800">
                Más <MdKeyboardArrowRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
