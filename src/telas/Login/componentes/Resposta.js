import React, { useRef } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from '@chakra-ui/react';

export default function Resposta({
  isOpenResposta: isOpen,
  onCloseResposta: onClose,
  resposta = 'erro',
  conteudoResposta,
}) {

  const { header, body, colorScheme, buttonTitle, action } =
    conteudoResposta[resposta];

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        {resposta === 'erro' && <ModalCloseButton />}
        <ModalBody>{body}</ModalBody>

        <ModalFooter>
          <Button
            colorScheme={colorScheme}
            mr={3}
            onClick={() => {
              onClose();
              action();
            }}
          >
            {buttonTitle}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
