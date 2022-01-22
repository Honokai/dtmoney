import React, { useState } from 'react';
import Modal from 'react-modal';
import { useTransacoes } from '../../hooks/useTransacoes';

import { BotaoSelecionavel, Container, TipoTransacaoContainer } from './styles';

import fecharImg from '../../assets/close.svg';
import entradaImg from '../../assets/income.svg';
import saidaImg from '../../assets/outcome.svg';


Modal.setAppElement('#root')
interface NovaTransacaoModalProps {
    isOpen: boolean;
    onRequestClose: () => void
}

export function NovaTransacaoModal({isOpen, onRequestClose} : NovaTransacaoModalProps) {

    const { criarTransacao} = useTransacoes()

    const [titulo, setTitulo] = useState('')
    const [valor, setValor] = useState(0)
    const [categoria, setCategoria] = useState('')
    const [tipo, setTipo] = useState('entrada')

    async function handleCriarNovaTransicao(evento: React.FormEvent) {
        evento.preventDefault();
        
        await criarTransacao({titulo, valor, categoria, tipo})

        onRequestClose()

        setTipo('entrada')
        setTitulo('')
        setCategoria('')
        setValor(0)
    }

    return (
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button className='react-modal-close' type='button' onClick={onRequestClose}>
                <img src={fecharImg} alt="Fechar modal" />
            </button>
            <Container onSubmit={handleCriarNovaTransicao}>
                <h2>Cadastrar nova transação</h2>
                <input type="text" value={titulo} onInput={(event) => setTitulo(event.currentTarget.value)} placeholder='Título'/>
                <input type="number" value={valor} onInput={(event) => setValor(Number(event.currentTarget.value))} placeholder='Valor'/>
                <TipoTransacaoContainer>
                    <BotaoSelecionavel
                        type='button' 
                        onClick={() => setTipo('entrada')}
                        selecionado={tipo == 'entrada'}
                        corAtiva="green"
                    >
                        <img src={entradaImg} alt="Entrada" />
                        <span>Entrada</span>
                    </BotaoSelecionavel>

                    <BotaoSelecionavel 
                        type='button' 
                        onClick={() => setTipo('saida')}
                        selecionado={tipo == 'saida'}
                        corAtiva="red"
                    >
                        <img src={saidaImg} alt="Saída" />
                        <span>Saída</span>
                    </BotaoSelecionavel>

                </TipoTransacaoContainer>
                <input type="text" value={categoria} onInput={(event) => setCategoria(event.currentTarget.value)} placeholder='categoria'/>
                <button type='submit'>Cadastrar</button>
            </Container>
        </Modal>
    )
}