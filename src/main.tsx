import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import { DappProvider } from "@multiversx/sdk-dapp/wrappers";
import App from "./App.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { MVX_NETWORK, WALLET_CONNECT_ID } from "./constants.ts";
import {
  TransactionsToastList,
  NotificationModal,
  SignTransactionsModals,
} from "@multiversx/sdk-dapp/UI/index";
import DappModals from "./components/modals/index.tsx";
import { theme } from "./theme/index.ts";

document.title = import.meta.env.VITE_DAPP_NAME || "Set a title in .env";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider theme={theme}> 
      <DappProvider
        environment={MVX_NETWORK}
        customNetworkConfig={{
          name: "customConfig",
          apiTimeout: 6000,
          walletConnectV2ProjectId: WALLET_CONNECT_ID,
          walletAddress: "https://xalias.com",
        }}
        dappConfig={{
          shouldUseWebViewProvider: true,
        }}
      >
        <TransactionsToastList />
        <NotificationModal />
        <SignTransactionsModals />
        <DappModals />
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </DappProvider>
    </ChakraProvider>
  </StrictMode>
);
