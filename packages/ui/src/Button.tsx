import { Button, ButtonProps as MantineProps } from '@mantine/core';

export interface ButtonProps extends MantineProps {
  intent?: string
}

export const CustomButton: React.FC<ButtonProps> = ({ ...props }) => {
  const button = ({...props}) => {
    switch(props.intent) {
      case "primary": return <Button {...props} color="primary"/>;
      case "secondary": return <Button {...props} color="secondary" />;
      case "danger": return <Button {...props} color="danger" />;
      case "warning": return <Button {...props} color="warning" />;
      case "success": return <Button {...props} color="success" />;
      case "light": return <Button {...props} color="light" />;
      default: return <Button {...props}/>
    }
  }
  return(
    button({...props})
  )
}


export default CustomButton;
 