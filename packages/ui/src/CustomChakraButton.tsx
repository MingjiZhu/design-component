import { Button as ChakraButton, ButtonProps } from "@chakra-ui/button";
import { AddIcon } from "@chakra-ui/icons";

export interface ChakraButtonProps extends ButtonProps {
  title?: string;
  bg?: string;
}

export const CustomChakraButton: React.FC<ChakraButtonProps> = ({
  colorScheme = "teal",
  ...props
}) => {
  return (
    <ChakraButton
      colorScheme={colorScheme}
      mr={props.mr}
      leftIcon={<AddIcon />}
    >
      Add {props.title}
    </ChakraButton>
  );
};

export default CustomChakraButton;
