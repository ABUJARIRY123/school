import React from 'react';
import {Navbar, Home, About, Teacher, Programs, Contact, Footer} from './components/index';

function App() {

  return (
<div className="font-Poppins bg-Solitude">
  <Navbar/>
  <Home/>
  <About/>
  <Teacher/>
  <Programs/>
  <Contact/>
  <Footer/>
  
</div>
  );
      
}

export default App
