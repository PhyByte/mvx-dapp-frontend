import { Box, Center } from "@chakra-ui/react";
import { AuthenticatedRoutesWrapper } from "@multiversx/sdk-dapp/wrappers";
import { Outlet } from "react-router-dom";

import TopBar from "./TopBar";
import { routes, ROUTES } from "@/utils/router/paths";
import Footer from "./Footer";

const Layout = () => {
  return (
    <>
      <TopBar />
      <Box justifyContent="center">
        <AuthenticatedRoutesWrapper
          routes={routes}
          unlockRoute={`${ROUTES.unlock}`}
        >
          <Box w="100%" p='2'>
            <Center>
              <Outlet />
            </Center>
          </Box>
        </AuthenticatedRoutesWrapper>
      </Box>
      <Footer />
    </>
  );
};

export default Layout;
