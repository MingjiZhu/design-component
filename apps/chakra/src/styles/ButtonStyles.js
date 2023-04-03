import { mode } from "@chakra-ui/theme-tools";

export const ButtonStyle = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: (props) => ({
      color: mode("text.light", "white")(props),
      bg: mode("primary.dark", "secondary")(props),
    }),
  },
  defaultProps: {},
};
