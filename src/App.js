import React from 'react'
import './App.css'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Navbar from './component/Navbar'
import Home from './component/Pages/Home'
import Contact from './component/Pages/Contact'
import Product from './component/Pages/Product'
import Services from './component/Pages/Services'
import About from './component/Pages/About'

function App() {
  return (                                                                                      
    <Router>
 <Navbar/> 
 <Routes>
 <Route path='/' exact element={<Home/>}/>
   <Route path='/about' exact element={<About name='Abishek' id={1001}/>}/>
   <Route path='/products' exact element={<Product/>}/>
   <Route path='/services' exact element={<Services/>}/>
   <Route path='/contact' exact element={<Contact/>}/>
  
 </Routes>
    </Router>
  )
}

export default App
