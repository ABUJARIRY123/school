import React from 'react';
import {Navbar, Home, About, Teachers, Programs, Contact, Footer} from './components/index';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function App() {

  return (
<div className="font-Poppins bg-Solitude">
  <Navbar/>
  <Home/>
  <About/>
  <Programs/>
  <Teachers/>
  <Contact/>
  <Footer/>
  
</div>
  );
      
}

export default App
