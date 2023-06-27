import Area from "../comum/Area";

export default function TiposCarros() {
    return (
      <Area id="tipos" >
        <div className="flex flex-col justify-center gap-5 bg-white p-3">

        <div className="flex gap-2.5 text-4xl lg:text-4xl text-black font-bold pl-5">
            Tipos de carros elétricos
            </div>
            
            <div className="text-sm lg:text-lg text-black text-center sm:text-left pt-10">
            Existem diferentes tipos de carros elétricos no mercado, que se diferenciam pela forma 
            como usam a energia elétrica e o combustível fóssil. Os principais tipos são:

            <li className="p-2">
            <span className="font-bold">Híbrido leve (HEV):</span> tem um motor a combustão que é auxiliado por um motor elétrico de baixa 
            potência, que recarrega sua bateria pelo próprio funcionamento do carro ou pelos freios regenerativos;
            </li>

            <li className="p-2">
            <span className="font-bold">Híbrido plug-in (PHEV):</span> tem um motor a combustão e um motor elétrico mais potente, que pode ser 
            recarregado por uma fonte externa de energia elétrica ou pelo motor a combustão. Esse tipo de carro 
            pode rodar apenas com eletricidade por um trecho limitado;
            </li>

            <li className="p-2">
            <span className="font-bold">Elétrico a bateria (BEV):</span> tem apenas um ou mais motores elétricos, que são alimentados por uma 
            bateria recarregável por uma fonte externa de energia elétrica ou pelos freios regenerativos. 
            Esse tipo de carro não usa nenhum combustível fóssil e tem zero emissão de poluentes.
            </li>

            </div>

            <div className="text-sm lg:text-lg text-black text-center sm:text-left pt-10">
            <div className="text-sm lg:text-lg text-black text-center sm:text-left pb-5">
            Segundo a NeoCharge, empresa especializada em recarga de veículos elétricos, os três modelos 
            eletrificados mais vendidos no Brasil em 2022 foram:
            </div>

            <li className="p-2">
            <span className="font-bold">Toyota Corolla (híbrido leve):</span> o sedã médio da marca japonesa liderou o segmento de híbridos com 
            6.530 unidades emplacadas no primeiro semestre;
            </li>

            <li className="p-2">
            <span className="font-bold">Volvo XC60 (híbrido plug-in):</span> o SUV médio da marca sueca foi o segundo colocado entre os híbridos plug-in, 
            que podem ser recarregados na tomada, com 1.914 unidades vendidas no mesmo período;
            </li>

            <li className="p-2">
            <span className="font-bold">Volvo XC40 (elétrico):</span> o SUV compacto da Volvo foi o campeão de vendas entre os elétricos a bateria, que 
            não usam nenhum combustível fóssil, com 1.770 unidades emplacadas nos seis primeiros meses do ano.
            </li>
        </div>
       </div>
      </Area>
    )
}
