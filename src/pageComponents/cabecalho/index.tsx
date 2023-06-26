import Area from "../comum/Area";
import Logo from "../comum/Logo";
import Menu from "./Menu";


export default function Cabecalho (){
    return(
        <Area id="" className="fixed z-10 bg-blue-900">
            <div className="flex items-center justify-between h-20">
            <Logo/>
            <Menu/>
            </div>
        </Area>
    )
}