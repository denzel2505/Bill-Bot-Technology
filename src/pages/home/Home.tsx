import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Features } from "./components/Features";
import { Technology } from "./components/Technology";
import { Contact } from "./components/Contact";
import { RedesSociales } from "./components/RedesSociales";
import { Footer } from "./components/Footer";

export function Home() {
  return (
    <>
      <Header />
      <Main />
      <Features />
      <Technology />
      <Contact />
      <RedesSociales />
      <Footer />
    </>
  );
}
