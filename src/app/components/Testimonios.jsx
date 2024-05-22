import React from 'react';
import perfil from '../../assets/imagenes/perfil.jpeg'; // Asegúrate de importar la imagen correcta

const testimoniosData = [
  { id: 1, imgSrc: perfil, name: 'Nombre del Testimonio 1', description: 'Descripción del testimonio 1' },
  { id: 2, imgSrc: perfil, name: 'Nombre del Testimonio 2', description: 'Descripción del testimonio 2' },
  { id: 3, imgSrc: perfil, name: 'Nombre del Testimonio 3', description: 'Descripción del testimonio 3' }
];

const Testimonios = () => {
  return (
    <section
      id='testimonos'
      className='min-h-screen container grid place-items-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-heroDark'
    >
      <div className='text-center text-stone-700'>
        <h1 className="text-4xl mb-10">Testimonios</h1>
      </div>
      <div className="grid grid-cols-3 gap-20">
        {testimoniosData.map(testimonio => (
          <div key={testimonio.id} className="flex flex-col items-center text-stone-700">
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
    </section>
  );
};

export default Testimonios;
