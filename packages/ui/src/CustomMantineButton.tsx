import {
  Button as MantineButton,
  ButtonProps as MantineProps,
} from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

export interface CustomButtonProps extends MantineProps {
  title?: string;
  bg?: string;
}

export const CustomMantineButton: React.FC<CustomButtonProps> = ({
  bg = "#ed6ea0",
  ...props
}) => {
  return (
    <MantineButton
      component="a"
      target="_blank"
      rel="noopener noreferrer"
      leftIcon={<IconPlus size={20} />}
      styles={(theme) => ({
        root: {
          backgroundColor: bg,
          border: 0,
          height: 45,
          width: 150,
          paddingRight: 2,
          marginLeft: theme.spacing.md,
          marginTop: theme.spacing.md,
          "&:not([data-disabled])": theme.fn.hover({
            backgroundColor: theme.fn.darken(bg, 0.05),
          }),
        },

        leftIcon: {
          marginLeft: theme.spacing.md,
        },
      })}
    >
      Add {props.title}
    </MantineButton>
  );
};

export default CustomMantineButton;
