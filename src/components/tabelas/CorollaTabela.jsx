export default function TabelaCorolla(){
    return(
        <div className={`flex justify-center items-center bg-white text-black`}>
            <table className="border border-black">
            <thead className="border border-black">
                <tr>
                <th className="p-2 font-black flex justify-center">Descrição</th>
                <th className="p-2 font-black border border-black">Corolla Comum</th>
                <th className="p-2 font-black">Corolla Híbrido</th>  
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="border border-black  ">Valor</td>
                    <td className="border border-black "> R$ 178.890,00</td>
                    <td className="border border-black ">R$ 193.590,00</td>
                </tr>
                <tr className="border border-black">
                    <td className="border border-black">Consumo cidade (km/l) (Inmetro)</td>
                    <td className="border border-black">10,6</td>
                    <td className="border border-black">16,3</td>
                </tr>
                <tr className="border border-black">
                    <td className="border border-black">Valor da gasolina (22/06/2023)</td>
                    <td className="border border-black">R$ 5,21</td>
                    <td>R$ 5,21</td>
                </tr>
                <tr className="border border-black">
                    <td className="border border-black">Custo por km (R$/km)</td>
                    <td className="border border-black">R$ 0,49</td>
                    <td>R$ 0,32</td>
                </tr>
                <tr>
                    <td className="border border-black">Média de rodagem anual (km)</td>
                    <td className="border border-black">17500</td>
                    <td className="border border-black">17500</td>
                </tr>
                <tr>
                    <td className="border border-black">Custo anual de abastecimento</td>
                    <td className="border border-black">R$ 8.601,42</td>
                    <td className="border border-black" >R$ 5.593,56</td>
                </tr>
                <tr>
                    <td className="border border-black">Valor da bateria</td>
                    <td className="border border-black">- </td>
                    <td className="border border-black">R$ 27.000,00</td>
                </tr>
                <tr>
                    <td className="border border-black">Vida útil da bateria (anos)</td>
                    <td className="border border-black">- </td>
                    <td>8</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}