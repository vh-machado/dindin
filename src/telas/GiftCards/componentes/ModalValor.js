import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  Text,
  Box,
  Flex,
} from '@chakra-ui/react';
import { Icon } from '@iconify/react';

import GiftCardPreview from './GiftCardPreview';
import Formulario from './Formulario';
import cores from '../../../assets/cores';

export default function ModalValor({
  isOpen,
  onClose,
  compraGiftCard,
  setCompraGiftCard,
}) {
  const { servico, cardLogo, background } = compraGiftCard.loja;
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent bg={cores.cultured}>
          <ModalHeader>
            <Text fontSize={'lg'} fontWeight={'semibold'}>
              Gift Card {servico}
            </Text>
            <Text fontSize={'xs'} fontWeight="regular">
              Informe o valor do gift card
            </Text>
          </ModalHeader>

          <ModalCloseButton />

          <ModalBody pb="30px">
            <Flex flexDirection={'row'} justify="space-around">
              <GiftCardPreview {...{ cardLogo, background }} />
              <Flex
                direction={'column'}
                borderRadius={'16px'}
                justify={'flex-end'}
                align="center"
              >
                <Flex w="100%" h="100%" align={'center'} justify={'center'}>
                  <Box
                    bg={cores.periwinkleCrayola}
                    p="20px"
                    borderRadius={'16px'}
                  >
                    <Icon
                      icon="eva:gift-outline"
                      width={'32px'}
                      color={cores.liberty}
                    />
                  </Box>
                </Flex>
                <Formulario
                  {...{ onClose, compraGiftCard, setCompraGiftCard }}
                />
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
