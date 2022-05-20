import React from 'react';
import ReactDOM from 'react-dom/client';
import { createServer, Model } from 'miragejs';
import { App }  from './App';

createServer({
  models: {
    transaction: Model,
  },

  seeds(server) {
    server.db.loadData({
        transactions: [
          {
              id: 1,
              title: 'Freelance de Website',
              type: 'deposit',
              category: 'Dev',
              amount: 6000,
              createdAt: new Date(Date.now())
          },
          {
            id: 2,
            title: 'Freelance de Website',
            type: 'deposit',
            category: 'Dev',
            amount: 10000,
            createdAt: new Date(Date.now())
          },
          {
            id: 3,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'Despesa',
            amount: -900,
            createdAt: new Date(Date.now())
          },
          {
            id: 4,
            title: 'Mercado',
            type: 'withdraw',
            category: 'Despesa',
            amount: -2000,
            createdAt: new Date(Date.now())
          },
          {
            id: 5,
            title: 'Reforma',
            type: 'withdraw',
            category: 'Despesa',
            amount: -2000,
            createdAt: new Date(Date.now())
          },
          {
            id: 6,
            title: 'Poupança',
            type: 'deposit',
            category: 'Finanças',
            amount: 1500,
            createdAt: new Date(Date.now())
          },
        ],
    })
  },
  
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody);

        return schema.create('transaction', data)
    })

  }
})

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);