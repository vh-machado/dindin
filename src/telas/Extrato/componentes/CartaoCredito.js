import { Box, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

import fundoCartao from '../../../assets/imagens/fundos/cartao.jpg';
import logoDindin from '../../../assets/imagens/logomarca-dindin.svg';
import logoVisa from '../../../assets/imagens/logomarca-visa.svg';
import useUsuarioLogado from '../../../hooks/useUsuarioLogado';

export default function CartaoCredito() {
  const {cartaoCredito} = useUsuarioLogado();

  return (
    <Box
      minW='350px'
      bgImg={fundoCartao}
      bgPosition={"right"}
      bgSize="cover"
      bgRepeat="no-repeat"
      m="12px"
      p="20px"
      color="white"
      borderRadius="16px"
      shadow={'lg'}
    >
      <Flex justify={'space-between'} align="center">
        <Flex direction={'row'} align="center">
          <Image src={logoDindin} w="10%" me="10px" />
          <Text fontSize={'sm'} fontWeight={'semibold'}>
            Premium Card
          </Text>
        </Flex>

        <Image src={logoVisa} w="40px" />
      </Flex>

      <Text fontSize={'md'} fontWeight={'semibold'} letterSpacing="2px" mb="10px" mt="30px">
        {cartaoCredito?.numero}
      </Text>
      <Text fontSize={'10px'} fontWeight={'thin'}>
        Validade
      </Text>
      <Text fontSize={'10px'} fontWeight={'thin'}>
        {cartaoCredito?.validade}
      </Text>
    </Box>
  );
}
