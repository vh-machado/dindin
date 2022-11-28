import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import cores from '../../../assets/cores';
import users from '../../../mocks/users';

function Formulario({ setDadosTransferencia }) {
  const format = val => `R$` + val;
  const parse = val => val.replace(/^\$/, '');

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  const verificaConta = (agencia, conta) => {
    return users.find(user => user.agencia === agencia && user.conta === conta);
  };

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();

        const { agencia, conta, valor } = values;

        //Busca conta
        const contaBuscada = verificaConta(agencia, conta);
        if (contaBuscada) {
          // Exibe conta encontrada
          const { nome } = contaBuscada;
          setDadosTransferencia({ destino: { agencia, conta, nome }, valor });
        }
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl variant="floating" isInvalid={errors.agencia} w={'25vw'}>
        <Input
          id="agencia"
          placeholder="Agência"
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

      <FormControl variant="floating" isInvalid={errors.conta} w={'25vw'}>
        <Input
          id="conta"
          placeholder="Conta"
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

      <FormControl variant="floating" isInvalid={errors.valor} w={'25vw'}>
        <Input
          id="valor"
          placeholder="0,00"
          {...register('valor', {
            required: 'Campo obrigatório',
            validate: input => input > 0 || 'Valor deve ser maior que zero',
          })}
        />
        <FormLabel htmlFor="valor">Valor</FormLabel>

        <FormErrorMessage>
          {errors.valor && errors.valor?.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        w="100%"
        mt={4}
        bg={cores.blueGray}
        color="white"
        isLoading={isSubmitting}
        type="submit"
        borderRadius={'10px'}
        py="24px"
        _hover={{
          bg: cores.hanBlue,
        }}
        _active={{
          bg: cores.violetBlue,
        }}
      >
        Pronto
      </Button>
    </form>
  );
}

export default Formulario;
