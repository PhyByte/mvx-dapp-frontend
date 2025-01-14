import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { mode, transparentize } from "@chakra-ui/theme-tools";
import { runIfFn } from "../utils/run-if-fn";

const baseStyle = defineStyle((props) => ({
  lineHeight: "1.2",
  p: "2",
  borderRadius: "md",
  fontWeight: "semibold",
  color: mode("black", "white")(props), // Default text color
  bg: "brand.main", // Default background color
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "0 0 0 2px gray.300", // Subtle grey focus outline
  },
  _disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
    bg: "gray.100", // Disabled state background
    boxShadow: "none",
  },
  _hover: {
    bg: "brand.light", // Slightly darker background on hover
    _disabled: {
      bg: "brand.dark", // Prevent hover effects when disabled
    },
  },
  _active: {
    bg: "gray.400", // Darker background for active state
  },
}));

const variantAction = defineStyle((props) => ({
  bg: mode("green.200", "green.500")(props),
  p: "2",
  color: mode("black", "white")(props),
  borderRadius: "xl",
  borderColor: mode("green.300", "green.600")(props),
  _hover: {
    bg: mode("green.300", "green.600")(props),
  },
  _active: {
    bg: mode("green.400", "green.700")(props),
  },
  boxShadow: "greenStrongGlow",
}));
const variantDelete = defineStyle((props) => ({
  bg: mode("red.200", "red.500")(props),
  p: "2",
  color: mode("black", "white")(props),
  borderRadius: "xl",
  borderColor: mode("red.300", "red.600")(props),
  _hover: {
    bg: mode("red.300", "red.600")(props),
  },
  _active: {
    bg: mode("red.400", "red.700")(props),
  },
  boxShadow: "redStrongGlow",
}));

const variantGhost = defineStyle((props) => {
  const { colorScheme: c, theme } = props;

  if (c === "gray") {
    return {
      color: mode(`gray.800`, `whiteAlpha.900`)(props),
      _hover: {
        bg: mode(`gray.100`, `whiteAlpha.200`)(props),
      },
      _active: { bg: mode(`gray.200`, `whiteAlpha.300`)(props) },
    };
  }

  const darkHoverBg = transparentize(`${c}.200`, 0.12)(theme);
  const darkActiveBg = transparentize(`${c}.200`, 0.24)(theme);

  return {
    color: mode(`${c}.600`, `${c}.200`)(props),
    bg: "transparent",
    _hover: {
      bg: mode(`${c}.50`, darkHoverBg)(props),
    },
    _active: {
      bg: mode(`${c}.100`, darkActiveBg)(props),
    },
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;
  const borderColor = mode(`gray.200`, `whiteAlpha.300`)(props);
  return {
    border: "1px solid",
    borderColor: c === "gray" ? borderColor : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":
      { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":
      { marginBottom: "-1px" },
    ...runIfFn(variantGhost, props),
  };
});

const variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    padding: 2,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: mode(`${c}.500`, `${c}.200`)(props),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none",
      },
    },
    _active: {
      color: mode(`${c}.700`, `${c}.500`)(props),
    },
  };
});

const variantUnstyled = defineStyle({
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0",
});

const variants = {
  action: variantAction,
  delete: variantDelete,
  ghost: variantGhost,
  outline: variantOutline,
  link: variantLink,
  unstyled: variantUnstyled,
};

const sizes = {
  lg: defineStyle({
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6",
  }),
  md: defineStyle({
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4",
  }),
  sm: defineStyle({
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3",
  }),
  xs: defineStyle({
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2",
  }),
};

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants,
  sizes,
});
