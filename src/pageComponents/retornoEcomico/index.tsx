import Area from "../comum/Area";
import TabelaCorolla from "@/components/tabelas/CorollaTabela"
import GraficoCorollaBateria8anos from "@/components/graficos/Corolla/CorollaRoiBateria8anos"
import GraficoCorollaBateria12anos from "@/components/graficos/Corolla/CorollaRoiBateria12anos"
import TabelaKwid from "@/components/tabelas/KwidTabela"
import GraficoKwidBateria8anos from "@/components/graficos/Kwid/KwidRoiBateria8anos"
import GraficoKwidBateria12anos from "@/components/graficos/Kwid/KwidRoiBateria12anos"

export default function Slogan() {
    return (
        <Area id="analise">
        <div className="flex flex-col justify-center gap-5 bg-white pb-10">
            <div className="flex gap-2.5 text-4xl lg:text-4xl text-black font-bold pl-5">
            Análise econômica
            </div>

            <div className="text-sm lg:text-lg text-black text-center sm:text-left p-3">
            Uma tendência observada no mercado é que os carros com preço acima de R$ 300 mil 
            oferecem apenas opções híbridas, sem versões a combustão. Por isso, para fazer uma 
            comparação mais justa, vamos avaliar o Toyota Corolla, que tem uma versão híbrida leve, 
            e o Renault e-tech, que é o carro elétrico mais barato do Brasil atualmente, custando R$ 146.990,00.
            </div>

            <div className="flex gap-2.5 text-4xl lg:text-4xl text-black font-bold pl-5">
            Toyota Corolla
            </div>

            <div className="text-sm lg:text-lg text-black text-center sm:text-left p-3">
            Vamos começar a nossa análise pelo Corolla, que tem uma versão híbrida leve (R$ 193.590,00) e 
            outra a combustão (R$ 178.890,00). Ambas são da versão Altis Premium. Para comparar os custos dos 
            dois modelos, vamos considerar dois cenários: um com a substituição da bateria do híbrido de acordo 
            com o prazo de garantia de fábrica (8 anos) e outro com uma vida útil da bateria 50% maior que o garantido (12 anos). Além disso, vamos desconsiderar a diferença no valor das revisões, pois é inferior a 10%.
            </div>
            <TabelaCorolla/>
            <GraficoCorollaBateria8anos/>
            <GraficoCorollaBateria12anos/>
            <div className="text-sm lg:text-lg text-black text-center sm:text-left p-3">
            A análise dos dados acima mostra que não há uma grande vantagem financeira entre os dois modelos, 
            pois a economia de combustível do modelo híbrido é compensada pelo custo de substituição da bateria. 
            Assim, se o dono do modelo híbrido vender o seu carro com menos de 6 anos de uso, ele não terá um retorno 
            positivo do seu investimento.
            </div>

            <div className="flex gap-2.5 text-4xl lg:text-4xl text-black font-bold pl-5">
            Renault Kwid
            </div>

            <div className="text-sm lg:text-lg text-black text-center sm:text-left p-3">
            O Renault kwid e-tech é o carro elétrico mais barato do Brasil em 2023. Ele tem duas versões: uma elétrica, 
            que custa R$ 146.990,00, e outra a combustão, que sai por R$ 58.990,00. Para comparar os custos das duas versões, 
            vamos considerar dois cenários de vida útil da bateria do elétrico: um com o prazo de garantia de fábrica (8 anos) 
            e outro com uma duração 50% maior (12 anos). Além disso, vamos usar os dados de consumo fornecidos pela própria 
            Renault, que indica um gasto de R$ 0,06 por km rodado no elétrico. Segundo a montadora, o custo de manutenção do 
            elétrico a cada 30 mil km é de R$ 506,00, enquanto o do a combustão é de R$ 1.529,00. Por isso, vamos levar em 
            conta esse valor a cada dois anos.
            </div>
            <TabelaKwid/>
            <GraficoKwidBateria8anos/>
            <GraficoKwidBateria12anos/>
            <div className="text-sm lg:text-lg text-black text-center sm:text-left pl-3">
            A análise dos dados acima mostra que o kwid elétrico só compensa financeiramente depois de 23 anos de uso, 
            considerando um cenário de vida útil da bateria de 12 anos. Isso significa que a diferença de preço entre as 
            versões e o custo de troca da bateria ainda são fatores que inviabilizam economicamente esse modelo com os valores 
            atuais.
            </div>
            <div className="text-sm lg:text-lg text-black text-center sm:text-left pl-3">
            Outro fator que pode influenciar na economia dos veículos elétricos ou híbridos é a isenção de impostos em alguns 
            estados, mas isso não foi levado em conta no cálculo porque varia de acordo com a região. Além disso, existem 
            lugares como supermercados e shoppings que oferecem carregamento gratuito para os clientes que têm carros elétricos 
            ou híbridos.
            </div>
            <div className="text-sm lg:text-lg text-black text-center sm:text-left pl-3">
            As análises acima mostram que os veículos elétricos e híbridos de entrada ainda não são economicamente vantajosos 
            em relação aos carros a combustão tradicionais, devido aos valores praticados atualmente. Por outro lado, os carros de luxo com preço acima de R$ 300 mil 
            já adotam essa tecnologia como padrão. Assim, o comprador leva um veículo que já tinha esse valor de mercado, 
            mas com o benefício do motor elétrico e da isenção de IPVA (em alguns estados), que representa uma economia 
            significativa para veículos nessa faixa de preço.

            </div>

        </div>
        </Area>
    )
}