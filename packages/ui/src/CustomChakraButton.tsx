import { Button as ChakraButton, ButtonProps } from "@chakra-ui/react";
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
    // open issue in chakra community :
    // This error is due to the conflits between typescript version and chakra version
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
