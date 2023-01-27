import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { CarList, Home } from '../pages'

const Router: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/listagem" element={<CarList />} />
    </Routes>
  )
}

export default Router
