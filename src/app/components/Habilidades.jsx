import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faJsSquare, faNodeJs, faReact, faPython, faJava } from '@fortawesome/free-brands-svg-icons';
import { faFileCode } from '@fortawesome/free-solid-svg-icons';

const habilidadesData = [
  { id: 1, icon: faJsSquare, title: 'JavaScript' },
  { id: 2, icon: faNodeJs, title: 'Node.js'},
  { id: 3, icon: faReact, title: 'React' },
  { id: 4, icon: faPython, title: 'Python' },
  { id: 5, icon: faJava, title: 'Java'},
  { id: 6, icon: faFileCode, title: 'C#'},
];

const Habilidades = () => {
  return (
    <section
      id='habilidades'
      className='min-h-screen container grid place-items-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-heroDark'
    >
      <div className='text-center text-white ml-8'>
        <h1 className="text-6xl ">Habilidades</h1> 
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-white md:ml-20'> 
        {habilidadesData.map((item) => (
          <div key={item.id} className="flex flex-col items-center md:flex-row md:items-start md:px-8"> 
            <FontAwesomeIcon
              icon={item.icon}
              size="6x"
              className="text-white mb-4 md:mb-0 md:mr-8 transform transition-transform duration-300 hover:scale-110"
            />
            <div className="text-center md:text-left">
              <h2 className="text-xl font-bold">{item.title}</h2>
              {/* Agrega descripción si es necesario */}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
