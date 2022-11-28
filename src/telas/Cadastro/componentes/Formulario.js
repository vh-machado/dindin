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

const caracteresEspeciais = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const numeros = /[0-9]/;
const letras = /[a-z]/i;

function Formulario() {
  let navigate = useNavigate();

  const {
    handleSubmit,
    register,
    getValues,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();

        // Navegação para o Início
        navigate('/inicio');
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
