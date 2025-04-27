import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from 'react-router'

import ExampleList from '@app/example/pages/list'
import { ROUTES } from '@shared/routes'
import { RoutesProps } from '@shared/types/route'

const routes: RoutesProps[] = [
  {
    path: ROUTES.home,
    element: <ExampleList />,
  },
]

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      {routes?.map((route, index) => (
        <Route key={index} {...{ ...route }} element={<>{route.element}</>} />
      ))}
      <Route path="*" element={<Navigate to={ROUTES.home} />} />
    </>,
  ),
)
