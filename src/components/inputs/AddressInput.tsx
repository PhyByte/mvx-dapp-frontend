import { CheckIcon, CloseIcon, Search2Icon } from "@chakra-ui/icons";
import {
  Flex,
  FlexProps,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Tooltip,
} from "@chakra-ui/react";
import { SetStateAction, useState } from "react";

interface AddressInputProps extends FlexProps {
  setReturnValue: (value: string) => void;
}

const AddressInput = ({ setReturnValue, ...rest }: AddressInputProps) => {
  const [value, setValue] = useState("");
  const [isInvalid, setIsInvalid] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const isValidAddress = (address: string): boolean => {
    const validLength = 62;
    const regex = /^erd1[a-zA-Z0-9]+$/;

    return address.length === validLength && regex.test(address);
  };

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    const newValue = event.target.value as string;

    setValue(newValue);

    // Only set return value if the address starts with "erd1" (preliminary validation)
    if (newValue.startsWith("erd1")) {
      setReturnValue(newValue);
    } else {
      setReturnValue("");
    }

    // Clear invalid state while typing
    if (isFocused) {
      setIsInvalid(false);
    }
  };

  const handleBlur = () => {
    setIsFocused(false);

    // Perform full validation on blur
    if (!isValidAddress(value)) {
      setIsInvalid(true);
      setReturnValue("");
    } else {
      setIsInvalid(false);
    }
  };

  const handleFocus = () => {
    setIsFocused(true);
    setIsInvalid(false); // Reset invalid state on focus
  };

  return (
    <InputGroup {...rest}>
      <Input
        variant={"filled"}
        isInvalid={isInvalid}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        onFocus={handleFocus}
        placeholder="Enter an erd address:  erd1..."
        size="full"
        borderWidth={2}
        borderRadius={"xl"}
        textAlign={"center"}
      />
      <InputRightElement>
        {isInvalid
          ? value !== "" && 
          
          <Tooltip label="Invalid address" aria-label="Invalid address">
          <CloseIcon color="red.500" />
          </Tooltip>
          : value.startsWith("erd1") &&
            value.length >= 62 && (
              <Flex gap="2" justify={"center"} align={"center"}mr='4'>
                <CheckIcon color="green.500" />
                <Tooltip label="View on explorer" aria-label="View on explorer">
                  <Link
                    href={`https://explorer.multiversx.com/accounts/${value}`}
                    isExternal
                  >
                    <Search2Icon color="brand.main" />
                  </Link>
                </Tooltip>
              </Flex>
            )}
      </InputRightElement>
    </InputGroup>
  );
};

export default AddressInput;
