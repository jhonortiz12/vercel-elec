import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';

// Importa tu imagen
import perfil from '../../assets/imagenes/perfil.jpeg';

const About = () => {
  return (
    <section id='about' className='py-28 text-center mt-20'>
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
            <div className='flex justify-center'>
              <div className='slide-content mx-2'>
                <img src={perfil} alt='Slide 1.1' style={{ width: '300px', height: '300px' }} />
                <h2>Slide 1.1</h2>
                <p>Content for Slide 1.1</p>
              </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex justify-center'>
              <div className='slide-content mx-2'>
                <img src={perfil} alt='Slide 2.1' style={{ width: '300px', height: '300px' }} />
                <h2>Slide 2.1</h2>
                <p>Content for Slide 2.1</p>
              </div>
              
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='flex justify-center'>
              
                
              <div className='slide-content mx-2'>
                <img src={perfil} alt='Slide 3' style={{ width: '300px', height: '300px' }} />
                <h2>Slide 3</h2>
                <p>Content for Slide 3</p>
              </div>
            </div>
          </SwiperSlide>
          {/* Agrega más SwiperSlide según sea necesario */}
        </Swiper>
      </div>
    </section>
  );
};

export default About;
