import React from 'react';
import { Button, Flex } from '@chakra-ui/react';
import { Navigate, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from '../servicos/userSlice';

function Welcome() {
  const navigate = useNavigate();

  return (
    <Flex>
      <Button onClick={() => navigate('login')}>Entrar</Button>
      <Button onClick={() => navigate('cadastro')}>Cadastre-se</Button>
    </Flex>
  );
}

export default function Autenticacao() {
  const usuario = useSelector(selectUser);

  return usuario ? <Navigate to={'dashboard/inicio'} /> : <Welcome />;
}
