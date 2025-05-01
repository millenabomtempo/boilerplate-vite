/**
 *
 * ExampleList
 *
 */

import { Box } from '@chakra-ui/react'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'

import Form, { FormData } from '@app/example/components/form'
import { getExample } from '@app/example/service'
import { IExample } from '@shared/interfaces/example'

import { styles } from './styles'

const ExampleList = () => {
  const { isPending, data } = useQuery<IExample[], AxiosError, IExample[]>({
    queryKey: ['dogs'],
    queryFn: () => getExample(),
  })

  if (isPending) {
    return <span>Loading...</span>
  }

  const onSubmit = (data: FormData) => {
    // eslint-disable-next-line no-console
    console.log({ data })
  }

  return (
    <Box {...styles.container}>
      <h1 data-testid="text--title">Boilerplate Vite</h1>

      <Box maxW="50%" w="100%">
        <Form onSubmit={onSubmit} />

        <Box {...styles.content}>
          {data?.map((item) => (
            <Box key={item?.id} w="200px">
              <img src={item.url}></img>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  )
}

export default ExampleList
