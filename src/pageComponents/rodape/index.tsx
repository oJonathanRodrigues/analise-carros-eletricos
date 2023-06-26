import Area from "../comum/Area";
import Logo from "../comum/Logo";
import RedesSociais from "./RedeSociais";

export default function Rodape() {
    return (
        <Area className="bg-blue-900 py-10">
            <div className="flex flex-col items-center md:items-start ">
                <Logo />
            </div>
            <div className="flex flex-col md:flex-row md:justify-between items-center mt-10">
                <RedesSociais />
                <p className="text-zinc-100 mt-7 md:mt-0 text-center">
                    <span className="font-bold">JONATHAN R.</span> ® {new Date().getFullYear()} - Todos os direitos reservados
                </p>
            </div>
        </Area>
    )
}