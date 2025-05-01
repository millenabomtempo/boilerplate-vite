/**
 *
 * Form
 *
 */

import { Box, chakra } from '@chakra-ui/react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import Input from '@shared/components/input'
import { Button } from '@ui/components/button'

import { styles } from './styles'

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  age: z.string().nonempty('Age is required'),
})

export type FormData = z.infer<typeof schema>

export interface FormProps {
  onSubmit: (data: FormData) => void
}

const Form = ({ onSubmit }: FormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const handleOnSubmit = (data: FormData) => {
    onSubmit(data)
  }

  return (
    <chakra.form
      noValidate
      onSubmit={handleSubmit(handleOnSubmit)}
      {...styles.container}
    >
      <Box {...styles.field}>
        <Input
          label="name"
          errorText={errors?.name?.message}
          {...register('name')}
          dataTestId="input--name"
        />
      </Box>
      <Box {...styles.field}>
        <Input
          label="Age"
          errorText={errors?.age?.message}
          {...register('age')}
          dataTestId="input--age"
        />
      </Box>

      <Button type="submit" colorPalette="green" data-testid="button--submit">
        Submit
      </Button>
    </chakra.form>
  )
}

export default Form
