import { mode } from "@chakra-ui/theme-tools";

export const TextStyle = {
  baseStyle: {},
  sizes: {},
  variants: {
    primary: (props) => ({
      color: mode("text.dark", "text.light")(props),
    }),
  },
  defaultProps: {},
};
