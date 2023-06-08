
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home'
import Complexity from "../Pages/Complexity";
import Specialty from "../Pages/Specialty";
export default function Router() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact></Route>
      <Route path="/complexity" element={<Complexity />} exact></Route>
      <Route path="/specialty" element={<Specialty />} exact></Route>
    </Routes>
   </BrowserRouter>
  );
}