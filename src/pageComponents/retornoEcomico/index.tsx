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
            É visto uma tendência que carros acima de R$300mil possuam versões somente opções 
            hibridas, por este motivo não há como comparar com versões somente a combustão. 
            Por este motivo avaliaremos o Toyota Corolla e o Renault e-tech por ser o veículo 
            elétrico mais barato do Brasil atualmente R$ 146.990,00.
            </div>

            <div className="flex gap-2.5 text-4xl lg:text-4xl text-black font-bold pl-5">
            Toyota Corolla
            </div>

            <div className="text-sm lg:text-lg text-black text-center sm:text-left p-3">
            O nosso primeiro carro a ser analisado será o Corolla versão Altis Premium, que possuí 
            versão híbrida (R$193.590,00) e somente a combustão (R$178.890,00), na avaliação do Corolla
             avaliaremos 2 cenários, que são: considerando a substituição da bateria de acordo com a 
             garantia de fábrica (8 anos) e também com uma vida útil 50% acima da garantia (12 anos) 
             e não consideraremos a diferença no valor das revisões por ser inferior a 10% a diferença.
            </div>
            <TabelaCorolla/>
            <GraficoCorollaBateria8anos/>
            <GraficoCorollaBateria12anos/>
            <div className="text-sm lg:text-lg text-black text-center sm:text-left p-3">
            Conforme visto nos dados acima não há um cenário fluxo de caixa muito diferente entre os dois 
            modelos, pois quando o modelo híbrido começa a se tornar viável se faz necessária a substituição 
            da bateria. Portanto, caso o proprietário do modelo híbrido venda o seu veículo com menos de 6 anos 
            de uso, o seu investimento não terá um retorno positivo.
            </div>

            <div className="flex gap-2.5 text-4xl lg:text-4xl text-black font-bold pl-5">
            Renault Kwid
            </div>

            <div className="text-sm lg:text-lg text-black text-center sm:text-left p-3">
            Conhecido por ser o modelo elétrico mais barato do Brasil em 2023, o Renault kwid e-tech 
            possuí duas comercializadas, que são: A combustão no valor de R$ 58.990,00 e a versão 
            elétrica no valor de R$ 146.990,00. Para a avaliação deste veículo, será considerado também 
            os 2 cenários de vida útil da bateria, com o prazo de garantia fornecido pelo fabricante (8 anos) 
            e também outro cenário considerando a vida útil 50% superior a garantia. Para o cálculo do consumo
            foi considerado os dados fornecidos pela própria Renault, que informa um valor de R$0,06/km. Conforme 
            informado pela montadora, o custo a cada 30mil km do da versão elétrica é de R$506,00 e o da versão a 
            combustão R$1.529,00, por este motivo será considerado este custo a cada 2 anos.
            </div>
            <TabelaKwid/>
            <GraficoKwidBateria8anos/>
            <GraficoKwidBateria12anos/>
            <div className="text-sm lg:text-lg text-black text-center sm:text-left pl-3">
            Conforme visto nos dados acima o kwid elétrico torna-se viável somente após 24 anos de uso, ou seja, 
            a diferença de valor entre os dois veículos e também o custo de reposição da bateria ainda não tornam 
            este modelo economicamente viável em qualquer cenário de avaliação.
            </div>
            <div className="text-sm lg:text-lg text-black text-center sm:text-left pl-3">
            Há alguns estados em que há isenção total para veículos elétricos ou híbridos, mas como isso varia conforme 
            estado não foi considerado no cálculo. Além disso há locais como supermercados e shoppings que possuem 
            carregamento gratuito para atrair os clientes.
            </div>
            <div className="text-sm lg:text-lg text-black text-center sm:text-left pl-3">
            É visto que conforme as avaliações acima, no mercado de veículos híbridos e elétricos de entrada não há diferença 
            econômica vantajosa ainda em relação aos carros tradicionais a combustão, no entanto para carros de luxo com valor 
            acima de R$300mil essa tecnologia se faz padrão, dessa forma o proprietário estará comprando um veículo que já possuía 
            este patamar de valor com o benefício da tecnologia do motor elétrico e ter o valor de IPVA isento (em alguns estados), 
            o que é um valor considerável para veículos neste patamar de valor.

            </div>

        </div>
        </Area>
    )
}