import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';

import DadosTransferencia from './componentes/DadosTransferencia';
import ResumoTransferencia from './componentes/ResumoTransferencia';

export default function Transferencia() {
  const [dadosTransferencia, setDadosTransferencia] = useState({
    destino: { agencia: null, conta: null, nome: null },
    valor: 0,
  });

  return (
    <Flex grow="1" direction={'row'} alignContent={'flex-start'} alignItems={'stretch'} >
      <DadosTransferencia {...{dadosTransferencia, setDadosTransferencia}} />
      <ResumoTransferencia {...{dadosTransferencia, setDadosTransferencia}} />
    </Flex>
  );
}
