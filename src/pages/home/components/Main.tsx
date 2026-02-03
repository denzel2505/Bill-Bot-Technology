import { FaArrowRight } from "react-icons/fa";

export function Main() {
  return (
    <>
      <main>
        <h1>Facturación electrónica simple y directa</h1>
        <p>FacturaLink transforma la forma en que las clínicas generan y gestionan sus facturas. Un sistema limpio, sin complicaciones, diseñado para funcionar cuando lo necesitas. Emite documentos electrónicos con precisión y mantén tus registros en orden.</p>
        <div className="botones">
            <button>Comenzar <FaArrowRight /></button>
        </div>
      </main>
    </>
  );
}
