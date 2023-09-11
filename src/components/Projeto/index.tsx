import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'

import { Card, LinkBotao } from './styles'

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto Lista de Tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com React</Paragrafo>
      <LinkBotao>Visualizar</LinkBotao>
    </Card>
  )
}

export default Projeto
