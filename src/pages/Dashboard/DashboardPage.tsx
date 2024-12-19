import { Button, Flex } from "@chakra-ui/react";
import { logout } from "@multiversx/sdk-dapp/utils";
import { useNavigate } from "react-router-dom";

const DashboardPage = () => {
  const navigate = useNavigate();

  return (
    <Flex justify={"center"} align={"center"} direction="column" w="100%">
      <Button
        onClick={() => {
          navigate("/unlock");
        }}
      >
        Go dashboard
      </Button>
      <Button
        onClick={() => {
          logout();
        }}
      >
        Logout
      </Button>
    </Flex>
  );
};

export default DashboardPage;
