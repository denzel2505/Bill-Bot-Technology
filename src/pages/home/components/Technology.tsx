import { FaReact, FaPhp, FaNodeJs } from "react-icons/fa";
import { DiMysql } from "react-icons/di";

export function Technology() {
  return (
    <>
      <section>
        <div className="info-principal">
          <p>Tecnologías</p>
          <h1>Construido con herramientas modernas y confiables</h1>
          <p>
            FacturaLink utiliza frameworks actuales y bases de datos robustas
            para garantizar velocidad y seguridad en cada transacción. La
            arquitectura fue diseñada pensando en clínicas que necesitan un
            sistema estable, sin demoras, que funcione cuando más lo requieres.
          </p>
          <div className="tecnologias">
            <FaReact />
            <FaPhp />
            <DiMysql />
            <FaNodeJs />
          </div>
        </div>

        <div className="imagen">
          <img src="/" alt="img" />
        </div>
      </section>
    </>
  );
}
