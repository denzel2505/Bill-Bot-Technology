import { useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const logo = "/src/assets/logos/bill-bot.png";

export function SignUp() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col">
      <header className="w-full">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex items-center justify-between py-4">
          <img
            className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto cursor-pointer"
            src={logo}
            onClick={() => navigate("/bill-bot-technology")}
            alt="Bill Bot Technology"
          />
          <ul className="flex items-center text-sm sm:text-base">
            <li className="mr-2">
              <p>Ya tienes cuenta?</p>
            </li>
            <li>
              <a className="underline cursor-pointer" onClick={() => navigate("/login")}>Ingresar</a>
            </li>
          </ul>
        </div>
      </header>

      <main className="flex flex-1 w-full">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Regístrate</h1>
          <p className="mt-2 text-center text-gray-600">Regístrate para empezar</p>

          <form className="mt-8 w-full max-w-md space-y-4" action="/" method="post">
            <input className="h-11 w-full rounded border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500" type="text" placeholder="Nombre" />
            <input className="h-11 w-full rounded border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500" type="text" placeholder="Apellido" />
            <input className="h-11 w-full rounded border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500" type="email" placeholder="Correo" />
            <input className="h-11 w-full rounded border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500" type="password" placeholder="Contraseña" />
            <button className="h-11 cursor-pointer bg-sky-600 hover:bg-sky-700 transition-colors w-full justify-center rounded text-white text-sm font-medium flex items-center">Registrarse</button>
            <button type="button" className="h-11 cursor-pointer w-full justify-center rounded border border-gray-300 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors">
              <FaGoogle className="text-gray-700" /> Registrarse con Google
            </button>
          </form>
        </div>
      </main>

      <footer className="w-full p-5 mt-auto">
        <p style={{fontSize: '12px'}} className="text-center">©2026 Bill Bot Technology</p>
      </footer>
    </div>
  );
}
