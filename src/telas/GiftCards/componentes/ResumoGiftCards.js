import React from 'react';
import { Flex, Text, Box, Button, HStack, Image } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

import cores from '../../../assets/cores';
import SaldoTransferencia from '../../Transferencia/componentes/SaldoTransferencia';
import formataMes from '../../../servicos/formataMes';
import useUsuarioLogado from '../../../hooks/useUsuarioLogado';
import formataValor from '../../../servicos/formataValor';

function InfoTransferencia({ logo, valor }) {
  return (
    <Box
      bg={cores.periwinkleCrayola}
      p="16px"
      borderRadius="16px"
      my="10px"
      justifyContent={'start'}
      alignItems={'start'}
    >
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
            Escolha um gift card
          </Text>
        </Flex>
      ) : (
        <>
          <Flex
            bg={'gray.100'}
            mb="16px"
            p="10px"
            borderWidth={'1.6px'}
            borderColor={cores.spanishGray}
            borderRadius="8px"
            w="fit-content"
          >
            <Image src={logo} w="60px" />
          </Flex>
          <HStack
            borderTopWidth={'1px'}
            borderColor={cores.cadetBlueCrayola}
            pt="16px"
          >
            <Icon
              icon={'eva:gift-outline'}
              width={'20'}
              color={cores.liberty}
            />
            <Text
              fontSize="lg"
              fontWeight="semibold"
              color={cores.liberty}
              letterSpacing="1px"
            >
              {formataValor(valor)}
            </Text>
          </HStack>
        </>
      )}
    </Box>
  );
}

function BotoesConfirmacao({ servico, valor }) {
  const navigate = useNavigate();
  const usuarioLogado = useUsuarioLogado();
  let { cpf, saldo, extrato } = useUsuarioLogado();

  function finalizarCompra() {
    const timeElapsed = Date.now();
    const hoje = new Date(timeElapsed);
    const data = hoje.getDate() + ' ' + formataMes(hoje.getMonth() + 1);

    const compra = {
      tipo: 'giftcard',
      envolvido: servico,
      valor,
      data,
    };

    // Verifica saldo
    if (saldo >= valor) {
      saldo -= valor;
      extrato.push(compra);

      const usuarios = JSON.parse(window.sessionStorage.usuariosCadastrados);
      let buscaUsuario = usuarios.find(usuario => usuario.cpf === cpf);
      buscaUsuario.saldo = saldo;
      buscaUsuario.extrato = extrato;
      window.sessionStorage.setItem(
        'usuariosCadastrados',
        JSON.stringify(usuarios)
      );

      navigate('/dashboard/inicio');
    } else {
      alert('Saldo insuficiente!');
    }
  }

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
        onClick={() => navigate('/dashboard/inicio')}
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
        isDisabled={servico == null || valor == 0}
        onClick={() => finalizarCompra()}
      >
        Confirmar
      </Button>
    </Flex>
  );
}

export default function ResumoGiftCards({ compraGiftCard }) {
  const {
    loja: { logo, servico },
    valor,
  } = compraGiftCard;

  return (
    <Flex
      h="fit-content"
      w="40%"
      bg={'white'}
      m="24px"
      borderRadius="16px"
      p="24px"
      direction={'column'}
    >
      <SaldoTransferencia />

      <Box>
        <Text fontSize="xl" fontWeight="bold" mt="24px" mb="10px">
          Resumo
        </Text>

        <Text fontSize="xs" fontWeight="medium">
          Gift Card
        </Text>

        <InfoTransferencia {...{ logo, valor }} />

        <BotoesConfirmacao {...{ servico, valor }} />
      </Box>
    </Flex>
  );
}
