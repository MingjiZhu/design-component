import Head from "next/head";
import {
  Button,
  Card,
  Text,
  Grid,
  Row,
  Input,
  Container,
  ButtonProps,
} from "@nextui-org/react";
import { IconPlus } from "@tabler/icons-react";

interface CustomButtonProps extends ButtonProps {
  title?: string;
  bg?: string;
}

export const CustomNextUIButton: React.FC<CustomButtonProps> = ({
  bg = "$pink800",
  ...props
}) => {
  return (
    <Button
      auto
      icon={<IconPlus size={20} />}
      css={{
        borderRadius: "$xs", // radii.xs
        border: "$space$1 solid transparent",
        background: bg, // colors.pink800
        color: "$pink100",
        height: "$12", // space[12]
        boxShadow: "$md", // shadows.md
        "&:hover": {
          background: "$pink100",
          color: "$pink800",
        },
        "&:active": {
          background: "$pink200",
        },
        "&:focus": {
          borderColor: "$pink400",
        },
        marginTop: "$3",
      }}
    >
      Add {props.title}
    </Button>
  );
};
