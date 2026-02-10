const logo = "/src/assets/logos/bill-bot.png";

export function Footer() {
  const scrollToId = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  return (
    <footer className="w-full bg-white border-t">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <img
            src={logo}
            alt="Bill Bot Technology"
            decoding="async"
            className="h-6 sm:h-7 md:h-8 lg:h-9 w-auto max-w-40 object-contain shrink-0"
          />
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-gray-700">
            <li><button className="hover:text-sky-700 transition-colors" onClick={() => scrollToId('inicio')}>Inicio</button></li>
            <li><button className="hover:text-sky-700 transition-colors" onClick={() => scrollToId('acerca')}>Acerca de</button></li>
            <li><button className="hover:text-sky-700 transition-colors" onClick={() => scrollToId('tecnologias')}>Tecnologías</button></li>
            <li><button className="hover:text-sky-700 transition-colors" onClick={() => scrollToId('contacto')}>Contacto</button></li>
          </ul>
        </div>

        <div className="mt-8 border-t"></div>

        <div className="mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-gray-600">©2026 Bill Bot Technology. Todos los derechos reservados.</p>
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-gray-600">
            <li><a className="hover:text-sky-700 transition-colors" href="">Privacidad</a></li>
            <li><a className="hover:text-sky-700 transition-colors" href="">Términos de servicio</a></li>
            <li><a className="hover:text-sky-700 transition-colors" href="">Configuración de cookies</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
