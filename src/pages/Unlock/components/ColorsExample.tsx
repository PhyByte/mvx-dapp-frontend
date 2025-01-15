import BasePageElement from "@/components/Bases/BasePageElement";
import {
  Box,
  ChakraProvider,
  extendTheme,
  Flex,
  Heading,
  Link,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

const App = () => {
  // State for the dynamic theme values
  const [brandColors, setBrandColors] = useState({
    light: "#10cdf4",
    main: "#9182ce",
    dark: "#2c5282",
  });

  // Function to dynamically update the theme
  const updateTheme = (key: string, value: string) => {
    setBrandColors((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // Create the dynamic theme
  const customTheme = extendTheme({
    colors: {
      brand: brandColors,
    },
  });

  return (
    <ChakraProvider theme={customTheme}>
      <BasePageElement>
        <Heading>Text component</Heading>
        <Flex direction="column" align="center" justify="center" gap={5} p={10}>
          <Text fontSize="xl" fontWeight="bold">
            Click on a square to change its color
          </Text>

          {/* Color Squares */}
          <Flex gap={5} mt={5}>
            {Object.entries(brandColors).map(([key, color]) => (
              <Flex
                key={key}
                direction="column"
                align="center"
                justify="center"
                gap={2}
                position="relative"
              >
                {/* Color Box */}
                <Box
                  as="label"
                  bgColor={color}
                  w="100px"
                  h="100px"
                  borderRadius="md"
                  boxShadow="lg"
                  cursor="pointer"
                >
                  {/* Hidden Input */}
                  <input
                    type="color"
                    value={color}
                    onChange={(e) => updateTheme(key, e.target.value)}
                    style={{
                      opacity: 0,
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                      cursor: "pointer",
                    }}
                  />
                </Box>

                {/* Label */}
                <Text fontWeight="bold">{key}</Text>
              </Flex>
            ))}
          </Flex>
          <Flex>
            <Text>They can be easily configure in the theme:</Text>
            <Link
              isExternal
              href="https://github.com/PhyByte/mvx-dapp-frontend/blob/main/src/theme/foundations/colors.ts"
            >
              <Text color="brand.main"> theme/fundations/colors.ts</Text>
            </Link>
          </Flex>
        </Flex>
      </BasePageElement>
    </ChakraProvider>
  );
};

export default App;
