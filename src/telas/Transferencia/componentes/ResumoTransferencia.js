import React from 'react';
import { Flex, Text, Box, Button, HStack } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

import cores from '../../../assets/cores';
import SaldoTransferencia from './SaldoTransferencia';

function InfoTransferencia({ nome, valor }) {
  return (
    <Box bg={cores.periwinkleCrayola} p="16px" borderRadius="16px" my="10px">
      {valor == 0 ? (
        <Flex>
          <Icon
            icon={'material-symbols:info-rounded'}
            width={'24px'}
            color={cores.hanBlue}
          />
          <Text
            fontSize={'sm'}
            fontWeight={'medium'}
            color={cores.hanBlue}
            ms="10px"
          >
            Preencha os campos
          </Text>
        </Flex>
      ) : (
        <>
          <Text
            fontSize="sm"
            fontWeight="semibold"
            color={cores.liberty}
            mb="16px"
          >
            {nome}
          </Text>
          <HStack
            borderTopWidth={'1px'}
            borderColor={cores.cadetBlueCrayola}
            pt="16px"
          >
            <Icon
              icon={'ph:paper-plane-fill'}
              width={'20'}
              rotate={'45'}
              color={cores.liberty}
            />
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color={cores.liberty}
              letterSpacing="1px"
            >
              {valor}
            </Text>
          </HStack>
        </>
      )}
    </Box>
  );
}

function BotoesConfirmacao({ dadosTransferencia }) {
  let navigate = useNavigate();
  const { valor } = dadosTransferencia;

  return (
    <Flex justify={'space-between'} mt="16px">
      <Button
        w="47%"
        bg={cores.orangeSoda}
        fontSize="sm"
        fontWeight="bold"
        color="white"
        borderRadius="16px"
        py="24px"
        _hover={{
          bg: cores.vermilion,
        }}
        _active={{
          bg: cores.kobe,
        }}
        onClick={() => navigate('/')}
      >
        Cancelar
      </Button>

      <Button
        w="47%"
        bg={cores.greenCrayola}
        fontSize="sm"
        fontWeight="bold"
        color="white"
        borderRadius="16px"
        py="24px"
        _hover={{
          bg: cores.paoloVeroneseGreen,
        }}
        _active={{
          bg: cores.bottleGreen,
        }}
        isDisabled={valor == 0}
        onClick={() => navigate('/')}
      >
        Confirmar
      </Button>
    </Flex>
  );
}

export default function ResumoTransferencia({
  dadosTransferencia,
  setDadosTransferencia,
}) {
  const {
    destino: { nome },
    valor,
  } = dadosTransferencia;

  return (
    <Flex
      h="fit-content"
      w="40%"
      bg={"white"}
      m="24px"
      borderRadius="16px"
      p="24px"
      direction={'column'}
      justify={'flex-start'}
      shadow={"sm"}
    >
      <SaldoTransferencia />

      <Box>
        <Text fontSize="xl" fontWeight="bold" mt="24px" mb="10px">
          Resumo
        </Text>

        <Text fontSize="xs" fontWeight="medium">
          Transferência
        </Text>

        <InfoTransferencia {...{ nome, valor }} />

        <BotoesConfirmacao {...{ dadosTransferencia }} />
      </Box>
    </Flex>
  );
}
