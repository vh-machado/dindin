import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import users from '../mocks/users';
import { selectUser } from '../servicos/userSlice';

export default function useUsuarioLogado() {
  const [usuarioLogado, setUsuarioLogado] = useState({});
  const usuario = useSelector(selectUser);
    
  useEffect(() => {
    // Dados do usuário logado
    const dadosRetorno = users.find(
      buscaUsuario => buscaUsuario.cpf === usuario.cpf
    );
    console.log(dadosRetorno)
    setUsuarioLogado(dadosRetorno);
  }, []);

  return usuarioLogado;
}
