import { Container } from "./styles";
import imgEntradada from "../../assets/income.svg";
import imgSaida from "../../assets/outcome.svg";
import imgTotal from "../../assets/total.svg";

export function Resumo() {
    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={imgEntradada} alt="Entradas" />
                </header>
                <strong>R$ 2500,05</strong>
            </div>           
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={imgSaida} alt="Saídas" />
                </header>
                <strong>R$ 1000</strong>
            </div>           
            <div className="exposicao-fundo">
                <header>
                    <p>Total</p>
                    <img src={imgTotal} alt="Total" />
                </header>
                <strong>R$ 1500,05</strong>
            </div>           
        </Container>
    )
}