import { Dashboard } from "./componentes/Dashboard";
import { Header } from "./componentes/Header";
import { GlobalStyle } from "./styles/global";
import { useState } from "react";
import { NovaTransacaoModal } from "./componentes/NovaTransacaoModal";
import { TransacoesProvider } from "./hooks/useTransacoes";

export function App() {
  
  const [modalNovaTransacaoAberto, setModalNovaTransacaoAberto] = useState(false)

  function abrirModalNovaTransacao() {
      setModalNovaTransacaoAberto(true)
  }

  function fecharModalNovaTransacao() {
      setModalNovaTransacaoAberto(false)
  }

  return (
    <TransacoesProvider>
      <Header onAbrirModalNovaTransacao={abrirModalNovaTransacao}/>
      
      <Dashboard />
      
      <NovaTransacaoModal isOpen={modalNovaTransacaoAberto} onRequestClose={fecharModalNovaTransacao} />

      <GlobalStyle />
    </TransacoesProvider>
  );
}