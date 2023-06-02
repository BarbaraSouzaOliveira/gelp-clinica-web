
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from '../Pages/Home'
import Paciente from "../Pages/Paciente"

export default function Router() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact></Route>
      <Route path="/Paciente" element={<Paciente />} ></Route>
    </Routes>    
   </BrowserRouter>
  );
}