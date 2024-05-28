import React from 'react';
import { useState } from 'react';
import { CgCodeSlash } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';
import { HiMenuAlt1 } from 'react-icons/hi';

const Header = () => {
  const [toggled, setToggled] = useState(false);

  const openMenu = () => {
    setToggled(true);
  };

  const closeMenu = () => {
    setToggled(false);
  };

  return (
    <header className='fixed w-full py-4 lg:px-0 px-5 z-[999] duration-300'>
      <nav className='flex justify-between items-center max-w-6xl mx-auto px-2'>
        <div className='flex gap-4 items-center'>
          <div>
            <CgCodeSlash size={40} /> {/* Ajusta el tamaño del ícono */}
          </div>
        </div>
        <ul className='gap-10 md:flex hidden hover:*:text-primary *:duration-200'>
          <li>
            <a href='#home' className='hover:bg-gray-800 rounded-full px-5 py-2'>INICIO</a>
          </li>
          <li>
            <a href='#proyectos' className='hover:bg-gray-800 rounded-full px-5 py-2'>PROYECTOS</a>
          </li>
          <li>
            <a href='#habilidades' className='hover:bg-gray-800 rounded-full px-5 py-2'>HABILIDADES</a>
          </li>
          <li>
            <a href='#testimonos' className='hover:bg-gray-800 rounded-full px-5 py-2'>TESTIMONIOS</a>
          </li>
          <li className='theme-switch'>
            <i className='fa-solid fa-circle-half-stroke cursor-pointer'></i>
          </li>
        </ul>
        <div className='block md:hidden'>
          {toggled ? (
            <AiOutlineClose onClick={closeMenu} size={30} className='text-white cursor-pointer' />
          ) : (
            <HiMenuAlt1 onClick={openMenu} size={30} className='text-white cursor-pointer' />
          )}
        </div>
      </nav>
      {toggled && (
        <nav className='block md:hidden'>
          <ul className='flex flex-col items-start ml-10'>
            <li><a href='#home' className='text-white text-xl cursor-pointer'>Inicio</a></li>
            <li><a href='#proyectos' className='text-white text-xl cursor-pointer'>Proyectos</a></li>
            <li><a href='#habilidades' className='text-white text-xl cursor-pointer'>Habilidades</a></li>
            <li><a href='#testimonos' className='text-white text-xl cursor-pointer'>testimonios</a></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
