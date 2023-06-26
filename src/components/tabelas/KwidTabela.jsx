export default function TabelaKwid(){
    return(
        <div className={`flex justify-center items-center bg-white text-black`}>
            <table className="border border-black"> 
            <thead className="border border-black">
                <tr>
                <th className="p-2 font-black border border-black">Descrição</th>
                <th className="p-2 font-black border border-black">Kwid comum</th>
                <th className="p-2 font-black">Kwid elétrico</th>  
                </tr>
            </thead>
            <tbody>
                <tr className="border border-black">
                    <td className="border border-black">Valor</td>
                    <td className="border border-black"> R$ 58.990,00</td>
                    <td className="border border-black">R$ 146.990,00</td>
                </tr>
                <tr className="border border-black">
                    <td className="border border-black">Custo por km (R$/km)</td>
                    <td className="border border-black">R$ 0,34</td>
                    <td className="border border-black">R$ 0,06</td>
                </tr>
                <tr className="border border-black">
                    <td className="border border-black">Média de uso anual (km)</td>
                    <td className="border border-black">17.500</td>
                    <td className="border border-black">17.500</td>
                </tr>
                <tr className="border border-black">
                    <td className="border border-black">Custo de abastecimento/recarga anual</td>
                    <td className="border border-black">R$ 5.950,00</td>
                    <td className="border border-black">R$ 1.050,00</td>
                </tr>
                <tr className="border border-black">
                    <td className="border border-black">Valor da bateria(Conversão direta)</td>
                    <td className="border border-black">  -   </td>
                    <td className="border border-black">R$ 35.269,88</td>
                </tr>
                <tr className="border border-black">
                    <td className="border border-black">Vida útil da bateria (anos)*</td>
                    <td className="border border-black">  -   </td>
                    <td className="border border-black">8/12</td>
                </tr>
                <tr className="border border-black">
                    <td className="border border-black">Revisões (custo previsto a cada 2 anos)</td>
                    <td className="border border-black">R$ 1.529,00</td>
                    <td className="border border-black">R$ 506,00</td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}