import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';


const Contacto = () => {
  return (
    <section
      id='contact'
      className='min-h-screen container grid place-items-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-heroDark'
    >
      <h1>
        holaaa
      </h1>
      {/* Enlace al perfil de GitHub */}
      <a href='https://github.com/tuusuario' target='_blank' rel='noopener noreferrer'>
        {/* Icono de GitHub */}
        <FontAwesomeIcon icon={faGithub} size='3x' />
      </a>
    </section>
  );
};

export default Contacto;
