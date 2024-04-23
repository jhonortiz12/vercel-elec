import React from 'react';

function PortafolioIngenieroSoftware() {
    return (
        <div>
            <header>
                <h1>Portafolio de Ingeniero de Software</h1>
            </header>
            <section className="contact-info">
                <h2>Información de Contacto</h2>
                <p>Correo Electrónico: [correo electrónico]</p>
                <p>Teléfono: [número de teléfono]</p>
                <p>LinkedIn: <a href="[enlace al perfil de LinkedIn]">Perfil de LinkedIn</a></p>
                <p>GitHub: <a href="[enlace al perfil de GitHub]">Perfil de GitHub</a></p>
            </section>
            <section className="summary">
                <h2>Resumen</h2>
                <p>Ingeniero de Software altamente motivado con experiencia en desarrollo web y móvil. Apasionado por la resolución de problemas y el desarrollo de soluciones innovadoras. Capaz de trabajar en equipos multidisciplinarios y adaptarse a nuevos entornos tecnológicos con facilidad.</p>
            </section>
            <section className="experience">
                <h2>Experiencia Laboral</h2>
                <article>
                    <h3>  <center>Ingeniero de Software | Empresa XYZ | [Fechas</center>I</h3>
                    <ul>
                        <li>Desarrollo de aplicaciones web utilizando tecnologías modernas como React.js y Node.js.</li>
                        <li>Implementación de funcionalidades clave para mejorar la usabilidad y la experiencia del usuario.</li>
                        <li>Colaboración estrecha con diseñadores y equipos de producto para definir y refinar requisitos.</li>
                        <li>Mantenimiento y actualización continua de aplicaciones existentes para garantizar la estabilidad y el rendimiento.</li>
                    </ul>
                </article>
                <article>
                    <h3>Desarrollador de Software Junior | Empresa ABC | [Fechas]</h3>
                    <ul>
                        <li>Participación en el desarrollo de aplicaciones móviles para Android utilizando Java y Kotlin.</li>
                        <li>Resolución de problemas y depuración de código para mejorar la calidad del software.</li>
                        <li>Colaboración con equipos...</li>
                    </ul>
                </article>
            </section>
            <footer>
                <p>&copy; 2024 Portafolio de Ingeniero de Software</p>
            </footer>
        </div>
    );
}

export default PortafolioIngenieroSoftware;
