
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../Pages/Home'
import Settings from '../Pages/Settings'
import Exemple from '../Pages/Exemple'
export default function Router() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} exact></Route>
      <Route path="/settings" element={<Settings />} ></Route>
      <Route path="/exemple" element={<Exemple />} ></Route>
    </Routes>    
   </BrowserRouter>
  );
}