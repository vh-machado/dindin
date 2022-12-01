import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Cadastro from '../telas/Cadastro';
import Login from '../telas/Login';
import Transferencia from '../telas/Transferencia';
import Inicio from '../telas/Inicio';
import Dashboard from '../telas/Dashboard';
import Extrato from '../telas/Extrato';
import GiftCards from '../telas/GiftCards';
import Autenticacao from './Autenticacao';

export default function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<Autenticacao />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="inicio" element={<Inicio />} >
          <Route path=":bem-vindo" element={<Inicio />} />
          <Route path=":novo" element={<Inicio />} />
        </Route>
        <Route path="transferencia" element={<Transferencia />} />
        <Route path="extrato" element={<Extrato />} />
        <Route path="giftcards" element={<GiftCards />} >
          <Route path=":giftcardServico" element={<GiftCards />} />
        </Route>
      </Route>
      <Route path="cadastro" element={<Cadastro />} />
      <Route path="login" element={<Login />} />
    </Routes>
  );
}
