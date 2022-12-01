import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  useDisclosure,
  Flex,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import cores from '../../../assets/cores';
import Resposta from '../../Login/componentes/Resposta';

function Formulario({ setDadosTransferencia }) {
  const {
    isOpen: isOpenResposta,
    onOpen: onOpenResposta,
    onClose: onCloseResposta,
  } = useDisclosure();

  const conteudoResposta = {
    erro: {
      header: 'Conta não encontrada',
      body: 'Verifique as informações inseridas',
      colorScheme: 'red',
      buttonTitle: 'Fechar',
      action: null,
    },
  };

  // Validações
  const caracteresEspeciais = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
  const letras = /[a-z]/i;
  const caracteresEspeciaisValor = /[` !@#$%^&*()_+\-=\[\]{};':"\\|,<>\/?~]/;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm();

  const verificaConta = (agencia, conta) => {
    return JSON.parse(window.sessionStorage.usuariosCadastrados).find(
      user => user.agencia === agencia && user.conta === conta
    );
  };

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve();

        const { agencia, conta, valor } = values;

        //Busca conta
        const contaBuscada = verificaConta(agencia, conta);
        if (contaBuscada) {
          // Exibe conta encontrada
          const { nome } = contaBuscada;
          setDadosTransferencia({ destino: { agencia, conta, nome }, valor });
        } else {
          onOpenResposta();
        }
      }, 1000);
    });
  }

  // Testes de validação
  const possuiCaracteresEspeciais = input => !caracteresEspeciais.test(input);
  const possuiLetras = input => !letras.test(input);
  const maiorQueZero = input => input > 0;
  const possuiCaracteresEspeciaisValor = input =>
    !caracteresEspeciaisValor.test(input);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Flex direction={'column'} alignItems={'center'}>
        <FormControl
          variant="floating"
          isInvalid={errors.agencia}
          w={'70%'}
        >
          <Input
            id="agencia"
            placeholder="Agência"
            {...register('agencia', {
              required: 'Campo obrigatório',
              maxLength: {
                value: 4,
                message: 'O número da agência não pode exceder 4 dígitos',
              },
              validate: {
                possuiLetras,
                possuiCaracteresEspeciais,
              },
            })}
          />
          <FormLabel htmlFor="agencia">Agência</FormLabel>

          <FormErrorMessage>
            {errors.agencia &&
              ((errors.agencia?.type === 'possuiLetras' &&
                'A agência não deve ter letras') ||
                (errors.agencia?.type === 'possuiCaracteresEspeciais' &&
                  'A agência não deve ter caracteres especiais') ||
                errors.agencia?.message)}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          variant="floating"
          isInvalid={errors.conta}
          w={'70%'}
        >
          <Input
            id="conta"
            placeholder="Conta"
            {...register('conta', {
              required: 'Campo obrigatório',
              maxLength: {
                value: 8,
                message: 'O número da conta não pode exceder 8 dígitos',
              },
              validate: {
                possuiLetras,
                possuiCaracteresEspeciais,
              },
            })}
          />
          <FormLabel htmlFor="conta">Conta</FormLabel>
          <FormErrorMessage>
            {errors.conta &&
              ((errors.conta?.type === 'possuiLetras' &&
                'A conta não deve ter letras') ||
                (errors.conta?.type === 'possuiCaracteresEspeciais' &&
                  'A conta não deve ter caracteres especiais') ||
                errors.conta?.message)}
          </FormErrorMessage>
        </FormControl>

        <FormControl
          variant="floating"
          isInvalid={errors.valor}
          w={'70%'}
        >
          <Input
            id="valor"
            placeholder="0.00"
            {...register('valor', {
              valueAsNumber: true,
              required: 'Campo obrigatório',
              validate: {
                possuiCaracteresEspeciaisValor,
                maiorQueZero,
              },
            })}
          />

          <FormLabel htmlFor="valor">R$ Valor</FormLabel>

          <FormErrorMessage>
            {errors.valor &&
              ((errors.valor?.type === 'possuiCaracteresEspeciaisValor' &&
                'O valor não deve ter caracteres especiais') ||
                (errors.valor?.type === 'maiorQueZero' &&
                  'Valor deve ser maior que zero') ||
                errors.valor?.message)}
          </FormErrorMessage>
        </FormControl>

        <Button
          w="70%"
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
      </Flex>
      <Resposta {...{ isOpenResposta, onCloseResposta, conteudoResposta }} />
    </form>
  );
}

export default Formulario;
