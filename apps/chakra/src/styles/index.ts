import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { TextStyle as Text } from "./TextStyles";
import { ButtonStyle as Button } from "./ButtonStyles";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  colors: {
    primary: {
      100: "#B6C2CE",
      200: "#9CB1C4",
      300: "#82A2BE",
      400: "#6794BD",
      500: "#4887C1",
      600: "#2E7CC3",
      700: "#26659F",
      800: "#2D5B84",
      900: "#30516F",
    },
    secondary: {
      100: "#F0F2FA",
      200: "#CBD3F2",
      300: "#A2B2F3",
      400: "#748FFC",
      500: "#617CEA",
      600: "#546ED6",
      700: "#4B62C1",
      800: "#495CA8",
      900: "#49537A",
    },
    danger: {
      100: "#D9C9C2",
      200: "#CEB2A7",
      300: "#C89D8B",
      400: "#C7876E",
      500: "#CC714C",
      600: "#D85927",
      700: "#D9480F",
      800: "#B14920",
      900: "#7A442F",
    },
    warning: {
      100: "#D9CCBE",
      200: "#D0BAA2",
      300: "#CCAA85",
      400: "#CD9B65",
      500: "#D58E41",
      600: "#E48219",
      700: "#E67700",
      800: "#BA6A15",
      900: "#7F5529",
    },
    success: {
      100: "#5C9382",
      200: "#4D8C79",
      300: "#3F8771",
      400: "#31826A",
      500: "#248064",
      600: "#167F5F",
      700: "#087F5B",
      800: "#12684E",
      900: "#1B473A",
    },
    light: {
      100: "#F7F7F7",
      200: "#E0E0E1",
      300: "#CBCBCD",
      400: "#A6A7AB",
      500: "#95969A",
      600: "#86878B",
      700: "#797A7D",
      800: "#6D6E70",
      900: "#636364",
    },
  },
  space: {
    xs: "2px",
    sm: "5px",
    md: "10px",
    lg: "15px",
    xl: "20px",
  },
});

export default theme;
