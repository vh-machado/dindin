import React from 'react';
import { Flex, Box } from '@chakra-ui/react';

import cores from '../../assets/cores';
import SaldoExtrato from './componentes/SaldoExtrato';
import CartaoCredito from './componentes/CartaoCredito';
import ListaExtrato from './componentes/ListaExtrato';

export default function Extrato() {
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
      <ListaExtrato />
      <Flex direction={'column'}>
        <SaldoExtrato />
        <CartaoCredito />
      </Flex>
    </Flex>
  );
}
