import { useNavigate } from "react-router-dom";

const logo = "/src/assets/logos/bill-bot.png";

export function Login() {
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
            <p>No tienes cuenta?</p>
          </li>
          <li>
            <a className="underline cursor-pointer" onClick={() => navigate("/sign-up")}>Registrarse</a>
          </li>
          </ul>
        </div>
      </header>

      <main className="flex flex-1 w-full">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">Iniciar Sesión</h1>
          <p className="mt-5 text-center text-gray-600">¡Empieza a generar tus Facturas!</p>

          <form className="mt-8 w-full max-w-md space-y-4" action="/" method="post">
            <input className="h-11 mt-2 mb-7 w-full rounded border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500" type="email" placeholder="Correo"/>
            <input className="h-11 mt-2 mb-7 w-full rounded border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500" type="password" placeholder="Contraseña"/>
            <button className="cursor-pointer h-11 bg-sky-600 hover:bg-sky-700 transition-colors w-full justify-center rounded text-white text-sm font-medium flex items-center">Ingresar</button>
          </form>
        </div>
      </main>

      <footer className="w-full p-5 mt-auto">
        <p style={{fontSize: '12px'}} className="text-center">©2026 Bill Bot Technology</p>
      </footer>
    </div>
  );
}
