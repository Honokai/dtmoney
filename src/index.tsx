import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
  models: {
    transacao: Model,
  },
  seeds(server){
    server.db.loadData({
      transacaos: [
        {
          id: 1,
          titulo: 'Teste',
          tipo: 'entrada',
          categoria: 'Cat new 1',
          valor: 200,
          criadoEm: new Date()
        },
        {
          id: 2,
          titulo: 'Cast',
          tipo: 'saida',
          categoria: 'Alug',
          valor: 100,
          criadoEm: new Date()
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api'

    this.get('/transacoes', () => {
      return this.schema.all('transacao')
    })

    this.post('/transacoes', (schema, request) => {
      const data = JSON.parse(request.requestBody)
      return schema.create('transacao', data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
