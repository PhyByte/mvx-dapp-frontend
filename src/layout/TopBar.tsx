import useDappStore from "@/store";
import { Button, Flex, FlexProps, Heading, Spacer } from "@chakra-ui/react";
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
      <Flex
        my="2"
        justify={"center"}
        align={"center"}
        textAlign={"center"}
        gap="2"
      >
        <Heading size={{ base: "xl", lg: "3xl" }}>Dapp Template</Heading>
      </Flex>
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
