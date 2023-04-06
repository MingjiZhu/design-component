import {
  Button as DaisyUIButton,
  ButtonProps as DaisyButtonProps,
} from "react-daisyui";
import { IconPlus } from "@tabler/icons-react";

interface CustomButtonProps extends DaisyButtonProps {
  title?: string;
}

export const CustomDaisyUIButton: React.FC<CustomButtonProps> = ({
  ...props
}) => {
  return (
    <DaisyUIButton
      {...props}
      startIcon={<IconPlus size={20} className="mr-2" />}
    >
      Add {props.title}
    </DaisyUIButton>
  );
};

export default CustomDaisyUIButton;
