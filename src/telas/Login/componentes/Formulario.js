import React, { useState } from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useDisclosure,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { login } from '../../../servicos/userSlice';
import Resposta from './Resposta';

function Formulario() {
  const [resposta, setResposta] = useState('erro');

  const {
    isOpen: isOpenResposta,
    onOpen: onOpenResposta,
    onClose: onCloseResposta,
  } = useDisclosure();

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const conteudoResposta = {
    sucesso: {
      header: 'Bem-vindo!',
      body: 'Login realizado com sucesso',
      colorScheme: 'teal',
      buttonTitle: 'Continuar',
      action: () => navigate('/dashboard/inicio')
    },
    erro: {
      header: 'Usuário não encontrado',
      body: 'Verifique se as informações inseridas estão corretas',
      colorScheme: 'red',
      buttonTitle: 'Fechar',
      action: null
    },
  };

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const verificaUsuario = ({ agencia, conta, senha }) => {
    return JSON.parse(window.sessionStorage.usuariosCadastrados).find(
      user =>
        user.agencia === agencia && user.conta === conta && user.senha === senha
    );
  };

  function loginUsuario(values) {
    // Verifica se existe usuário cadastrado
    const buscaUsuario = verificaUsuario({ ...values });
    if (buscaUsuario) {
      setResposta('sucesso');
      onOpenResposta();

      // Processo de login
      console.log('logando');
      const { cpf, nome } = buscaUsuario;
      const { agencia, conta } = values;
      dispatch(login({ cpf, nome, agencia, conta }));
    } else {
      onOpenResposta();
    }
  }

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();

        loginUsuario(values);
      }, 1000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={errors.agencia} w={'25vw'} variant={'floating'}>
        <Input
          id="agencia"
          placeholder="Agência"
          type="number"
          {...register('agencia', {
            required: 'Campo obrigatório',
            maxLength: {
              value: 4,
              message: 'O número da agência não pode exceder 4 dígitos',
            },
          })}
        />
        <FormLabel htmlFor="agencia">Agência</FormLabel>

        <FormErrorMessage>
          {errors.agencia && errors.agencia?.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl isInvalid={errors.conta} w={'25vw'} variant={'floating'}>
        <Input
          id="conta"
          placeholder="Conta"
          type="number"
          {...register('conta', {
            required: 'Campo obrigatório',
            maxLength: {
              value: 8,
              message: 'O número da conta não pode exceder 8 dígitos',
            },
          })}
        />
        <FormLabel htmlFor="conta">Conta</FormLabel>

        <FormErrorMessage>
          {errors.conta && errors.conta?.message}
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

      <Button
        w="100%"
        mt={4}
        colorScheme="blue"
        isLoading={isSubmitting}
        type="submit"
      >
        Entrar
      </Button>

      <Resposta {...{ isOpenResposta, onCloseResposta, resposta, conteudoResposta }} />
    </form>
  );
}

export default Formulario;
