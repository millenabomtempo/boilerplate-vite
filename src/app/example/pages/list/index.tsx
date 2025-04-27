/**
 *
 * ExampleList
 *
 */

import { zodResolver } from '@hookform/resolvers/zod'
import { useQuery } from '@tanstack/react-query'
import { AxiosError } from 'axios'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { IExample } from '@shared/interfaces/example'

import { getExample } from '../../service'

const schema = z.object({
  name: z.string().nonempty('Name is required'),
  age: z.string(),
})

type FormData = z.infer<typeof schema>

const ExampleList = () => {
  const { isPending, isError, data, error } = useQuery<
    IExample[],
    AxiosError,
    IExample[]
  >({
    queryKey: ['dogs'],
    queryFn: () => getExample(),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  })

  const onSubmit = (data: FormData) => {
    // eslint-disable-next-line no-console
    console.log({ data })
  }

  if (isPending) {
    return <span>Loading...</span>
  }

  if (isError) {
    return <span>Error: {error.message}</span>
  }

  return (
    <div>
      <h1>Boilerplate Vite</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="name">Name</label>
          <input {...register('name')} />
          {errors.name && <span>{errors.name.message}</span>}
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input {...register('age')} />
          {errors.age && <span>{errors.age.message}</span>}
        </div>

        <button type="submit">Submit</button>
      </form>

      {data?.map((item) => <p key={item?.id}>{item.url}</p>)}
    </div>
  )
}

export default ExampleList
