import { Button, ButtonProps } from '@mantine/core';

export const MantineButton: React.FC<ButtonProps> =({...props})=>(
  <Button {...props} variant="gradient" gradient={{ from: 'teal', to: 'lime', deg: 105 }}/>
)