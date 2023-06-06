import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Main from "../pages/Main"
import Register from "../pages/Register";
import Login from "../pages/Login"
import DragDropDetail from "../pages/DragDropDetail"
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";
const AppRouter = () => {
  return <BrowserRouter>
  <Navbar/>
  <Routes>
    <Route path="/" element={<Main/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/register" element={<Register/>}/>
    <Route path="/details/:id" element= {<PrivateRouter/>}>
    <Route path="" element={<DragDropDetail/>}/>
    </Route>
  </Routes>
  
  
  </BrowserRouter>;
};

export default AppRouter;
