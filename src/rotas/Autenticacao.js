import React from 'react';
import { Box, Button, Flex, Image } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from '../servicos/userSlice';
import cores from '../assets/cores';
import logo from '../assets/imagens/componentes/logo.svg';
import ilustracao from '../assets/imagens/componentes/ilustracao3.gif';

function Welcome() {
  const navigate = useNavigate();

  return (
    <Flex w="100vw" h="100vh" direction={'column'}>
      <Flex
        direction={'row'}
        bg="linear-gradient(144.06deg, #05204D -37.74%, #004290 0.22%, #6458AE 53.1%, #DD98D1 122.7%)"
        p="24px"
        align={'center'}
        justify={'space-between'}
      >
        <Image src={logo} w={'160px'} />
        <Box>
          <Button
            variant={'ghost'}
            color={'white'}
            _hover={{ bg: 'whiteAlpha.500' }}
            _active={{ bg: 'whiteAlpha.500' }}
            me="16px"
            onClick={() => navigate('login')}
          >
            Entrar
          </Button>
          <Button
            variant={'outline'}
            color={'white'}
            _hover={{ bg: 'whiteAlpha.500' }}
            _active={{ bg: 'whiteAlpha.500' }}
            onClick={() => navigate('cadastro')}
          >
            Cadastre-se
          </Button>
        </Box>
      </Flex>

      <Flex w="100%" h="100%" direction={'row'}>
        <Flex flex="1" bg={cores.lavenderWeb}>
          <Image src={ilustracao} w={'400px'} alignSelf={'center'} />
        </Flex>

        <Flex flex="1" bg={cores.maximumBluePurple}>
          <Image src={ilustracao} w={'400px'} alignSelf={'center'} />
        </Flex>
        <Flex flex="1" bg={cores.liberty}>
          <Image src={ilustracao} w={'400px'} alignSelf={'center'} />
        </Flex>
      </Flex>
    </Flex>
  );
}

export default function Autenticacao() {
  const usuario = useSelector(selectUser);

  return <Navigate to={ usuario ? 'dashboard/inicio' : 'login'} />;
}
