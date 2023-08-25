import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          developer: "Fullstack Developer",
          contact: "Contact",
          aboutme: "About me",
          projects: "Projects",
          checkitout: "Check it out",
          tech: "Technologies used: ",
          info1:
            "Hello there! I'm a web developer, I like to learn new technologies, try new things, succeed and fail, but overcome the challenges in the end. Programming is my passion and I love the feeling when starting a new project with all kinds of new ideas and plans. ",
          info2:
            "I am also familiar with Agile Methodologies like SCRUM and Lean Software Development using Kanban and Jira. I am looking for an opportunity in the IT field to continue learning and broaden my horizons, not only in technical knowledge, but also to meet new people and exchange ideas and knowledge.",
          info3:
            "My academic studies include a Bachelor's degree in Computer Science and a Bachelor's degree in Information Technology, which has given me a strong foundation in programming fundamentals and software concepts. Additionally, the full-stack bootcamp I went to allowed me to gain practical skills in developing web applications using a variety of technologies. I'm always learning the new cool thing around the IT block.",
        },
      },
      es: {
        translation: {
          developer: "Desarrollador Fullstack",
          contact: "Contacto",
          aboutme: "Acerca de mi",
          projects: "Proyectos",
          checkitout: "Visitar",
          tech: "Tecnologias utilizadas: ",
          info1:
            "¡Hola! Soy un desarrollador web, me gusta aprender nuevas tecnologías, probar cosas nuevas, triunfar y fracasar, pero al final superar los desafíos. La programación es mi pasión y me encanta la sensación de iniciar un nuevo proyecto con todo tipo de nuevas ideas y planes.",
          info2:
            "También estoy familiarizado con metodologías ágiles como SCRUM y desarrollo de software Lean utilizando Kanban y Jira. Busco una oportunidad en el campo TI para seguir aprendiendo y ampliar mis horizontes, no solo en conocimientos técnicos, sino también para conocer gente nueva e intercambiar ideas y conocimientos.",
          info3:
            "Mis estudios académicos incluyen un bachillerato en IT y una Licenciatura en Tecnología de la Información, lo que me ha brindado una base sólida en fundamentos de programación y conceptos de software. Además, el bootcamp full-stack al que asistí me permitió adquirir habilidades prácticas en el desarrollo de aplicaciones web utilizando una variedad de tecnologías. Siempre estoy aprendiendo cosas nuevas e interesantes en el ámbito de TI.",
        },
      },
    },
  });

export default i18n;
