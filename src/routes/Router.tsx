import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from '../pages'

const AppRouter: FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  )
}

export default AppRouter
