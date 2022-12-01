import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  VStack,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../../servicos/userSlice';
import Resposta from '../../Login/componentes/Resposta';

// Validações
const caracteresEspeciais = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numeros = /[0-9]/;
const letras = /[a-z]/i;

function Formulario() {
  const [resposta, setResposta] = useState('erro');
  const [novaConta, setNovaConta] = useState({ agencia: null, conta: null });

  const {
    isOpen: isOpenResposta,
    onOpen: onOpenResposta,
    onClose: onCloseResposta,
  } = useDisclosure();

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  function InfoContaNova() {
    let { agencia, conta } = novaConta;
    return (
      <VStack alignItems={"start"}>
        <Text fontSize={"lg"}>Suas informações</Text>
        <Text>Agência: {agencia}</Text>
        <Text>Conta: {conta}</Text>
      </VStack>
    );
  }

  const conteudoResposta = {
    sucesso: {
      header: 'Bem-vindo!',
      body: <InfoContaNova />,
      colorScheme: 'teal',
      buttonTitle: 'Continuar',
      action: () => navigate('/dashboard/inicio'),
    },
    erro: {
      header: 'Usuário já cadastrado',
      body: 'Crie uma nova conta ou entre na sua conta',
      colorScheme: 'red',
      buttonTitle: 'Fechar',
      action: null,
    },
  };

  function cadastrarUsuario(values) {
    // Verifica se usuário já é cadastrado
    let usuariosCadastrados = JSON.parse(
      window.sessionStorage.usuariosCadastrados
    );

    const usuarioJaCadastrado = usuariosCadastrados.find(
      buscaUsuario => buscaUsuario.cpf === values.cpf
    );
    if (!usuarioJaCadastrado) {
      const agencia = '1';
      const conta = String(usuariosCadastrados.length + 1);
      const { nome, cpf, senha } = values;
      setNovaConta({ agencia, conta });

      usuariosCadastrados.push({
        nome,
        cpf,
        senha,
        agencia,
        conta,
        saldo: 1000,
        cartaoCredito: {
          numero: '0000 0000 0000 0000',
          validade: '01/26',
        },
        extrato: [],
      });
      window.sessionStorage.setItem(
        'usuariosCadastrados',
        JSON.stringify(usuariosCadastrados)
      );

      setResposta('sucesso');
      onOpenResposta();

      // Login da conta cadastrada
      dispatch(login({ cpf, nome, conta, agencia }));
    } else {
      onOpenResposta();
    }
  }

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();

        cadastrarUsuario(values);
      }, 3000);
    });
  }

  // Testes de validação
  const possuiNumeros = input => !numeros.test(input);
  const possuiCaracteresEspeciais = input => !caracteresEspeciais.test(input);
  const possuiLetras = input => !letras.test(input);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.nome} w={'25vw'} variant={'floating'}>
        <Input
          id="nome"
          placeholder="Nome"
          {...register('nome', {
            required: 'Campo obrigatório',
            validate: {
              possuiNumeros,
              possuiCaracteresEspeciais,
            },
          })}
        />
        <FormLabel htmlFor="nome">Nome</FormLabel>

        <FormErrorMessage>
          {errors.nome &&
            ((errors.nome?.type === 'possuiNumeros' &&
              'O nome não deve ter números') ||
              (errors.nome?.type === 'possuiCaracteresEspeciais' &&
                'O nome não deve ter caracteres especiais') ||
              errors.nome?.message)}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.cpf} w={'25vw'} variant={'floating'}>
        <Input
          id="cpf"
          placeholder="CPF"
          {...register('cpf', {
            required: 'Campo obrigatório',
            validate: { possuiCaracteresEspeciais, possuiLetras },
          })}
        />
        <FormLabel htmlFor="cpf">CPF</FormLabel>

        <FormErrorMessage>
          {errors.cpf &&
            ((errors.cpf?.type === 'possuiCaracteresEspeciais' &&
              'O CPF não deve ter pontuação') ||
              (errors.cpf?.type === 'possuiLetras' &&
                'O CPF não deve ter letras') ||
              errors.cpf?.message)}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.senha} w={'25vw'} variant={'floating'}>
        <Input
          id="senha"
          placeholder="Senha"
          type={'password'}
          {...register('senha', {
            required: 'Campo obrigatório',
            minLength: {
              value: 8,
              message: 'A senha deve ter no mínimo 8 dígitos',
            },
          })}
        />
        <FormLabel htmlFor="senha">Senha</FormLabel>

        <FormErrorMessage>
          {errors.senha && errors.senha?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        isInvalid={errors.confirmacaoSenha}
        w={'25vw'}
        variant={'floating'}
      >
        <Input
          id="confirmacaoSenha"
          placeholder="Confirmar senha"
          type={'password'}
          {...register('confirmacaoSenha', {
            required: 'Campo obrigatório',
            minLength: {
              value: 8,
              message: 'A senha deve ter no mínimo 8 dígitos',
            },
            validate: input =>
              input === getValues('senha') || 'As senhas não são iguais',
          })}
        />
        <FormLabel htmlFor="confirmacaoSenha">Confirmação de Senha</FormLabel>

        <FormErrorMessage>
          {errors.confirmacaoSenha && errors.confirmacaoSenha?.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        w="100%"
        mt={4}
        colorScheme="blue"
        isLoading={isSubmitting}
        type="submit"
      >
        Criar conta
      </Button>

      <Resposta
        {...{ isOpenResposta, onCloseResposta, resposta, conteudoResposta }}
      />
    </form>
  );
}

export default Formulario;
