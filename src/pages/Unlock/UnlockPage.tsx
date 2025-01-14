import LoginModal from "@/components/modals/LoginModal/LoginModal";
import useDappStore from "@/store";
import { Button, Flex } from "@chakra-ui/react";
import { getIsLoggedIn } from "@multiversx/sdk-dapp/utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ButtonExample from "./components/ButtonExample";
import TextExample from "./components/TextExample";

const UnlockPage = () => {
  const navigate = useNavigate();

  const [setSendModalIsOpen] = useDappStore((state) => [
    state.ux.sendTokenModal.setIsOpen,
  ]);

  useEffect(() => {
    if (getIsLoggedIn()) {
      navigate("/dashboard");
    }
  }, [getIsLoggedIn]);

  return (
    <Flex
      justify={"center"}
      align={"center"}
      direction="column"
      w="100%"
      gap={4}
    >
      <TextExample />
      <LoginModal />
      <ButtonExample />
      <Button
        onClick={() => {
          setSendModalIsOpen(true);
        }}
      >
        Open modal
      </Button>
    </Flex>
  );
};

export default UnlockPage;
