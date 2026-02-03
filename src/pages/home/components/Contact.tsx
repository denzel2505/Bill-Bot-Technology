import {
  MdOutlineEmail,
  MdOutlinePhone,
  MdKeyboardArrowRight,
} from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";

export function Contact() {
  return (
    <>
      <section>
        <div className="texto-principal">
          <p>Contacto</p>
          <h1>Comunícate</h1>
          <p>Estamos aquí para responder tus preguntas y ayudarte.</p>
        </div>

        <div className="info">
          <div className="info-contacto">
            <div className="info-email">
              <MdOutlineEmail />
              <h1>Email</h1>
              <p>Envía tu mensaje directamente</p>
              <p>montesdenzel25@gmail.com</p>
            </div>

            <div className="info-tel">
              <MdOutlinePhone />
              <h1>Telefono</h1>
              <p>Llama para hablar directamente</p>
              <p>+57 302 2353071</p>
            </div>

            <div className="info-ubi">
              <FaMapMarkerAlt />
              <h1>Ubicación</h1>
              <p>Cartagena, Colombia</p>
              <a>
                Ver ubicación <MdKeyboardArrowRight />
              </a>
            </div>
          </div>

          <div className="ubi">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125576.54351509082!2d-75.59092827298832!3d10.40035708069388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8ef625e7ae9d1351%3A0xb161392e033f26ca!2sCartagena%20de%20Indias%2C%20Bol%C3%ADvar!5e0!3m2!1ses-419!2sco!4v1769983641715!5m2!1ses-419!2sco" width="600" height="450"  loading="lazy" ></iframe>
          </div>
        </div>
      </section>
    </>
  );
}
