
import React from 'react';
import About from './About';
import Header from './Header';
import Informacion from './Informacion';
import Habilidades from './Habilidades';
import Testimonios from './Testimonios';
import Contacto from './Contacto';

function App() {
  return (
    <div className='dark:text-gray-200 dark:bg-black'>
      <Header />
      <Informacion />
      <About />
      <Habilidades/>
      <Testimonios/>  
      <Contacto/>   
    </div>
  );
}

export default App;
