import { FaArrowRight } from "react-icons/fa";
import {useNavigate} from "react-router-dom";

export function Main() {
  const navigate = useNavigate();
  return (
    <main id="inicio" className="w-full bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28 text-center">
        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
          Facturación electrónica simple y directa
        </h1>
        <p className="mt-4 sm:mt-6 mx-auto max-w-2xl text-base sm:text-lg text-gray-600">
          Bill Bot transforma la forma en que las clínicas generan y gestionan sus facturas. Un sistema limpio, sin complicaciones, diseñado para funcionar cuando lo necesitas. Emite documentos electrónicos con precisión y mantén tus registros en orden.
        </p>
        <div className="mt-8 sm:mt-10 flex items-center justify-center gap-3">
          <button onClick={() => navigate('/sign-up')} className="cursor-pointer inline-flex items-center gap-2 h-11 px-5 rounded bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition-colors">
            Comenzar
            <FaArrowRight className="text-white" />
          </button>
        </div>
      </div>
    </main>
  );
}
