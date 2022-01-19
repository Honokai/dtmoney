import { useEffect } from "react";
import { api } from "../../servicos/api";
import { Container } from "./styles";

export function TabelaTransacoes() {
    
    useEffect(() => {
        api.get('/transacoes')
            .then(resposta => console.log(resposta.data))
    }, []);
    
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
                    <tr>
                        <td>Desenvolvimento</td>
                        <td className="entrada">R$12.000</td>
                        <td>Des</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Alu</td>
                        <td className="saida">- R$1200</td>
                        <td>Des</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Desenvolvimento</td>
                        <td>12.000</td>
                        <td>Des</td>
                        <td>20/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}