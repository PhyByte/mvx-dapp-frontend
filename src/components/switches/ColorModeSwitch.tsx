import { Switch, useColorMode, Flex, Icon } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  
  return (
    <Flex align="center" gap={2}>
      {colorMode === "light" ? (
        <Icon as={SunIcon} color="yellow.400" />
      ) : (
        <Icon as={MoonIcon} color="blue.400" />
      )}
      <Switch
        colorScheme="teal"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
      />
    </Flex>
  );
};

export default ColorModeSwitch;