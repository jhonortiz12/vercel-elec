import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  lng: 'es',
  fallbackLng: 'es',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: {
        title: 'Multi-language app',
        aboutMe: 'Hello! I am a passionate software engineer. My focus is on technical excellence, efficiency, and effective collaboration in multidisciplinary teams. In this portfolio, you will find examples of my work and details about the technologies I master. I am available to discuss how I can contribute to your projects. Thank you for your interest!',
      },
    },
    es: {
      translation: {
        title: 'Aplicación en varios idiomas',
        aboutMe: '¡Hola! Soy un ingeniero de software apasionado. Mi enfoque se centra en la excelencia técnica, la eficiencia y la colaboración efectiva en equipos multidisciplinarios. En este portafolio, encontrarás ejemplos de mi trabajo y detalles sobre las tecnologías que domino. Estoy disponible para discutir cómo puedo contribuir a tus proyectos. ¡Gracias por tu interés!',
      },
    }
  }
});

export default i18n;
