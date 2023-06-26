
import Apresentacao from '@/pageComponents/apresentacao'
import Cabecalho from '@/pageComponents/cabecalho'
import CarrosEmplacadosMundo from "@/components/graficos/carrosEmplacados/CarrosEmplacadosMundo"
import CarrosEletricosBrasil from "@/components/graficos/carrosEmplacados/CarrosEletricosBrasil"
import TiposCarros from '@/pageComponents/tiposCarros'
import Carrossel from "@/pageComponents/carrossel/Carrossel"
import RetornoEconomico from "@/pageComponents/retornoEcomico"
import Rodape from '@/pageComponents/rodape'

export default function Home() {
  return (
    <div>
      <Cabecalho/>
      <Apresentacao/>
      <CarrosEmplacadosMundo/>
      <CarrosEletricosBrasil/>
      <TiposCarros/>
      <Carrossel/>
      <RetornoEconomico/>
      <Rodape/>
    </div>
  )
}
