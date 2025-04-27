import { RouteProps } from 'react-router'

export type RoutesProps = {
  hasLayout?: boolean
  accessLevels?: string[]
} & RouteProps
