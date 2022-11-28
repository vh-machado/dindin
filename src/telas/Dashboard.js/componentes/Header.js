import React from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import cores from '../../../assets/cores';

function Header() {
  return (
    <Flex
      flexDirection={"row"}
      minH="10vh"
      justifyContent="flex-end"
      alignItems="center"
      mx="24px"
      color={cores.liberty}
    >
      <Text fontSize="xs" fontWeight={"bold"}>
        Nome Sobrenome
      </Text>
      <Box w="30px" h="30px" bg="gray.300" borderWidth={"2px"} borderColor={cores.liberty} borderRadius="10px" mx="16px"></Box>
      <Icon icon="fa-regular:bell" width="20px" />

    </Flex>
  );
}

export default Header;
