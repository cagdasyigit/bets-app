import React from 'react';
import Home from './components/Home';
import CheckoutProvider from './providers/CheckoutProvider/CheckoutProvider';

function App() {
  return (
    <CheckoutProvider>
      <Home />
    </CheckoutProvider>
  );
}

export default App;
