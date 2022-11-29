import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';

//import { ColorModeSwitcher } from './ColorModeSwitcher';
//import { Logo } from './Logo';

import styledTheme from './styledTheme';
import Rotas from './rotas/Rotas';
import users from './mocks/users';

window.onbeforeunload = function () {
  window.onunload = function () {
    console.log('unload');
    window.sessionStorage.isMySessionActive = 'false';
  };
  return undefined;
};

window.onload = function () {
  window.sessionStorage.isMySessionActive = 'true';
  window.sessionStorage.setItem(
    'usuariosCadastrados',
    window.sessionStorage.usuariosCadastrados
      ? window.sessionStorage.usuariosCadastrados
      : JSON.stringify(users)
  );
  console.log(
    'onload',
    JSON.parse(window.sessionStorage.getItem('usuariosCadastrados'))
  );
};

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
