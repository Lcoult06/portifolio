import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { Descricao, Botaotema, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void
}

const Sidebar = (props: Props) => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={20}>Leonardo Coutinho</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Lcoult06
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Desenvolvedor Full-Stack
      </Descricao>
      <Botaotema onClick={props.trocaTema}>Trocar Tema</Botaotema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
