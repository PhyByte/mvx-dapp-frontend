import BasePageElement from "@/components/Bases/BasePageElement";
import { Button, ButtonGroup, Heading } from "@chakra-ui/react";

const ButtonExample = () => {
  return (
    <BasePageElement>
      <Heading>Button</Heading>
      <ButtonGroup flexDirection={{ base: "column", md: "row" }} gap={2}>
        <Button onClick={() => console.log("Clicked")}>Base Branded</Button>
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
  );
};

export default ButtonExample;
