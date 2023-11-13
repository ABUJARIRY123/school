import React from 'react';
import { Navbar, Home, About, Teachers, Programs, Contact, Footer } from './components/index';
import SlideShow from './components/SlideShow';
import slide1 from '../src/assets/1.jpg';
import slide2 from '../src/assets/2.jpg';
import slide3 from '../src/assets/3.jpg';
import slide4 from '../src/assets/4.jpg';

const slides = [
  { id: 1, src: slide1 },
  { id: 2, src: slide2 },
  { id: 3, src: slide3 },
  { id: 4, src: slide4 },
];

function App() {
  return (
    <div className="font-Poppins bg-Solitude">
      <Navbar />
      <div className="max-w-screen-xl mx-auto">
        <SlideShow>
          {slides}
        </SlideShow>
      </div>
      <Home />
      <About />
      <Programs />
      <Teachers />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
