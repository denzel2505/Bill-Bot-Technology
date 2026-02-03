import { FaFacebook, FaInstagram, FaDiscord, FaLinkedinIn } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

export function RedesSociales(){
    return(
        <>
        <section>
            <h1>Síguenos en redes sociales</h1>
            <div className="redes">
                <FaFacebook />
                <FaInstagram />
                <RiTwitterXFill />
                <FaDiscord />
                <FaLinkedinIn />
            </div>
        </section>
        </>
    )
}