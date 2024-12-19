import { MultiversxLogo } from "@/components/logos";
import { MVX_NETWORK } from "@/constants";
import { Code, Flex, Heading, HStack, VStack } from "@chakra-ui/react";

const UnlockPage = () => {
  return (
    <Flex justify={"center"} align={"center"} direction="column" w="100%">
      <VStack gap="5">
        <HStack
          justify="center"
          align="center" // Ensures vertical alignment
        >
          <MultiversxLogo
            borderRadius="xl"
            height="12"
            m="2" // Remove vertical margin
          />
          <Heading textAlign="center" size="4xl">
            MVX Dapp Template
          </Heading>
        </HStack>
        <Code variant="solid" as="b">
          Network: {MVX_NETWORK}
        </Code>
        <Flex
          gap="2"
          direction="column"
          align="start"
          borderWidth={1}
          borderRadius={"xl"}
          p={2}
          borderColor={"gray.200"}
        >
          <Code variant="surface">git clone </Code>
          <Code variant="surface">npm install</Code>
          <Code variant="surface">npm run dev </Code>
        </Flex>
      </VStack>
    </Flex>
  );
};

export default UnlockPage;
