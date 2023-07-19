import React from 'react'
import {  Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Api from '../Pages/Api';
import Error from '../Pages/Error';
const Routing = () => {
  return (
        <>
        
         <Routes>
         <Route path='/' element={ <Home/>} />
         <Route path='/api' element={ <Api/>} />
         <Route path='*' element={ <Error/>} />
         </Routes>
        </>
  )
}

export default Routing