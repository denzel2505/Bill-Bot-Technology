import { useNavigate } from "react-router-dom";

const logo = "/src/assets/logos/bill-bot.png";

export function Login() {
  const navigate = useNavigate();
  return (
    <>
      <header className="flex p-5 justify-between items-center">
        <img className="size-1/8 p-0 ml-9 cursor-pointer" src={logo} onClick={() => navigate("/bill-bot-tecnology")} />
        <ul className="flex mr-9">
          <li className="mr-2">
            <p>No tienes cuenta?</p>
          </li>
          <li>
            <a className="underline cursor-pointer" onClick={() => navigate("/sign-up")}>Registrarse</a>
          </li>
        </ul>
      </header>

      <main className="flex justify-center items-center size-full m-auto flex-col">
        <h1 className="mt-5 mb-5 text-4xl font-bold">Iniciar Sesión</h1>
        <p>¡Empieza a generar tus Facturas!</p>

        <form style={{maxWidth: '100vb'}} action="/" method="post">
          <input className="border-1 rounded border-gray-400  w-full mt-10 p-2" type="email" placeholder="Correo"/>
          <input className="border-1 rounded border-gray-400 w-full mt-10 p-2" type="password" placeholder="Contraseña"/>
          <button className="bg-sky-600 w-full justify-center rounded text-white mt-10 p-2 flex">Ingresar</button>
        </form>
      </main>

      <footer className="w-full p-5 absolute bottom-0">
        <p style={{fontSize: '12px'}} className="text-center">©2026 Bill Bot Technology</p>
      </footer>
    </>
  );
}
