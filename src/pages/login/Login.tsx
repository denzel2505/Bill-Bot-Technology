import { FaGoogle } from "react-icons/fa";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const logo = "/src/assets/logos/bill-bot.png";

export function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>();

  const onSubmit = ({ email, password }: { email: string; password: string }) => {
    console.log({ email, password });
  };

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
              <a
                className="underline cursor-pointer"
                onClick={() => navigate("/sign-up")}
              >
                Registrarse
              </a>
            </li>
          </ul>
        </div>
      </header>

      <main className="flex flex-1 w-full">
        <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center py-10 sm:py-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center">
            Iniciar Sesión
          </h1>
          <p className="mt-5 text-center text-gray-600">
            ¡Empieza a generar tus Facturas!
          </p>

          <form
            className="mt-8 w-full max-w-md space-y-4"
            onSubmit={handleSubmit(onSubmit)}
          >
            <input
              className="h-11 mt-2 mb-7 w-full rounded border border-gray-300 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
              type="email"
              placeholder="Correo"
              {...register("email", {
                required: "El correo es obligatorio",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Correo inválido",
                },
              })}
            />
            {errors.email?.message ? (
              <p className="-mt-6 mb-4 text-sm text-red-600">{errors.email.message}</p>
            ) : null}

            <div className="relative">
              <input
                className="h-11 mt-2 mb-7 w-full rounded border border-gray-300 px-3 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500"
                type={showPassword ? "text" : "password"}
                placeholder="Contraseña"
                {...register("password", {
                  required: "La contraseña es obligatoria",
                  minLength: {
                    value: 6,
                    message: "Mínimo 6 caracteres",
                  },
                })}
              />
              <button
                type="button"
                aria-label={showPassword ? "Ocultar contraseña" : "Ver contraseña"}
                className="cursor-pointer absolute right-3 top-6 text-gray-500 hover:text-gray-700"
                onClick={() => setShowPassword((v) => !v)}
              >
                {showPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            {errors.password?.message ? (
              <p className="-mt-6 mb-4 text-sm text-red-600">{errors.password.message}</p>
            ) : null}

            <button
              type="submit"
              className="cursor-pointer h-11 bg-sky-600 hover:bg-sky-700 transition-colors w-full justify-center rounded text-white text-sm font-medium flex items-center"
            >
              Ingresar
            </button>
            <button
              type="button"
              className="h-11 cursor-pointer w-full justify-center rounded border border-gray-300 text-sm font-medium flex items-center gap-2 hover:bg-gray-50 transition-colors"
            >
              <FaGoogle className="text-gray-700" /> Iniciar Sesión con Google
            </button>
          </form>
        </div>
      </main>

      <footer className="w-full p-5 mt-auto">
        <p style={{ fontSize: "12px" }} className="text-center">
          ©2026 Bill Bot Technology
        </p>
      </footer>
    </div>
  );
}
