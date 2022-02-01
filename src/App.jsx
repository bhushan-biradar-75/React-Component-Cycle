import React from 'react';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Header from './Compo/Header';
import Home from './Compo/Pages/Home';
import About from './Compo/Pages/About';
import Contact from './Compo/Pages/Contact'
import './App.css'

const Routeing = () => {
  return( 
    <BrowserRouter>
  <div>
    <Header />
  </div>
    <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/contact" element={<Contact/>}/>
    </Routes>
  </BrowserRouter>
  )};

export default Routeing;
