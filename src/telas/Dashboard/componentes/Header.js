import React, {useEffect} from 'react';
import {
  Box,
  Flex,
  Image,
  Text,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  Button,
  VStack,
  PopoverFooter,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useNavigate } from 'react-router-dom';

import { logout, selectUser } from '../../../servicos/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import cores from '../../../assets/cores';
import fotoUsuario from '../../../assets/imagens/componentes/userprofile.svg';

function PopoverConta({conta, agencia}) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Popover placement="bottom-end">
      <PopoverTrigger>
        <Box
          w="30px"
          h="30px"
          borderWidth={'2px'}
          borderColor={cores.liberty}
          mx="16px"
          borderRadius="10px"
          overflow={'hidden'}
        >
          <Image w="100%" src={fotoUsuario} />
        </Box>
      </PopoverTrigger>
      <PopoverContent w="150px">
        <PopoverHeader color={cores.liberty} fontWeight="bold" fontSize="xs">
          Perfil
        </PopoverHeader>
        <PopoverArrow />
        <PopoverBody p="16px">
          <VStack alignItems={"start"} spacing={'8px'}>
            <Text fontSize="xs" fontWeight="medium" color={cores.hanBlue}>Agência<br/>{agencia}</Text>
            <Text fontSize="xs" fontWeight="medium" color={cores.hanBlue}>Conta<br/>{conta}</Text>
          </VStack>
        </PopoverBody>
        <PopoverFooter p="0px">
          <Button
            w="100%"
            variant={'ghost'}
            color={cores.orangeSoda}
            justifyContent="flex-start"
            borderRadius={'0px'}
            onClick={() => {
              console.log('deslogando');
              dispatch(logout());
              navigate('/')
            }}
          >
            <Icon icon="material-symbols:logout-rounded" width="20px" />
            <Text fontSize="xs" fontWeight="medium" ms="10px">
              Sair
            </Text>
          </Button>
        </PopoverFooter>
      </PopoverContent>
    </Popover>
  );
}

export default function Header() {
  const usuario = useSelector(selectUser);

  useEffect(() => {
    console.log("usuario: ", usuario)
  },[usuario])

  return (
    <Flex
      flexDirection={'row'}
      minH="10vh"
      justifyContent="flex-end"
      alignItems="center"
      mx="24px"
      color={cores.liberty}
    >
      <Text fontSize="xs" fontWeight={'bold'}>
        {usuario?.nome}
      </Text>

      <PopoverConta {...usuario}/>

      <Icon icon="fa-regular:bell" width="20px" />
    </Flex>
  );
}
