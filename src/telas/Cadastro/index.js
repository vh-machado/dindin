import React from 'react';
import { Image, Button, Flex, Text } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import Formulario from './componentes/Formulario';
import cores from '../../assets/cores';
import logo from '../../assets/imagens/componentes/logo.svg';
import ilustracao from '../../assets/imagens/componentes/ilustracao.png';

function Cadastro() {
  let navigate = useNavigate();

  return (
    <Flex
      direction={'row'}
      h="100vh"
      alignItems={'flex-start'}
      justifyContent={'flex-start'}
      bg="linear-gradient(144.06deg, #05204D -37.74%, #004290 0.22%, #6458AE 53.1%, #DD98D1 122.7%)"
    >
      <Flex w="100%" p="64px" direction={'column'}>
        <Image src={logo} w={'180px'} alignSelf={'flex-start'} />
        <Text
          fontSize={'md'}
          fontWeight={'light'}
          color={'white'}
          alignSelf={'center'}
          my="40px"
        >
          Sinta-se em casa e administre seu dindin
        </Text>
        <Image src={ilustracao} w={'400px'} alignSelf={'center'} />
      </Flex>
      <Flex
        h="100%"
        bg={cores.cultured}
        direction={'column'}
        py="40px"
        px="80px"
        justify={'space-around'}
        align={'center'}
      >
        <Flex
          direction={'row'}
          align={'center'}
          justify={'center'}
          alignSelf={'flex-end'}
        >
          <Text fontSize={'md'} fontWeight={'light'} me="10px">
            Já possui conta?
          </Text>

          <Button
            p="16px"
            variant={'ghost'}
            fontSize={'md'}
            fontWeight={'bold'}
            color={cores.hanBlue}
            _hover={{ bg: 'white', color: cores.greenCrayola }}
            onClick={() => navigate('/login')}
          >
            Entrar
          </Button>
        </Flex>
        <Flex w="100%" direction={'column'}>
          <Text fontSize={'3xl'} fontWeight={'bold'} alignSelf={'flex-end'}>
            Crie sua conta
          </Text>
          <Text
            fontSize={'md'}
            fontWeight={'medium'}
            alignSelf={'flex-end'}
            color={cores.spanishGray}
          >
            Grátis e fácil
          </Text>
        </Flex>
        <Formulario />
      </Flex>
    </Flex>
  );
}

export default Cadastro;
