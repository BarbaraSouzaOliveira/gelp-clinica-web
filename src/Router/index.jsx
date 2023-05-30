
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home'
import Complexity from "../Pages/Complexity";
export default function Router() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact></Route>
      <Route path="/complexity" element={<Complexity />} exact></Route>
    </Routes>
   </BrowserRouter>
  );
}