import React, { useEffect } from 'react';
import { Button, Flex, Image, useDisclosure } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import giftcards from '../../../mocks/giftcards';
import ModalValor from './ModalValor';

export default function GridGiftCards({ compraGiftCard, setCompraGiftCard }) {
  let params = useParams();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (params) {
      let item = giftcards.find(
        giftcard => giftcard.servico === params.giftcardServico
      );
      setCompraGiftCard({ loja: { ...item }, valor: 0 });
      onOpen();
    }
  }, []);

  return (
    <Flex
      h="100%"
      w="60%"
      borderRadius="16px"
      py="16px"
      px="24px"
      direction={'column'}
    >
      <Flex
        h="100%"
        direction={'row'}
        justify="flex-start"
        align="flex-start"
        alignContent="flex-start"
        wrap="wrap"
      >
        {giftcards.map(function (item, index) {
          return (
            <Button
              key={index}
              variant="giftCard"
              minH="80px"
              minW="80px"
              maxH="300px"
              maxW="300px"
              h="140px"
              w="140px"
              m="6px"
              flexGrow="1"
              onClick={() => {
                setCompraGiftCard({ loja: { ...item }, valor: 0 });
                onOpen();
              }}
            >
              <Image src={item.logo} w="90px" />
            </Button>
          );
        })}
      </Flex>

      <ModalValor {...{ isOpen, onClose, compraGiftCard, setCompraGiftCard }} />
    </Flex>
  );
}
