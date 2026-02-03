import { MdKeyboardArrowRight } from "react-icons/md";

export function Features() {
  return (
    <>
      <section>
        <h1>Lo que obtienes</h1>
        <p>Herramientas construidas para clínicas que valoran la eficiencia.</p>

        <div className="cards">
          <div className="card">
            <img src="/" alt="img" />{" "}
            <div className="info">
              <h1>Genera facturas electrónicas válidas</h1>
              <p>
                Crea documentos que cumplen normativas sin esfuerzo adicional.
              </p>
              <button>Más <MdKeyboardArrowRight /></button>
            </div>
          </div>
          <div className="card">
            <img src="/" alt="img" />{" "}
            <div className="info">
              <h1>Organiza tus registros de forma clara</h1>
              <p>
                Mantén un control total sobre cada transacción y documento generado.
              </p>
              <button>Más <MdKeyboardArrowRight /></button>
            </div>
          </div>
          <div className="card">
            <img src="/" alt="img" />{" "}
            <div className="info">
              <h1>Conecta con tus sistemas existentes</h1>
              <p>
                Trabaja sin interrupciones con las herramientas que ya utilizas.
              </p>
              <button>Más <MdKeyboardArrowRight /></button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
