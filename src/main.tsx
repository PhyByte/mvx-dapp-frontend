import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { BrowserRouter } from "react-router-dom";

import { DappProvider } from "@multiversx/sdk-dapp/wrappers";
import App from "./App.tsx";
import { Provider as ChakraProvider } from "./components/ui/provider.tsx";
import { MVX_NETWORK, WALLET_CONNECT_ID } from "./constants.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ChakraProvider>
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
        <BrowserRouter>
          <HelmetProvider>
            <App />
          </HelmetProvider>
        </BrowserRouter>
      </DappProvider>
    </ChakraProvider>
  </StrictMode>
);
