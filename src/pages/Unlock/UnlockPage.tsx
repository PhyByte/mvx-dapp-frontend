import BasePageElement from "@/components/Bases/BasePageElement";
import LoginModal from "@/components/modals/LoginModal/LoginModal";
import { Button, ButtonGroup, Flex, Stat } from "@chakra-ui/react";
import { getIsLoggedIn } from "@multiversx/sdk-dapp/utils";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const UnlockPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (getIsLoggedIn()) {
      navigate("/dashboard");
    }
  }, [getIsLoggedIn]);

  return (
    <Flex justify={"center"} align={"center"} direction="column" w="100%">
      <LoginModal />
    <BasePageElement>
      <ButtonGroup>
      <Button  onClick={() => console.log("Clicked")}>
          No Variant
        </Button>
        <Button variant={"action"} onClick={() => console.log("Clicked")}>
          Action
        </Button>
        <Button variant={"delete"} onClick={() => console.log("Clicked")}>
          Delete
        </Button>
        <Button variant={"ghost"} onClick={() => console.log("Clicked")}>
          Ghost
        </Button>

        <Button variant={"outline"} onClick={() => console.log("Clicked")}>
          Outline
        </Button>

        <Button variant={"link"} onClick={() => console.log("Clicked")}>
          Link
        </Button>

        <Button variant={"unstyled"} onClick={() => console.log("Clicked")}>
          Unstyled
        </Button>
      </ButtonGroup>
      </BasePageElement>
    </Flex>
  );
};

export default UnlockPage;
