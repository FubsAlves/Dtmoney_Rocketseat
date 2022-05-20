import { useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global';
import Modal from 'react-modal';
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsProvider } from './hooks/useTransactions';

Modal.setAppElement('#root');

export function App() {
  
  const [isNewTransactionModalOpen, SetIsNewTransactionModalOpen] = useState(false);

    function handleOpenNewTransactionModal() {
        SetIsNewTransactionModalOpen(true);
    }

    function handleCloseNewTransactionModal() {
        SetIsNewTransactionModalOpen(false);
    }

  return (
   <TransactionsProvider>
        <GlobalStyle /> 
        <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
        <NewTransactionModal
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}
        />
        <Dashboard />
   </TransactionsProvider>
  );
} 