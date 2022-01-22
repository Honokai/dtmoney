import { Container } from "./styles";
import imgEntradada from "../../assets/income.svg";
import imgSaida from "../../assets/outcome.svg";
import imgTotal from "../../assets/total.svg";
import { useContext, useEffect, useState } from "react";
import { useTransacoes } from "../../hooks/useTransacoes";

export function Resumo() {

    const { transacoes } = useTransacoes()
    
    const resumo = transacoes.reduce((acc, transacao) => {
        if(transacao.tipo == 'entrada') {
            acc.entradas += transacao.valor
            acc.total += transacao.valor
        } else {
            acc.saidas += transacao.valor
            acc.total -= transacao.valor
        }

        return acc
    }, {
        entradas: 0,
        saidas: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entrada</p>
                    <img src={imgEntradada} alt="Entradas" />
                </header>
                <strong>
                    {new Intl.NumberFormat('pt-BR', {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(resumo.entradas)}
                </strong>
            </div>           
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={imgSaida} alt="Saídas" />
                </header>
                <strong>- {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(resumo.saidas)}</strong>
            </div>           
            <div className="exposicao-fundo">
                <header>
                    <p>Total</p>
                    <img src={imgTotal} alt="Total" />
                </header>
                <strong>
                {new Intl.NumberFormat('pt-BR', {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(resumo.total)}
                </strong>
            </div>           
        </Container>
    )
}