import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Features } from "./components/Features";
import { Technology } from "./components/Technology";
import { Contact } from "./components/Contact";
import { RedesSociales } from "./components/RedesSociales";
import { Footer } from "./components/Footer";
import { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

export function Home() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      const y = window.scrollY || 0;
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setShowTop(y > 300);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      <Header />
      <Main />
      <Features />
      <Technology />
      <Contact />
      <RedesSociales />
      <Footer />

      <button
        aria-label="Volver arriba"
        onClick={scrollTop}
        className={`cursor-pointer fixed bottom-6 right-6 z-40 inline-flex items-center justify-center rounded-full h-12 w-12 bg-sky-600 text-white shadow-lg hover:bg-sky-700 transition-all duration-300 ${showTop ? 'opacity-100 translate-y-0' : 'opacity-0 pointer-events-none translate-y-3'}`}
      >
        <IoIosArrowUp />
      </button>
    </>
  );
}
