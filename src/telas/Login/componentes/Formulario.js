import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Flex,
  usePrefersReducedMotion,
  Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import users from '../../../mocks/users';

function Formulario() {
  let navigate = useNavigate();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const verificaUsuario = ({ agencia, conta, senha }) => {
    return users.find(
      user =>
        user.agencia === agencia && user.conta === conta && user.senha === senha
    );
  };

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();

        // Verifica se existe usuário cadastrado
        if (verificaUsuario({ ...values })) {
          // Navegação para o Início
          navigate('/inicio');
        }
      }, 3000);
    });
  }

  return (
    <Flex direction={'column'}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isInvalid={errors.agencia} w={'25vw'}>
          <FormLabel htmlFor="agencia">Agência</FormLabel>
          <Input
            id="agencia"
            placeholder="Agência"
            type="number"
            size="sm"
            {...register('agencia', {
              required: 'Campo obrigatório',
              maxLength: {
                value: 4,
                message: 'O número da agência não pode exceder 4 dígitos',
              },
            })}
          />

          <FormErrorMessage>
            {errors.agencia && errors.agencia?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.conta} w={'25vw'}>
          <FormLabel htmlFor="conta">Conta</FormLabel>
          <Input
            id="conta"
            placeholder="Conta"
            type="number"
            size="sm"
            {...register('conta', {
              required: 'Campo obrigatório',
              maxLength: {
                value: 8,
                message: 'O número da conta não pode exceder 8 dígitos',
              },
            })}
          />
          <FormErrorMessage>
            {errors.conta && errors.conta?.message}
          </FormErrorMessage>
        </FormControl>

        <FormControl isInvalid={errors.senha} w={'25vw'}>
          <FormLabel htmlFor="senha">Senha</FormLabel>
          <Input
            id="senha"
            placeholder="Senha"
            type={'password'}
            size="sm"
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

        <Button
          w="100%"
          mt={4}
          colorScheme="teal"
          isLoading={isSubmitting}
          type="submit"
        >
          Entrar
        </Button>
      </form>
      
      <Text>Já possui conta?</Text>

      <Button
        mt={4}
        colorScheme="teal"
        type="button"
        onClick={() => navigate('/cadastro')}
      >
        Criar conta
      </Button>
    </Flex>
  );
}

export default Formulario;
