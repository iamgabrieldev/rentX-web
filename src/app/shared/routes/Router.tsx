import Home from "@/app/pages/Home";
import { Routes, Route } from "react-router-dom";

const Router: React.FC = () => {
  return (
    <Routes path="/" element={<DefaultLayout />}>
      <Route element={<Home />}/>
    <Routes>
  )
}