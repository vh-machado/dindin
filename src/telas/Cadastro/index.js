import React from 'react';
import { Flex } from '@chakra-ui/react';

import Formulario from './componentes/Formulario';

function Cadastro() {

  return (
    <Flex h="100vh" align="center" justify="center" fontSize="xl">
      <Formulario />
    </Flex>
  );
}

export default Cadastro;
