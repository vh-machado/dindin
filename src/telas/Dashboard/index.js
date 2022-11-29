import React from 'react';
import { Flex } from '@chakra-ui/react';
import { Navigate, Outlet } from 'react-router-dom';

import { useSelector } from 'react-redux';
import { selectUser } from '../../servicos/userSlice';
import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';
import cores from '../../assets/cores';

function Dashboard() {
  // Autenticação de rota protegida
  const usuario = useSelector(selectUser);
  if (!usuario) {
    return <Navigate to="../login" />;
  }

  return (
    <Flex h="100%" minH="100vh" fontFamily={'Noto Sans'} bg={cores.cultured}>
      <Sidebar />

      <Flex w="100%" direction="column" py="24px" px="48px">
        <Header />
        <Outlet />
      </Flex>
    </Flex>
  );
}

export default Dashboard;
