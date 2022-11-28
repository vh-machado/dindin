import React from 'react';
import { Box, Flex } from '@chakra-ui/react';

import Formulario from './componentes/Formulario';

import fundo from '../../assets/imagens/fundos/fundologin.webp';

function Login() {
  return (
    <Flex
      h="100vh"
      fontSize="xl"
      bgImage={fundo}
      bgSize="cover"
    >
      <Flex bg="white" p="8" m="2" borderRadius="10" align={"center"}>
        <Formulario />
      </Flex>
    </Flex>
  );
}

export default Login;
