import React from 'react'
import {  Route, Routes } from "react-router-dom";
import Home from '../Pages/Home';
import Api from '../Pages/Api';
import Error from '../Pages/Error';
import Menu from '../Pages/Menu';
import Paragraphgenerator from '../Pages/Paragraphgenerator';
import Accordions from '../Pages/Accordions';
import Tour from '../Pages/Tour';
import Tabs from '../Pages/Tabs';
import Silder from '../Pages/Silder';
const Routing = () => {
  return (
        <>
        
         <Routes>
         <Route path='/' element={ <Home/>} />
         <Route path='/api' element={ <Api/>} />
         <Route path='/menu' element={ <Menu/>} />
         <Route path='/paragraph_generator' element={ <Paragraphgenerator/>} />
         <Route path='/accordion' element={ <Accordions/>} />
         <Route path='/tour' element={ <Tour/>} />
         <Route path='/tabs' element={ <Tabs/>} />
         <Route path='/Silder' element={ <Silder/>} />
        

         <Route path='*' element={ <Error/>} />
         </Routes>
        </>
  )
}

export default Routing