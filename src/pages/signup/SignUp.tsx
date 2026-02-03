import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const logo = "/src/assets/logos/bill-bot.png";

export function SignUp() {
  const navigate = useNavigate();
  return (
    <>
      <header>
        <img src={logo} onClick={() => navigate("/bill-bot-tecnology")} />
        <ul>
          <li>
            <p>Ya tienes cuenta?</p>
          </li>
          <li>
            <a onClick={() => navigate("/login")}>Ingresar</a>
          </li>
        </ul>
      </header>

      <main>
        <h1>Registrate</h1>
        <p>Registrate para empezar</p>

        <form action="/" method="post">
          <input type="text" placeholder="Nombre" />
          <input type="text" placeholder="Apellido" />
          <input type="email" placeholder="Correo" />
          <input type="password" placeholder="Contraseña" />
          <button>Registrarse</button>
          <button><FaGoogle /> Registrarse con Google</button>
        </form>
      </main>

      <footer>
        <p>©2026 Bill Bot Technology</p>
      </footer>
    </>
  );
}
