import { Button, Flex, FlexProps, HStack } from "@chakra-ui/react";
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

interface MultiversxLoginProps extends FlexProps {
  callbackRoute: string;
  logoutRoute: string;
  token: string;
}

const MultiversxLogin = ({
  callbackRoute,
  logoutRoute,
  token,
  ...rest
}: MultiversxLoginProps) => {
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
    token,
    nativeAuth: false,
    onLoginRedirect: () => {
      navigate(callbackRoute);
    },
  });
  const [initiatemetamaskLogin] = useMetamaskLogin({
    callbackRoute,
    logoutRoute,
    token,
    nativeAuth: false,
    onLoginRedirect: () => {
      navigate(callbackRoute);
    },
  });

  return (
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
            onClick={() => {
              closeAll();
              setXportalIsOpen(true);
            }}
          >
            xPortal
          </Button>

          <Button
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
            onClick={() => {
              closeAll();
              initiateExtensionLogin();
            }}
          >
            Extension
          </Button>
          <Button
            onClick={() => {
              closeAll();
              initiatemetamaskLogin();
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
            token={token}
            onLoginRedirect={() => {
              navigate(callbackRoute);
            }}
          />
        )}
        {ledgerIsOpen && (
          <LedgerLoginContainer
            callbackRoute={callbackRoute}
            showProgressBar={false}
            token={token}
            className="ledger-login-modal"
            wrapContentInsideModal={false}
            onClose={() => {
              navigate(callbackRoute);
            }}
          />
        )}
      </Flex>
    </Flex>
  );
};

export default MultiversxLogin;
