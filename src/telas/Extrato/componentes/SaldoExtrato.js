import React from 'react';
import { Box, Text } from '@chakra-ui/react';

import fundoSaldo from '../../../assets/imagens/fundos/saldo.svg';
import formataValor from '../../../servicos/formataValor';
import useUsuarioLogado from '../../../hooks/useUsuarioLogado';

export default function SaldoExtrato() {
  const { saldo } = useUsuarioLogado();

  return (
    <Box
      borderRadius="16px"
      p="20px"
      color="white"
      bgImg={fundoSaldo}
      bgSize="cover"
      bgRepeat="no-repeat"
      m="12px"
      shadow={'lg'}
    >
      <Text pb="20px" fontSize={'sm'} fontWeight={'400'}>
        Saldo
      </Text>
      <Text pb="20px" fontSize={'xl'} fontWeight={'500'} letterSpacing="2px">
        {formataValor(saldo)}
      </Text>
    </Box>
  );
}
