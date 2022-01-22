import { useTransacoes } from "../../hooks/useTransacoes";
import { Container } from "./styles";

export function TabelaTransacoes() {

    const { transacoes } = useTransacoes()

    return(
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    {transacoes.map(transacao => (
                        <tr key={transacao.id}>
                            <td>{transacao.titulo}</td>
                            <td className={transacao.tipo}>
                                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(transacao.valor)}</td>
                            <td>{transacao.categoria}</td>
                            <td>
                            {new Intl.DateTimeFormat('pt-BR').format(new Date(transacao.criadoEm))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Container>
    )
}