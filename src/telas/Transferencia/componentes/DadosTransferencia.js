import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

import Formulario from './Formulario';
import header from '../../../assets/imagens/componentes/header-transferencia.png';

export default function DadosTransferencia({
  dadosTransferencia,
  setDadosTransferencia,
}) {
  return (
    <Flex
      h="100%"
      w="60%"
      borderRadius="16px"
      p="16px"
      direction={'column'}
      justify="flex-start"
      alignContent={'center'}
      wrap="wrap"
    >
      <Image src={header} m="8px" mb="48px"/>
      <Formulario {...{ dadosTransferencia, setDadosTransferencia }} />
    </Flex>
  );
}
