import React from 'react';
import { ChakraProvider, Button } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import theme from './theme/theme';
import { Router } from './route/Router';

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router/>
        <Button colorScheme="teal">Button</Button>
      </BrowserRouter>
    </ChakraProvider>
  )
}
