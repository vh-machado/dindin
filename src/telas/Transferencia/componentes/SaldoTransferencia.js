import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import fundoSaldo from '../../../assets/imagens/fundos/saldo.svg';

export default function SaldoTransferencia() {
  return (
    <Box
      borderRadius="16px"
      p="20px"
      color="white"
      bgImg={fundoSaldo}
      bgSize="cover"
      bgRepeat="no-repeat"
      shadow={'lg'}
    >
      <Text pb="20px" fontSize={'sm'} fontWeight={'400'}>
        Saldo
      </Text>
      <Text pb="20px" fontSize={'xl'} fontWeight={'500'} letterSpacing="2px">
        R$ 1.212,00
      </Text>
    </Box>
  );
}
