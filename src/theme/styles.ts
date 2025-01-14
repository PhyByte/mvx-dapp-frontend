import { Styles } from "@chakra-ui/theme-tools";

export const styles: Styles = {
  global: {
    "*::placeholder": {
      color: "chakra-placeholder-color",
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color",
    },
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base",
    },
    p: {
      fontSize: ["16px", "18px"],
      fontWeight: "normal",
      lineHeight: "110%",
      letterSpacing: "-1%",
      color: "brand.light",
    },
    h1: {
      fontSize: ["42px", "64px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-1%",
      color: "brand.main",
    },
    h2: {
      fontSize: ["32px", "40px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-1%",
      color: "brand.main",
    },
    h3: {
      fontSize: ["26px", "32px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-1%",
      color: "brand.main",
    },
    h4: {
      fontSize: ["20px", "24px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-1%",
      color: "brand.light",
    },
    h5: {
      fontSize: ["18px", "20px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-1%",
      color: "brand.light",
    },
    h6: {
      fontSize: ["14px", "16px"],
      fontWeight: "bold",
      lineHeight: "110%",
      letterSpacing: "-1%",
      color: "brand.light",
    },
  },
};
