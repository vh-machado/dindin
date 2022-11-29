import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import users from '../../../mocks/users';
import { useDispatch } from 'react-redux';
import { login } from '../../../servicos/userSlice';

const caracteresEspeciais = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numeros = /[0-9]/;
const letras = /[a-z]/i;

function Formulario() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

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

      // Login da conta cadastrada
      dispatch(login({ cpf, nome, conta, agencia }));

      // Navegação para o Início
      navigate('/dashboard/inicio');
    } else {
      alert('Você já possui uma conta!');
    }
  }

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
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
    <Flex direction={'column'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.nome} w={'25vw'}>
          <FormLabel htmlFor="nome">Nome</FormLabel>
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

          <FormErrorMessage>
            {errors.nome &&
              ((errors.nome?.type === 'possuiNumeros' &&
                'O nome não deve ter números') ||
                (errors.nome?.type === 'possuiCaracteresEspeciais' &&
                  'O nome não deve ter caracteres especiais') ||
                errors.nome?.message)}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.cpf} w={'25vw'}>
          <FormLabel htmlFor="cpf">CPF</FormLabel>
          <Input
            id="cpf"
            placeholder="CPF"
            {...register('cpf', {
              required: 'Campo obrigatório',
              validate: { possuiCaracteresEspeciais, possuiLetras },
            })}
          />
          <FormErrorMessage>
            {errors.cpf &&
              ((errors.cpf?.type === 'possuiCaracteresEspeciais' &&
                'O CPF não deve ter pontuação') ||
                (errors.cpf?.type === 'possuiLetras' &&
                  'O CPF não deve ter letras') ||
                errors.cpf?.message)}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.senha} w={'25vw'}>
          <FormLabel htmlFor="senha">Senha</FormLabel>
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
          <FormErrorMessage>
            {errors.senha && errors.senha?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.confirmacaoSenha} w={'25vw'}>
          <FormLabel htmlFor="confirmacaoSenha">Confirmação de Senha</FormLabel>
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
          <FormErrorMessage>
            {errors.confirmacaoSenha && errors.confirmacaoSenha?.message}
          </FormErrorMessage>
        </FormControl>

        <Button
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Cadastrar
        </Button>
      </form>
      <Button
        mt={4}
        colorScheme="teal"
        type="button"
        onClick={() => navigate(-1)}
      >
        Entrar na conta
      </Button>
    </Flex>
  );
}

export default Formulario;
