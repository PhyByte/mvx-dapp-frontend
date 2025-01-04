import { Flex, FlexProps, useColorMode } from "@chakra-ui/react";
import { ReactNode } from "react";

interface BasePageElementProps extends FlexProps {
  children: ReactNode;
}

const BasePageElement = ({ children, ...rest }: BasePageElementProps) => {
  const { colorMode } = useColorMode();

  // Define styles dynamically based on color mode
  const bgColor = colorMode === "light" ? "gray.100" : "gray.900";
  const borderColor = colorMode === "light" ? "gray.400" : "brand.main";
  const boxShadow = colorMode === "light" ? "md" : "cyanGlow";

  return (
    <Flex
      p="2"
      pt="2"
      direction="column"
      gap="2"
      mt="0"
      w="100%"
      justify="center"
      alignItems="center"
      h="100%"
      align="stretch"
      bgColor={bgColor}
      border="2px solid"
      borderColor={borderColor}
      borderRadius="xl"
      boxShadow={boxShadow}
      {...rest}
    >
      {children}
    </Flex>
  );
};

export default BasePageElement;