import useDappStore from "@/store";
import { LogoIconFull } from "@/utils/assets/LogoIconFull";
import { Button, Flex, FlexProps, Spacer } from "@chakra-ui/react";
import { getIsLoggedIn, logout } from "@multiversx/sdk-dapp/utils";

export const SIDEBAR = {
  EXPANDED_WIDTH: 280,
  COLLAPSED_WIDTH: 88,
};

interface TopBarProps extends FlexProps {
  onOpen?: () => void;
}

const TopBar = ({ ...rest }: TopBarProps) => {
  const isLogged = getIsLoggedIn();

  const [loginModal] = useDappStore((state) => [state.ux.loginModal]);
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
      <LogoIconFull boxSize={12} />
      <Spacer />
      {!isLogged ? (
        <Button
          onClick={() => loginModal.setIsOpen(true)}
          variant="action"
          w="20%"
        >
          Login
        </Button>
      ) : (
        <Button onClick={() => logout()} variant="delete" w="20%">
          Logout
        </Button>
      )}
    </Flex>
  );
};

export default TopBar;
