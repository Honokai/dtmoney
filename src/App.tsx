import { Dashboard } from "./componentes/Dashboard";
import { Header } from "./componentes/Header";
import Modal from 'react-modal';
import { GlobalStyle } from "./styles/global";
import { useState } from "react";

Modal.setAppElement('#root')

export function App() {
  
  const [modalNovaTransacaoAberto, setModalNovaTransacaoAberto] = useState(false)

  function abrirModalNovaTransacao() {
      setModalNovaTransacaoAberto(true)
  }

  function fecharModalNovaTransacao() {
      setModalNovaTransacaoAberto(false)
  }

  return (
    <>
      <Header onAbrirModalNovaTransacao={abrirModalNovaTransacao}/>
      <Dashboard />
      <Modal isOpen={modalNovaTransacaoAberto} onRequestClose={fecharModalNovaTransacao}>
          <h2>Cadastrar nova transação</h2>
      </Modal>
      <GlobalStyle />
    </>
  );
}