import React from "react";
import perfil from '../../assets/imagenes/perfil.jpeg';
import '@fontsource/roboto'; // Importa la fuente Roboto

const Informacion = () => {
    return (
        <section
            id='home'
            className='min-h-screen container grid place-items-center relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-heroLight before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2 dark:before:bg-heroDark font-roboto' // Clase de Tailwind para la fuente Roboto
        >
            <div className='flex flex-col lg:flex-row justify-around items-center text-stone-700'>
                <div className="text-lift lg:w-1/3 md:w-fit px-4">
                    <h1 className="text-4xl mt-10 mb-10">holaaaaa</h1>
                    <p className="text-1xl">
                        ¡Hola! Soy un ingeniero de software apasionado. Mi enfoque se centra en la 
                        excelencia técnica, la eficiencia y la colaboración efectiva en equipos 
                        multidisciplinarios. En este portafolio, encontrarás ejemplos de mi trabajo 
                        y detalles sobre las tecnologías que domino. Estoy disponible para discutir cómo
                        puedo contribuir a tus proyectos. ¡Gracias por tu interés!
                    </p>
                </div>
                <div className="lg:w-1/3 mt-10 md:w-fit hidden md:block">
                    <img src={perfil} alt="perfil" style={{ width: '450px', height: '450px', borderRadius: '50%' }} className="text-full overflow-hidden" />
                </div>
            </div>
        </section>
    );
}

export default Informacion;
