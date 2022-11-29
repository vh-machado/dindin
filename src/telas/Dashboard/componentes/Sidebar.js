import React, { useEffect, useState } from 'react';
import { Button, Flex, Text, Box,Image } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import { useLocation, useNavigate } from 'react-router-dom';

import logo from '../../../assets/imagens/componentes/logo.svg'

const botoesServicos = [
  {
    pagina: '/dashboard/inicio',
    icone: <Icon icon="akar-icons:home-alt1" width={'24px'} />,
    texto: 'Início',
  },
  {
    pagina: '/dashboard/transferencia',
    icone: <Icon icon="fa-regular:paper-plane" width={'24px'} />,
    texto: 'Transferência',
  },
  {
    pagina: '/dashboard/extrato',
    icone: <Icon icon="uil:bill" width={'24px'} />,
    texto: 'Extrato',
  },
  {
    pagina: '/dashboard/giftcards',
    icone: <Icon icon="eva:gift-outline" width={'24px'} />,
    texto: 'Gift Cards',
  },
];

const botoesConfiguracoes = [
  {
    pagina: '/dashboard/conta',
    icone: <Icon icon="mi:settings" width={'24px'} />,
    texto: 'Conta',
  },
  {
    pagina: '/dashboard/sobre',
    icone: <Icon icon="uil:info-circle" width={'24px'} />,
    texto: 'Sobre',
  },
];

function Servicos({ paginaAtual, setPaginaAtual, navigate }) {
  const location = useLocation();

  useEffect(() => {
    // Atualiza a página em destaque
    setPaginaAtual(location.pathname);
  }, [location]);

  return (
    <>
      <Text variant="tituloSidebar">Serviços</Text>
      {botoesServicos.map(function ({ pagina, icone, texto }) {
        return (
          <Button
            key={pagina}
            variant={paginaAtual === pagina ? 'sidebarAtiva' : 'sidebar'}
            onClick={() => navigate(pagina)}
          >
            <Flex align="center">
              {icone}
              <Text variant="botaoSidebar">{texto}</Text>
            </Flex>
            <Icon icon="eva:arrow-ios-forward-fill" width={'24px'} />
          </Button>
        );
      })}
    </>
  );
}

function Configuracoes({ paginaAtual, setPaginaAtual, navigate }) {
  return (
    <>
      <Text variant={'tituloSidebar'}>Configurações</Text>
      {botoesConfiguracoes.map(function ({ pagina, icone, texto }) {
        return (
          <Button
            key={pagina}
            variant={paginaAtual === pagina ? 'sidebarAtiva' : 'sidebar'}
            /*
            onClick={() => {
              navigate(pagina);
              setPaginaAtual(pagina);
            }}*/
          >
            <Flex align="center">
              {icone}
              <Text variant="botaoSidebar">{texto}</Text>
            </Flex>
            <Icon icon="eva:arrow-ios-forward-fill" width={'24px'} />
          </Button>
        );
      })}
    </>
  );
}

export default function Sidebar() {
  const [paginaAtual, setPaginaAtual] = useState('/');
  let navigate = useNavigate();

  return (
    <Box
      w="25%"
      ps="12px"
      pt="12px"
      bg="linear-gradient(144.06deg, #05204D -37.74%, #004290 0.22%, #6458AE 53.1%, #DD98D1 122.7%)"
      shadow={"2xl"}

    >
      <Image src={logo} w="140px" ms="16px" my="32px"/>
      <Servicos {...{ paginaAtual, setPaginaAtual, navigate }} />
      <Configuracoes {...{ paginaAtual, setPaginaAtual, navigate }} />
    </Box>
  );
}
