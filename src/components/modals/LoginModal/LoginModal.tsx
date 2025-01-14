import {
  Button,
  Flex,
  FlexProps,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  useExtensionLogin,
  useMetamaskLogin,
} from "@multiversx/sdk-dapp/hooks";
import {
  LedgerLoginContainer,
  WalletConnectLoginContainer,
} from "@multiversx/sdk-dapp/UI";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import BaseModal from "@/components/modals/BaseModal";
import useDappStore from "@/store";

interface LoginModalProps extends FlexProps {
  callbackRoute?: string;
  logoutRoute?: string;
}

const LoginModal = ({
  callbackRoute = "/dashboard",
  logoutRoute = "/unlock",
  ...rest
}: LoginModalProps) => {
  const [authToken] = useDappStore((state) => [state.user.auth.authToken]);
  const [isOpen, setIsOpen] = useDappStore((state) => [
    state.ux.loginModal.isOpen,
    state.ux.loginModal.setIsOpen,
  ]);

  const [xportalIsOpen, setXportalIsOpen] = useState(false);
  const [ledgerIsOpen, setLedgerIsOpen] = useState(false);
  const navigate = useNavigate();

  const closeAll = () => {
    setXportalIsOpen(false);
    setLedgerIsOpen(false);
  };

  const [initiateExtensionLogin] = useExtensionLogin({
    callbackRoute,
    logoutRoute,
    token: authToken.value,
    nativeAuth: false,
    onLoginRedirect: () => {
      setIsOpen(false);
      navigate(callbackRoute);
    },
  });

  const [initiateMetamaskLogin] = useMetamaskLogin({
    callbackRoute,
    logoutRoute,
    token: authToken.value,
    nativeAuth: false,
    onLoginRedirect: () => {
      setIsOpen(false);
      navigate(callbackRoute);
    },
  });

  return (
    <BaseModal title={"Login"} isOpen={isOpen} setIsOpen={setIsOpen}>
      <VStack gap="4">
        <Text>Choose your Wallet login method:</Text>
        <Flex {...rest} direction={"column"} align={"center"}>
          <Flex
            direction={{
              base: "column",
              sm: "row",
            }}
            gap={4}
          >
            <HStack gap={4}>
              <Button
                variant="solid"
                onClick={() => {
                  closeAll();
                  setXportalIsOpen(true);
                }}
              >
                xPortal
              </Button>

              <Button
                variant="solid"
                onClick={() => {
                  closeAll();
                  setLedgerIsOpen(true);
                }}
              >
                Ledger
              </Button>
            </HStack>
            <HStack gap={4}>
              <Button
                variant="solid"
                onClick={() => {
                  closeAll();
                  initiateExtensionLogin();
                }}
              >
                Extension
              </Button>
              <Button
                variant="solid"
                onClick={() => {
                  closeAll();
                  initiateMetamaskLogin();
                }}
              >
                Metamask
              </Button>
            </HStack>
          </Flex>
          <Flex direction={"column"} w="full">
            {xportalIsOpen && (
              <WalletConnectLoginContainer
                callbackRoute={callbackRoute}
                loginButtonText="Login with xPortal"
                title="xPortal Login"
                logoutRoute={logoutRoute}
                className="wallect-connect-login-modal"
                lead="Scan the QR code using xPortal"
                wrapContentInsideModal={false}
                token={authToken.value}
                onLoginRedirect={() => {
                  setIsOpen(false);
                  navigate(callbackRoute);
                }}
              />
            )}
            {ledgerIsOpen && (
              <LedgerLoginContainer
                callbackRoute={callbackRoute}
                showProgressBar={false}
                token={authToken.value}
                className="ledger-login-modal"
                wrapContentInsideModal={false}
                onClose={() => {
                  setIsOpen(false);
                  navigate(callbackRoute);
                }}
              />
            )}
          </Flex>
        </Flex>
      </VStack>
    </BaseModal>
  );
};

export default LoginModal;
