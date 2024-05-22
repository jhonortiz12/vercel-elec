import React from 'react';
import coder from '../../assets/imagenes/coder.png';

const habilidadesData = [
  { id: 1, imgSrc: coder, title: 'Habilidad 1', description: 'Descripción de la habilidad 1' },
  { id: 2, imgSrc: coder, title: 'Habilidad 2', description: 'Descripción de la habilidad 2' },
  { id: 3, imgSrc: coder, title: 'Habilidad 3', description: 'Descripción de la habilidad 3' },
  { id: 4, imgSrc: coder, title: 'Habilidad 4', description: 'Descripción de la habilidad 4' },
  { id: 5, imgSrc: coder, title: 'Habilidad 5', description: 'Descripción de la habilidad 5' },
  { id: 6, imgSrc: coder, title: 'Habilidad 6', description: 'Descripción de la habilidad 6' },
];

const Habilidades = () => {
  return (
    <section id='projects'
      className='min-h-screen container grid place-items-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-heroDark'
    >
      <div className='text-center text-stone-700'>
        <h1 className="text-4xl mb-10">Habilidades</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 text-stone-700'>
        {habilidadesData.map((item) => (
          <div key={item.id} className="flex items-center mt-10 px-4">
            <img
              src={item.imgSrc}
              alt={`perfil ${item.id}`}
              style={{ width: '150px', height: '150px', borderRadius: '50%' }}
              className="overflow-hidden mr-4 transform transition-transform duration-300 hover:scale-110"
            />
            <div className="text-left">
              <h2 className="text-xl font-bold mb-2">{item.title}</h2>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilidades;
