import React from 'react';
import { Box, Flex, StackDivider, Text, VStack } from '@chakra-ui/react';
import { Icon } from '@iconify/react';

import cores from '../../../assets/cores';
import useUsuarioLogado from '../../../hooks/useUsuarioLogado';
import formataValor from '../../../servicos/formataValor';

const tiposOperacoes = {
  recebido: {
    texto: 'Para você',
    icone: <Icon icon={'ph:paper-plane-fill'} width={'20'} rotate={'-45'} />,
  },
  enviado: {
    texto: 'Enviou para',
    icone: <Icon icon={'ph:paper-plane-fill'} width={'20'} rotate={'45'} />,
  },
  giftcard: {
    texto: 'Gift card',
    icone: <Icon icon="eva:gift-outline" width={'20'} />,
  },
};

function ItemAtividade({ tipo, envolvido, valor, data }) {
  return (
    <Flex
      direction={'row'}
      align="center"
      justify={'space-between'}
      w="100%"
      whiteSpace={'nowrap'}
      py="4px"
    >
      <Flex direction={'row'} align="center">
        <Flex
          borderWidth={'1px'}
          color={cores.liberty}
          bg={cores.periwinkleCrayola}
          borderRadius="10"
          p="8px"
          justify="flex-start"
          align={'center'}
          minW="100px"
          me="30px"
        >
          {tiposOperacoes[tipo]?.icone}
          <Text fontSize="10" fontWeight={'semibold'} ms="6px">
            {tiposOperacoes[tipo]?.texto}
          </Text>
        </Flex>

        <Text fontSize={'xs'} fontWeight={'semibold'}>
          {envolvido}
        </Text>
      </Flex>

      <Flex direction={'row'} align="center">
        <Text
          fontSize={'12px'}
          fontWeight={'light'}
          color={cores.spanishGray}
          mx="30px"
        >
          {data}
        </Text>
        <Text
          fontSize={'md'}
          fontWeight={'medium'}
          color={tipo === 'recebido' ? cores.greenCrayola : cores.orangeSoda}
        >
          {(tipo === 'recebido' ? '+ ' : '- ') + formataValor(valor)}
        </Text>
      </Flex>
    </Flex>
  );
}

export default function AtividadesRecentes() {
  const { extrato } = useUsuarioLogado();
  const atividadeRecente = extrato?.filter((item, index) => index < 3);

  return (
    <Box
      flex="1"
      m="12px"
      bg="white"
      p="24px"
      borderRadius={'16px'}
      shadow={'sm'}
    >
      <Text fontSize={'sm'} fontWeight={'semibold'} mb="24px">
        Atividades recentes
      </Text>
      <VStack
        alignItems={'flex-start'}
        divider={<StackDivider borderColor="gray.200" />}
      >
        {atividadeRecente?.map(function (item, index) {
          return <ItemAtividade key={index} {...item} />;
        })}
      </VStack>
    </Box>
  );
}
