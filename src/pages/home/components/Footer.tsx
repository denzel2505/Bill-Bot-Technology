const logo = "/src/assets/logos/bill-bot.png";

export function Footer() {
  return (
    <>
      <footer>
        <div className="logo-enlaces">
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <a href="">Inicio</a>
            </li>
            <li>
              <a href="">Acerca de</a>
            </li>
            <li>
              <a href="">Tecnologias</a>
            </li>
            <li>
              <a href="">Contacto</a>
            </li>
          </ul>
        </div>
        <hr />
        <div className="politicas">
          <p>©2026 Bill Bot Technology. Todos los derechos reservados.</p>

          <ul>
            <li>
              <a href="">Privacidad</a>
            </li>
            <li>
              <a href="">Terminos de servicio</a>
            </li>
            <li>
              <a href="">Configuracion de cookies</a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}
