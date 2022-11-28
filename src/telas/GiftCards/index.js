import React, { useState } from 'react';
import { Flex } from '@chakra-ui/react';

import GridGiftCards from './componentes/GridGiftCards';
import ResumoGiftCards from './componentes/ResumoGiftCards';

export default function GiftCards() {
  const [compraGiftCard, setCompraGiftCard] = useState({
    loja: {
      servico: null,
      logo: null,
      background: null,
    },
    valor: 0,
  });

  return (
    <Flex direction={'row'} alignContent={'flex-start'}>
      <GridGiftCards {...{ compraGiftCard, setCompraGiftCard }} />
      <ResumoGiftCards {...{ compraGiftCard }} />
    </Flex>
  );
}
