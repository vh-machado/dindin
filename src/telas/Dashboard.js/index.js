import React from 'react';
import { Flex, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import Sidebar from './componentes/Sidebar';
import Header from './componentes/Header';
import cores from '../../assets/cores';

function Dashboard() {
  return (
    <Flex
      h="100%"
      minH="100vh"
      fontFamily={'Noto Sans'}
      bg={cores.cultured}
    >
      <Sidebar />
      
      <Flex w="100%" direction="column" py="24px" px="48px">
        <Header />
        <Outlet />
      </Flex>
      
    </Flex>
  );
}

export default Dashboard;
