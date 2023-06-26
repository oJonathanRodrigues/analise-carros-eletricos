import Area from "../comum/Area";
import ImagemResponsiva from "../comum/ImagemResponsiva";
import Descicao from "./Descricao";
import Titulo from "./Titulo"
import Tesla from "../../../public/foto-1.jpg"

export default function Apresentacao() {
    return (
        <Area id="apresentacao" className="pt-20">
            <Titulo />
            <div className={`
                flex items-center justify-around
                h-[400px] bg-white
            `}>
                <Descicao />
                <ImagemResponsiva
                    imagem={Tesla}
                    className="hidden md:inline"
                />
            </div>
        </Area>
    )
}