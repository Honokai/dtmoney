import React, { createContext, useContext, useEffect, useState } from "react";
import { api } from "../servicos/api";

interface Transacao {
    id: number
    titulo: string
    valor: number
    categoria: string
    tipo: string
    criadoEm: string
}

interface TransacoesProviderProps {
    children: React.ReactNode
}

type EntradaTransacao = Omit<Transacao, 'id' | 'criadoEm'>

interface ContextoTransacoesData {
    transacoes: Transacao[]
    criarTransacao: (transacao: EntradaTransacao) => Promise<void>
}

const ContextoTransacoes = createContext<ContextoTransacoesData>({} as ContextoTransacoesData)

export function TransacoesProvider({children} : TransacoesProviderProps) {
    
    const [transacoes, setTransacoes] = useState<Transacao[]>([])

    async function criarTransacao(entradaTransacao: EntradaTransacao) {
        const response = await api.post('/transacoes', {...entradaTransacao, criadoEm: new Date()})
        const { transacao } = response.data
        setTransacoes([...transacoes, transacao,])
    }

    useEffect(() => {
        api.get('/transacoes')
            .then(response => setTransacoes(response.data.transacaos))
    }, []);

    return (
        <ContextoTransacoes.Provider value={{ transacoes, criarTransacao}}>
            {children}
        </ContextoTransacoes.Provider>
    )
}

export function useTransacoes() {
    const context = useContext(ContextoTransacoes)

    return context
}