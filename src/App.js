import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

//import { ColorModeSwitcher } from './ColorModeSwitcher';
//import { Logo } from './Logo';

import styledTheme from './styledTheme';
import Rotas from './rotas/Rotas';


function App() {
  return (
    <ChakraProvider theme={styledTheme}>
      <Rotas />
      {/* 
      <Cadastro />
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Logo h="40vmin" pointerEvents="none" />
            <Text>
              Edit <Code fontSize="xl">src/App.js</Code> and save to reload.
            </Text>
            <Link
              color="teal.500"
              href="https://chakra-ui.com"
              fontSize="2xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
      </Box>
      */}
    </ChakraProvider>
  );
}

export default App;
