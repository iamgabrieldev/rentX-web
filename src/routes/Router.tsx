import { type FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { CarFilter, CarList, CarUnique, Home, SignIn } from '../pages'
import DefaultLayout from '../layout/DefaultLayout'

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<DefaultLayout />}>
        <Route path="/app/listagem" element={<CarList />} />
        <Route path="/app/filtro" element={<CarFilter />} />
        <Route path="/app/login" element={<SignIn />} />
      </Route>
      <Route path="/app/listagem/unique/:id" element={<CarUnique />} />
    </Routes>
  )
}

export default Router
