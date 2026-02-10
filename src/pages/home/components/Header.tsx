import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";

const logo = "/src/assets/logos/bill-bot.png";

export function Header() {
  const navigate = useNavigate();
  const [hidden, setHidden] = useState(false);
  const [lastY, setLastY] = useState(0);
  const [atTop, setAtTop] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setHidden(y > lastY && y > 8);
          setAtTop(y < 8);
          setLastY(y);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastY]);

  return (
    <>
    <header className={`w-full sticky top-0 z-50 transition-transform duration-300 ${hidden ? "-translate-y-full" : "translate-y-0"} ${atTop ? "border-b border-transparent" : "border-b border-gray-200"} bg-white/80 backdrop-blur supports-backdrop-filter:bg-white/60`}>
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-3 sm:py-4 flex items-center justify-between">
        <a onClick={() => navigate("/bill-bot-technology")} className="shrink-0 cursor-pointer">
          <img
            src={logo}
            alt="Bill Bot Technology"
            className="h-7 sm:h-8 md:h-10 lg:h-12 w-auto"
          />
        </a>

        <ul className="hidden md:flex items-center gap-6 text-sm">
          <li>
            <button className="text-gray-700 hover:text-sky-600 transition-colors" onClick={() => scrollToId('inicio')}>Inicio</button>
          </li>
          <li>
            <button className="text-gray-700 hover:text-sky-600 transition-colors" onClick={() => scrollToId('acerca')}>Acerca de</button>
          </li>
          <li>
            <button className="text-gray-700 hover:text-sky-600 transition-colors" onClick={() => scrollToId('tecnologias')}>Tecnologías</button>
          </li>
          <li>
            <button className="text-gray-700 hover:text-sky-600 transition-colors" onClick={() => scrollToId('contacto')}>Contacto</button>
          </li>
        </ul>

        <div className="hidden sm:flex items-center gap-3">
          <button
            className="h-9 px-4 rounded border border-gray-300 text-sm font-medium hover:bg-gray-50 transition-colors"
            onClick={() => navigate("/login")}
          >
            Iniciar Sesión
          </button>
          <button
            className="h-9 px-4 rounded bg-sky-600 text-white text-sm font-medium hover:bg-sky-700 transition-colors"
            onClick={() => navigate("/sign-up")}
          >
            Registrarse
          </button>
        </div>

        <div className="md:hidden flex items-center gap-3">
          <button aria-label="Abrir menú" className="inline-flex h-9 w-9 items-center justify-center rounded border border-gray-300 text-gray-700 hover:bg-gray-50" onClick={() => setMenuOpen(true)}>
            <HiOutlineMenuAlt3 size={20} />
          </button>
        </div>
      </div>
    </header>
    <div
      className={`fixed inset-0 transition ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={() => setMenuOpen(false)}
    >
      <div className={`absolute inset-0 bg-black/40 transition-opacity ${menuOpen ? 'opacity-100' : 'opacity-0'}`} />
      <div
        className={`absolute left-0 top-0 h-full w-72 max-w-[80%] bg-white shadow-xl transform transition-transform duration-300 ${menuOpen ? 'translate-x-0' : '-translate-x-full'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <span className="text-sm font-medium">Menú</span>
          <button aria-label="Cerrar menú" className="inline-flex h-8 w-8 items-center justify-center rounded hover:bg-gray-100" onClick={() => setMenuOpen(false)}>
            <IoClose size={20} />
          </button>
        </div>
        <nav className="px-4 py-4">
          <ul className="space-y-2 text-sm">
            <li><button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100" onClick={() => { setMenuOpen(false); scrollToId('inicio'); }}>Inicio</button></li>
            <li><button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100" onClick={() => { setMenuOpen(false); scrollToId('acerca'); }}>Acerca de</button></li>
            <li><button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100" onClick={() => { setMenuOpen(false); scrollToId('tecnologias'); }}>Tecnologías</button></li>
            <li><button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100" onClick={() => { setMenuOpen(false); scrollToId('contacto'); }}>Contacto</button></li>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <button className="flex-1 h-9 px-3 rounded border border-gray-300 text-sm font-medium hover:bg-gray-50" onClick={() => { setMenuOpen(false); navigate('/login'); }}>Ingresar</button>
            <button className="flex-1 h-9 px-3 rounded bg-sky-600 text-white text-sm font-medium hover:bg-sky-700" onClick={() => { setMenuOpen(false); navigate('/sign-up'); }}>Registrarse</button>
          </div>
        </nav>
      </div>
    </div>
    </>
  );
}
