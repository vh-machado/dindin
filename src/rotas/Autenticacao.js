import React from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectUser } from '../servicos/userSlice';

export default function Autenticacao() {
  const usuario = useSelector(selectUser);

  return <Navigate to={ usuario ? 'dashboard/inicio' : 'login'} />;
}
