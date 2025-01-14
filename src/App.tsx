import { useGetAccountInfo, useGetLoginInfo } from "@multiversx/sdk-dapp/hooks";
import { useEffect } from "react";
import useDappStore from "./store";
import Router from "./utils/router";

function App() {
  const account = useGetAccountInfo(); // Retrieve account info from MultiversX SDK
  const loginInfo = useGetLoginInfo(); // Retrieve login info (e.g., token signatures)

  const [user, authToken, bearerToken] = useDappStore((state) => [
    state.user,
    state.user.auth.authToken,
    state.user.auth.bearerToken,
  ]);

  useEffect(() => {
    const isAuthTokenExpired =
      !authToken.value ||
      new Date(authToken.expirationDate).getTime() < Date.now();

    if (isAuthTokenExpired) {
      // Refresh the token if it's expired or missing
      console.log("Refreshing authentication token...");
      user.auth.refresh();
    } else if (
      !bearerToken.value && // If bearer token is missing
      loginInfo.tokenLogin?.signature && // And we have a valid signature
      account.address // And a valid account address
    ) {
      // Verify the signature to fetch the bearer token
      console.log("Verifying signature...");
      user.auth.verifySignature(
        account.address,
        loginInfo.tokenLogin.signature,
        authToken.value
      );
    }
  }, [
    authToken.value,
    authToken.expirationDate,
    bearerToken.value,
    loginInfo.tokenLogin?.signature,
    account.address,
  ]);

  return <Router />;
}

export default App;
