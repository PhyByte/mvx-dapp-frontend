import BasePageElement from "@/components/Bases/BasePageElement";
import { chakra, Flex, Heading, Link, Spacer, Text } from "@chakra-ui/react";

const TextExample = () => {
  return (
    <BasePageElement>
      <Heading>Text component</Heading>

      <Flex align="center" gap={"10"}>
        <Flex gap={3} align="center" justify="center" direction="column">
          <chakra.h1>chakra.h1</chakra.h1>
          <chakra.h2>chakra.h2</chakra.h2>
          <chakra.h3>chakra.h3</chakra.h3>
        </Flex>
        <Spacer />
        <Flex gap={3} align="center" justify="center" direction="column">
          <chakra.h4>chakra.h4</chakra.h4> <chakra.p>chakra.p</chakra.p>
          <chakra.body>chakra.body</chakra.body>
        </Flex>
      </Flex>
      <Flex gap={3} align={"center"} direction={{ base: "column", sm: "row" }}>
        <Text fontSize="4xl">(4xl) </Text>
        <Text fontSize="2xl">(2xl) </Text>
        <Text fontSize="xl">(xl) </Text>
        <Text fontSize="lg">(lg) </Text>
        <Text fontSize="md">(md) </Text>
        <Text fontSize="sm">(sm) </Text>
        <Text fontSize="xs">(xs) </Text>
      </Flex>
      <Flex>
        <Text>They can be easily configure in the theme:</Text>
        <Link
          isExternal
          href="https://github.com/PhyByte/mvx-dapp-frontend/blob/main/src/theme/foundations/typography.ts"
        >
          <Text color="brand.main"> theme/fundations/typography.ts</Text>
        </Link>
      </Flex>
    </BasePageElement>
  );
};

export default TextExample;
