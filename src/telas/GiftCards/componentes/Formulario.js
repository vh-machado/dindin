import React from 'react';
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  NumberInput,
  NumberInputField,
  InputLeftAddon,
  InputGroup,
  InputLeftElement,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';

import cores from '../../../assets/cores';

function Formulario({
  onClose: onCloseModal,
  compraGiftCard,
  setCompraGiftCard,
}) {
  const format = val => `R$` + val;
  const parse = val => val.replace(/^\$/, '');

  const {
    handleSubmit,
    register,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm();

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
        setCompraGiftCard({ ...compraGiftCard, valor: values.valor });
        onCloseModal();
      }, 3000);
    });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormControl variant="floating" isInvalid={errors.valor}>
        <Input
          id="valor"
          placeholder="0,00"
          {...register('valor', {
            required: 'Campo obrigatório',
            valueAsNumber: true,
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
