import {
  chakra,
  Divider,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface BaseModalProps {
  title: string | ReactNode;
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  size?: { base: string; md: string };
  ontop?: boolean;
  children: ReactNode;
}

const BaseModal = ({
  title,
  isOpen,
  setIsOpen,
  size,
  ontop = false,
  children,
  ...rest
}: BaseModalProps) => {
  return (
    <Modal
      isCentered={!ontop}
      isOpen={isOpen}
      onClose={() => setIsOpen(false)}
      size={size ? size : "4xl"}
      {...rest}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Flex align={"center"} justify="center" mb="2">
            {typeof title === "string" ? <chakra.h2>{title}</chakra.h2> : title}
          </Flex>
          <Divider orientation="horizontal" />
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody m="3">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default BaseModal;
