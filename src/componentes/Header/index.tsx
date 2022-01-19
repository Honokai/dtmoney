import logo from '../../assets/logo.svg'
import { Container, Conteudo } from './styles'

interface HeaderProps {
    onAbrirModalNovaTransacao: () => void
}

export function Header({onAbrirModalNovaTransacao}: HeaderProps) {
    return (
        <Container>
            <Conteudo>
                <img src={logo} alt="dt money"/>
                <button type="button" onClick={onAbrirModalNovaTransacao}>
                    Nova transação 
                </button>
             </Conteudo>
        </Container>
    )
}