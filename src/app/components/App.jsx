
import React from 'react';
import About from './About';
import Header from './Header';
import Informacion from './Informacion';
import Habilidades from './Habilidades';
import Testimonios from './Testimonios';


function App() {
  return (
    <div className='dark:text-gray-200 dark:bg-black'>
      <Header />
      <Informacion />
      <About />
      <Habilidades/>
      <Testimonios/>  
      
    </div>
  );
}

export default App;
