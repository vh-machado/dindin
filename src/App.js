import React, { useEffect } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import { Routes, Route, useNavigate } from 'react-router-dom';

//import { ColorModeSwitcher } from './ColorModeSwitcher';
//import { Logo } from './Logo';
import Cadastro from './telas/Cadastro';
import Login from './telas/Login';
import Transferencia from './telas/Transferencia';
import Inicio from './telas/Inicio';
import styledTheme from './styledTheme';
import Dashboard from './telas/Dashboard.js';
import Extrato from './telas/Extrato';
import GiftCards from './telas/GiftCards';

let usuarioLogado = true;

function App() {
  let navigate = useNavigate();

  useEffect(() => {
    navigate(usuarioLogado ? '/' : '/login');
  }, []);

  return (
    <ChakraProvider theme={styledTheme}>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Inicio />} />
          <Route path="/transferencia" element={<Transferencia />} />
          <Route path="/extrato" element={<Extrato />} />
          <Route path="/giftcards" element={<GiftCards />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
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
