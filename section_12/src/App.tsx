import React from 'react';
import { ChakraProvider, Button } from '@chakra-ui/react';

export default function App() {
  return (
    <ChakraProvider>
      <Button colorScheme="teal">Button</Button>
    </ChakraProvider>
  )
}
