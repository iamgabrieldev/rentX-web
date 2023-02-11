import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CarFilter, CarList, Home, SignIn } from '../pages'
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
    </Routes>
  )
}

export default Router
