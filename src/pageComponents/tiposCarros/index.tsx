import Area from "../comum/Area";

export default function TiposCarros() {
    return (
        <Area id="tipos" >
        <div className="flex flex-col justify-center gap-5 bg-white p-3">
            <div className="text-sm lg:text-lg text-black text-center sm:text-left pt-10">
            Há no mercado 3 opções de carros elétricos, que são elas:

            <li className="p-2">
            Híbrido leve, em que utiliza um motor a combustão auxiliado por um pequeno 
            motor elétrico, que carrega sua bateria pelo próprio sistema do veículo;
            </li>

            <li className="p-2">
            Hibrido plug-in, ele utiliza um motor a combustão e também um motor elétrico 
            mais potente, em relação ao anterior, gerando uma maior economia de combustível para o motor a combustão;
            </li>

            <li className="p-2">
            E o totalmente elétrico, que possuí somente este tipo de motor e pode possuir um ou mais motores.
            </li>

            </div>
            <div className="text-sm lg:text-lg text-black text-center sm:text-left pb-5">
            No Brasil os 3 veículos elétricos mais vendidos, conforme a NeoCharge, são: Toyota Corolla (híbrido leve), 
            Volvo XC60 R$ 399.950,00 (híbro plug-in) e Volvo XC40 R$ 329.950,00 (elétrico).
            </div>
        </div>
        </Area>
    )
}
