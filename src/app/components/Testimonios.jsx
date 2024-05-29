import React from 'react';
import '@fontsource/roboto';
import perfil3 from '../../assets/imagenes/perfil3.jpg';
import perfil1 from '../../assets/imagenes/perfil1.jpg';
import nataperfil2 from '../../assets/imagenes/nataperfil2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWhatsapp, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const testimoniosData = [
  { id: 1, imgSrc: perfil3, name: 'Carlos', description: 'jhon tiene una visión clara para el futuro y está comprometido a seguir creciendo y evolucionando tanto a nivel personal como profesional. Sus objetivos incluyen, y estoy seguro(a) de que alcanzará grandes alturas en su carrera.' },
  { id: 2, imgSrc: perfil1, name: 'Pedro', description: 'Es un placer para mí presentarles a jhon, un destacado profesional cuya dedicación y pasión por su trabajo son ejemplares. A lo largo de esta presentación, exploraremos los aspectos clave que hacen de jhon un activo invaluable para nuestro equipo y nuestra organización.' },
  { id: 3, imgSrc: nataperfil2, name: 'natalia', description: 'Jhon es una persona íntegra y responsable. Siempre está a la vanguardia de los nuevos cambios tecnológicos y, sobre todo, es un excelente compañero en el ámbito labora' }
];

const Testimonios = () => {
  return (
    <section
      id='testimonos'
      className='min-h-screen container grid place-items-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-heroDark'
    >
      <div className='text-center text-white mb-10'>
        <h1 className="text-4xl">Testimonios</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-20">
        {testimoniosData.map(testimonio => (
          <div key={testimonio.id} className="flex flex-col items-center text-white mb-10 md:mb-0">
            <img
              src={testimonio.imgSrc}
              alt={testimonio.name}
              style={{ width: '150px', height: '150px', borderRadius: '50%' }}
              className="overflow-hidden mb-4"
            />
            <div className="text-center">
              <h2 className="text-xl font-bold mb-2">{testimonio.name}</h2>
              <p>{testimonio.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className='flex flex-col items-center justify-center w-full mt-10'>
        <footer className='text-center text-white'>
          <h1 className="text-2xl mb-4">Contactame</h1>
          <div className="flex justify-center space-x-8">
            <a href='https://github.com/jhonortiz12' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} size='lg' />
            </a>
            <a href="https://wa.link/hdndbd" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
            <a href="https://www.facebook.com/jhonesteban.ortizpascuaza.5" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="ortizpascuaza@gmail.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Testimonios;
