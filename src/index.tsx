import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transacoes', () => {
      return [
        {
          id: 1,
          titulo: '',
          valor: 400,
          tipo: 'saida',
          categoria: 'NORT',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
