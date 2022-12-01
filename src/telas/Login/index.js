import React, { useState } from 'react';
import { Image, Button, Flex, Text, useDisclosure } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

import Formulario from './componentes/Formulario';
import logo from '../../assets/imagens/componentes/logo.svg';
import cores from '../../assets/cores';

function Login() {

  let navigate = useNavigate();

  return (
    <Flex
      h="100vh"
      fontSize="xl"
      bg="linear-gradient(144.06deg, #05204D -37.74%, #004290 0.22%, #6458AE 53.1%, #DD98D1 122.7%)"
      p="16px"
      pe="0px"
      direction={'column'}
      justify={'center'}
      align={'center'}
    >
      <Image src={logo} w={'180px'} />
      <Text fontSize={'xl'} fontWeight={'light'} color={'white'} m={'24px'}>
        Entre na sua conta
      </Text>
      <Flex direction={'column'}>
        <Flex
          direction={'column'}
          bg={cores.cultured}
          p="32px"
          borderRadius={'8px'}
          justify={'center'}
          align={'center'}
          shadow={'xl'}
        >
          <Formulario />
        </Flex>

        <Flex
          direction={'row'}
          p={'8px'}
          borderWidth={'1px'}
          borderColor={'white'}
          borderRadius={'8px'}
          mt={'16px'}
          align={'center'}
          justify={'center'}
        >
          <Text fontSize={'md'} fontWeight={'light'} color={'white'} me="10px">
            Não possui conta?
          </Text>

          <Button
            p="16px"
            variant={'ghost'}
            color={'white'}
            fontSize={'md'}
            fontWeight={'bold'}
            _hover={{ bg: 'white', color: cores.greenCrayola }}
            onClick={() => navigate('/cadastro')}
          >
            Criar conta
          </Button>
        </Flex>
      </Flex>

    </Flex>
  );
}

export default Login;
