import React from 'react';
import { Box, Button, HStack, Image, Text } from '@chakra-ui/react';

import giftcards from '../../../mocks/giftcards';
import { useNavigate } from 'react-router-dom';

export default function ListaGiftCards() {
  const navigate = useNavigate();
  const giftCardsInicio = giftcards.filter((item, index) => index < 6);

  return (
    <Box mx="12px" my="32px" w="100%">
      <Text fontSize={'sm'} fontWeight={'semibold'} mb="16px">
        Gift Cards
      </Text>
      <HStack>
        {giftCardsInicio.map(function ({ servico, logo }, index) {
          return (
            <Button
              key={index}
              variant="giftCard"
              shadow={'sm'}
              onClick={() => navigate(`../giftcards/${servico}`)}
            >
              <Image src={logo} w="80px" />
            </Button>
          );
        })}
      </HStack>
    </Box>
  );
}
