import React from 'react';
import { Flex, Image } from '@chakra-ui/react';

import giftcardHeader from '../../../assets/imagens/componentes/giftcardheader.svg';
import giftcardFooter from '../../../assets/imagens/componentes/giftcardfooter.svg';

export default function GiftCardPreview({ background, cardLogo }) {
  return (
    <Flex
      w="180px"
      h="280px"
      flexDirection={'column'}
      borderRadius="16px"
      overflow="hidden"
      bgImage={background}
      bgPosition={'center'}
      bgSize="cover"
      bgRepeat={'no-repeat'}
      ms="-60px"
    >
      <Image src={giftcardHeader} />
      <Flex h="full" justify={'center'} align="center">
        <Image src={cardLogo} w="120px" />
      </Flex>

      <Image src={giftcardFooter} />
    </Flex>
  );
}
