import { Resumo } from "../Resumo";
import { TabelaTransacoes } from "../TabelaTransacoes";
import { Container } from "./styles";

export function Dashboard() {
    return (
        <Container>
            <Resumo />
            <TabelaTransacoes />
        </Container>
    )
}