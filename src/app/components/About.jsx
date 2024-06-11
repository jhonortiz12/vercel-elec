import React from 'react';
import '@fontsource/roboto';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

// Importa tu imagen
import ucc from '../../assets/imagenes/ucc.jpeg';
import proyecto2 from '../../assets/imagenes/proyecto2.jpeg';
import api from '../assets/imagenes/api.jpeg';


const About = () => {
  return (
    <section 
    id='proyectos' 
    className='py-28 text-center mt-20'>
      <h1 className='text-5xl mb-10'>PROYECTOS</h1>
      <div className="flex justify-center">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className="swiper-container-first"
        >
          <SwiperSlide>
            <div >
              <div className='slide-content mx-2 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
                <div className="flex justify-center ">
                  <img src={ucc} alt='ucc' style={{ width: '400px', height: '400px'  }} className='rounded-lg'  />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-4">página de odontología</h2>
                  <p>Con un equipo de trabajo elaboramos una página web  a la facultan de odontología de la universidad cooperativa de Colombia sede pasto </p>
                </div>
              </div>
            </div>
          </SwiperSlide>




          <SwiperSlide>
            <div className='flex justify-center'>
              <div className='slide-content mx-2 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
                <div className="aspect-w-1 aspect-h-1 sm:aspect-w-10 sm:aspect-h-10">
                  <img src={proyecto2} alt='ucc' style={{ width: '400px', height: '400px' }}  className='rounded-lg' />
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-10">Aplicacion de toma de pedidos de un restaurante </h2>
                  <p>Elabore una aplicación en la que se desplegaba un menú a un restaurante  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex justify-center'>
              <div className='slide-content mx-2 grid grid-cols-1 sm:grid-cols-2 gap-4 items-center'>
                <div className="aspect-w-1 aspect-h-1 sm:aspect-w-10 sm:aspect-h-10">
                  <img src={api} alt='ucc' style={{ width: '400px', height: '400px' }}   className='rounded-lg'/>
                </div>
                <div>
                  <h2 className="text-xl font-bold mb-10">Api</h2>
                  <p>elabore una api de un un restaurante </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
          
        </Swiper>
      </div>
    </section>
  );
};

export default About;
