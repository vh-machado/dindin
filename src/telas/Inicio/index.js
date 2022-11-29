import React, { useEffect } from 'react';
import { Flex } from '@chakra-ui/react';

import Saldo from './componentes/Saldo';
import CartaoCredito from './componentes/CartaoCredito';
import ListaGiftCards from './componentes/ListaGiftCards';
import AtividadesRecentes from './componentes/AtividadesRecentes';

function Inicio() {

  return (
    <Flex
      grow="1"
      borderRadius="16px"
      p="12px"
      direction={'row'}
      alignItems={'stretch'}
      alignContent={'flex-start'}
      wrap="wrap"
    >
      <Saldo />
      <CartaoCredito />
      <ListaGiftCards />
      <AtividadesRecentes />
    </Flex>
  );
}

export default Inicio;
