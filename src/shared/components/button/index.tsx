/**
 *
 * Button
 *
 */

import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from '@ui/components/button'

interface ButtonProps extends ChakraButtonProps {}

const Button = (props: ButtonProps) => {
  return <ChakraButton {...props}>Button</ChakraButton>
}

export default Button
