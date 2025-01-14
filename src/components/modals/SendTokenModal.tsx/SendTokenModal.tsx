import { Button, chakra, Flex, Spacer, VStack } from "@chakra-ui/react";

import AddressInput from "@/components/inputs/AddressInput";
import TokenAmountInput from "@/components/inputs/TokenAmountInput";
import BaseModal from "@/components/modals/BaseModal";
import useDappStore from "@/store";
import { useState } from "react";

const SendTokenModal = () => {
  const [recipient, setRecipient] = useState("");
  // Modal state
  const [isOpen, setIsOpen] = useDappStore((state) => [
    state.ux.sendTokenModal.isOpen,
    state.ux.sendTokenModal.setIsOpen,
  ]);

  return (
    <BaseModal
      title={
        <Flex align={"center"} justify="center">
          <chakra.h1 pl="8">Send Token</chakra.h1>
        </Flex>
      }
      isOpen={isOpen}
      setIsOpen={setIsOpen}
      size={{ base: "full", md: "4xl" }}
    >
      <Flex
        justify={"center"}
        gap="4"
        mb="4"
        direction={"column"}
        align={"center"}
      >
        <Flex
          justify={"center"}
          align={"start"}
          direction={{
            base: "column",
            md: "row",
          }}
          gap={{
            base: "4",
            md: "2",
          }}
          w="full"
        >
          <VStack
            w={{
              base: "100%",
              md: "50%",
            }}
            h={"100%"}
            justify={"center"}
          >
            <chakra.h3>Select a token:</chakra.h3>
          </VStack>
          <Spacer />
          <VStack>
            <chakra.h3>Enter an amount:</chakra.h3>
            <TokenAmountInput
              available="1800000000000000000"
              decimals={18}
              setReturnValue={() => {}}
              stepper={true}
            />
          </VStack>
        </Flex>
        <VStack mt="4" w="100%" direction={"column"} justify={"center"} gap={2}>
          <chakra.h3>Choose a recipient:</chakra.h3>
          <AddressInput setReturnValue={setRecipient} textAlign={"center"} />
        </VStack>
        <Button
          onClick={() => {
            console.log(recipient);
            setIsOpen(false);
          }}
          // isDisabled={amount === '0' || recipient === ''}
          mt="2"
          variant="signer"
          w={{
            base: "100%",
            md: "40%",
          }}
        >
          Send
        </Button>
      </Flex>
    </BaseModal>
  );
};

export default SendTokenModal;
