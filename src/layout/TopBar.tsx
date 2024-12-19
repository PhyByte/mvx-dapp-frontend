import LoginDialog from "@/components/login/LoginDialog";
import { MultiversxLogo } from "@/components/logos";
import { ColorModeButton } from "@/components/ui/color-mode";
import { Flex, FlexProps, Spacer } from "@chakra-ui/react";

export const SIDEBAR = {
  EXPANDED_WIDTH: 280,
  COLLAPSED_WIDTH: 88,
};

interface TopBarProps extends FlexProps {
  onOpen?: () => void;
}

const TopBar = ({ ...rest }: TopBarProps) => {
  return (
    <Flex
      px={{ base: 4, md: 6 }}
      py={{ base: 4, md: 6 }}
      pr={{ base: 4, lg: 12 }}
      height={{ base: 20, lg: 24 }}
      alignItems="center"
      borderBottomWidth="2px"
      {...rest}
    >
      <MultiversxLogo h='20'/>
      <Spacer />
      <ColorModeButton />
      <LoginDialog  />
    </Flex>
  );
};

export default TopBar;
