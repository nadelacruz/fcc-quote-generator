import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import QuoteGenerator from './components/QuoteGenerator';

function App() {
  return (
    <ChakraProvider>
      <QuoteGenerator />
    </ChakraProvider>
  );
}

export default App;
