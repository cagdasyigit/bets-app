import React from 'react';
import Bets from './components/Bets';
import CheckoutProvider from './providers/CheckoutProvider/CheckoutProvider';

function App() {
  return (
    <CheckoutProvider>
      <Bets />
    </CheckoutProvider>
  );
}

export default App;
