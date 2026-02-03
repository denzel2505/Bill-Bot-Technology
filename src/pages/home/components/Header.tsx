import { useNavigate } from "react-router-dom";

const logo = "/src/assets/logos/bill-bot.png";

export function Header() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <a onClick={() => navigate("/bill-bot-tecnology")}>
          <img src={logo} alt="Logo" />
        </a>

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

        <div className="botones">
          <button onClick={() => navigate("/login")}>Iniciar Sesion</button>
          <button onClick={() => navigate("/sign-up")}>Registrarse</button>
        </div>
      </header>
    </>
  );
}
