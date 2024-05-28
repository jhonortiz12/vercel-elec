import React from 'react';
import perfil3 from '../../assets/imagenes/perfil3.jpg';
import perfil1 from '../../assets/imagenes/perfil1.jpg';
import perfil2 from '../../assets/imagenes/perfil2.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faWhatsapp, faLinkedin, faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const testimoniosData = [
  { id: 1, imgSrc: perfil3, name: 'Nombre del Testimonio 1', description: 'Descripción del testimonio 1' },
  { id: 2, imgSrc: perfil1, name: 'Nombre del Testimonio 2', description: 'Descripción del testimonio 2' },
  { id: 3, imgSrc: perfil2, name: 'Nombre del Testimonio 3', description: 'Descripción del testimonio 3' }
];

const Testimonios = () => {
  return (
    <section
      id='testimonos'
      className='min-h-screen container grid place-items-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-heroDark'
    >
      <div className='text-center text-white'>
        <h1 className="text-4xl mb-10">Testimonios</h1>
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
          <h1 className="text-2xl mb-4">Contactame</h1> {/* Ajusta el tamaño del texto */}
          <div className="flex justify-center space-x-8"> {/* Ajusta el espaciado entre los iconos */}
            <a href='https://github.com/tuusuario' target='_blank' rel='noopener noreferrer'>
              <FontAwesomeIcon icon={faGithub} size='lg' /> {/* Ajusta el tamaño de los iconos */}
            </a>
            <a href="https://wa.me/tuwhatsapplink" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} size="lg" />
            </a>
            <a href="https://www.linkedin.com/in/tuperfil" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            <a href="https://www.facebook.com/tupagina" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="lg" />
            </a>
            <a href="mailto:tuemail@outlook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faEnvelope} size="lg" />
            </a>
          </div>
        </footer>
      </div>
    </section>
  );
};

export default Testimonios;
