
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../Pages/Home'
import Paciente from "../Pages/Paciente"
import Complexity from "../Pages/Complexity"

export default function Router() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact></Route>
      <Route path="/Paciente" element={<Paciente />} ></Route> 
      <Route path="/complexity" element={<Complexity />} exact></Route>
    </Routes>
   </BrowserRouter>
  );
}