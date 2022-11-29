import React from 'react';
import { Flex } from '@chakra-ui/react';

import Formulario from './Formulario';

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
      justify="center"
      alignContent={'center'}
      wrap="wrap"
    >
      <Formulario {...{ dadosTransferencia, setDadosTransferencia }} />
    </Flex>
  );
}
