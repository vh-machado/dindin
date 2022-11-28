import React from 'react';
import { Box, Button, Text, Flex } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

import cores from '../../../assets/cores';
import fundoSaldo from '../../../assets/imagens/fundos/saldo.svg';

export default function Saldo() {
  return (
    <Box
      flex="1"
      m="12px"
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
      <Flex justifyContent="flex-end">
        <Button
          minW="130px"
          justifyContent="space-between"
          variant={'outline'}
          bg="transparent"
          fontSize={'xs'}
          fontWeight="regular"
          _active={{
            bg: cores.maximumBluePurple,
          }}
          _hover={{
            bg: 'rgba(100, 88, 174, 0.32)',
          }}
        >
          <Text>Extrato</Text>
          <Icon icon="eva:arrow-ios-forward-fill" width={'24px'} />
        </Button>
      </Flex>
    </Box>
  );
}
