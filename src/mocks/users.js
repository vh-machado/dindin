const users = [
  {
    nome: 'Victor Silva',
    cpf: '11111111111',
    senha: '12345678',
    agencia: '1000',
    conta: '10001000',
    saldo: 10000,
    cartaoCredito: {
      numero: '0000 0000 0000 0000',
      validade: '01/26',
    },
    extrato: [
      {
        tipo: 'recebido',
        envolvido: 'Pessoa que enviou',
        valor: 10,
        data: '7 out',
      },
      {
        tipo: 'enviado',
        envolvido: 'Pessoa que recebeu',
        valor: 15,
        data: '10 out',
      },
      {
        tipo: 'giftcard',
        envolvido: 'Netflix',
        valor: 23,
        data: '10 out',
      },
      {
        tipo: 'enviado',
        envolvido: 'Pessoa que recebeu',
        valor: 15,
        data: '10 out',
      },
      {
        tipo: 'enviado',
        envolvido: 'Pessoa que recebeu',
        valor: 6,
        data: '20 nov',
      },
      {
        tipo: 'recebido',
        envolvido: 'Pessoa que enviou',
        valor: 100,
        data: '23 nov',
      },
    ],
  },
  {
    nome: 'Marcus Loureiro',
    cpf: '00010001001',
    senha: '12345678',
    agencia: '1000',
    conta: '10001001',
    saldo: 3000,
    cartaoCredito: {
      numero: '0000 0000 0000 0000',
      validade: '01/26',
    },
    extrato: [
      {
        tipo: 'recebido',
        envolvido: 'Pessoa que enviou',
        valor: 10,
        data: '07 out',
      },
      {
        tipo: 'enviado',
        envolvido: 'Pessoa que recebeu',
        valor: 15,
        data: '10 out',
      },
      {
        tipo: 'enviado',
        envolvido: 'Pessoa que recebeu',
        valor: 6,
        data: '20 nov',
      },
      {
        tipo: 'recebido',
        envolvido: 'Pessoa que enviou',
        valor: 100,
        data: '23 nov',
      },
    ],
  },
];

export default users;
