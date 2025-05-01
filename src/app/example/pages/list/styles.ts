import { SystemStyleObject } from '@chakra-ui/react'

export const styles: Record<string, SystemStyleObject> = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    display: 'flex',
    gap: '1.5rem',
    flexWrap: 'wrap',
    p: '1.5rem',
  },
}
