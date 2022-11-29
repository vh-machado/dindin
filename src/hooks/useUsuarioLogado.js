import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import { selectUser } from '../servicos/userSlice';

export default function useUsuarioLogado() {
  const [usuarioLogado, setUsuarioLogado] = useState({});
  const usuario = useSelector(selectUser);

  useEffect(() => {
    // Dados do usuário logado
    const dadosRetorno = JSON.parse(
      window.sessionStorage.getItem('usuariosCadastrados')
    ).find(buscaUsuario => buscaUsuario.cpf === usuario.cpf);
    setUsuarioLogado(dadosRetorno);
  }, []);

  return usuarioLogado;
}
