/**
 *
 * Input
 *
 */

import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react'

import { Field } from '@ui/components/field'

interface InputProps extends ChakraInputProps {
  label?: string
  errorText?: string
  dataTestId?: string
}

const Input = ({ label, errorText, dataTestId, ...props }: InputProps) => {
  return (
    <Field label={label} errorText={errorText} invalid={!!errorText}>
      <ChakraInput {...props} data-testid={dataTestId} />
    </Field>
  )
}

export default Input
