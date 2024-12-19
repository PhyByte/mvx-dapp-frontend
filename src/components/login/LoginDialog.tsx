import { Button } from "@/components/ui/button";
import {
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogHeader,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tooltip } from "@/components/ui/tooltip";
import { Flex } from "@chakra-ui/react";
import MultiversxLogin from "./components/MultiversxLogin";

const LoginDialog = () => {

  return (
    <DialogRoot
      size={{ base: "md", sm: "md" }}
      placement="center"
      motionPreset="slide-in-bottom"
    >
      {" "}
      <Tooltip
        showArrow
        content="This is the tooltip content"
        contentProps={{ css: { "--tooltip-bg": "colors.red.500" } }}
      >
        <DialogTrigger asChild>
          <Button variant="outline" size="sm">
            Login
          </Button>
        </DialogTrigger>
      </Tooltip>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Select Login Method</DialogTitle>
          <DialogCloseTrigger />
        </DialogHeader>
        <DialogBody>
          <Flex
            gap="2"
            direction={{
              base: "column",
              md: "row",
            }}
            justify={"center"}
          >
            {/* <Button variant="solid" size="md">
              Extension
            </Button>
            <Button variant="solid" size="md">
              Xportal
            </Button>
            <Button variant="solid" size="md">
              Ledger
            </Button>
            <Button variant="solid" size="md">
              Metamask
            </Button> */}
            <MultiversxLogin
              token={''}
              callbackRoute={"/dashboard"}
              logoutRoute={"/unlock"}
            />
          </Flex>
        </DialogBody>
      </DialogContent>
    </DialogRoot>
  );
};

export default LoginDialog;
