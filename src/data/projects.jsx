import devsafio from "../assets/devsafio.png";
import reddit from "../assets/reddit.png";
import dreamview from "../assets/dreamview.png";
import casaarte from "../assets/casaarte.png";
import portfolio from "../assets/portfolio.png";
import norpe from "../assets/norpe.png";
import {
  FaBootstrap,
  FaCss3Alt,
  FaDatabase,
  FaFlask,
  FaNodeJs,
  FaPython,
  FaReact,
  FaUikit,
  FaWpforms,
} from "react-icons/fa";
import {
  SiTypescript,
  SiFirebase,
  SiTailwindcss,
  SiChakraui,
  SiFormstack,
  SiI18Next,
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { MdOutlineAnimation } from "react-icons/md";

export const data = [
  {
    title: "Devsafio",
    descname: "devsafio",
    description:
      "A fullstack overhaul of Devsafio's main website where employers can request talent and applicants can find jobs",
    technologies: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Node",
        icon: <FaNodeJs />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript />,
      },
      {
        name: "TypeORM",
        icon: <FaDatabase />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },
      {
        name: "Formik/Yup",
        icon: <FaWpforms />,
      },
    ],
    image: devsafio,
    link: "https://c8-frontend.vercel.app/",
    repo: "",
  },
  {
    title: "Casa Arte",
    descname: "casaarte",
    description:
      "A full-stack interactive web application where users can buy and sell art, comment and rate others artwork",
    technologies: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "Node",
        icon: <FaNodeJs />,
      },
      {
        name: "Python",
        icon: <FaPython />,
      },
      {
        name: "Flask",
        icon: <FaFlask />,
      },
      {
        name: "Bootstrap",
        icon: <FaBootstrap />,
      },
      {
        name: "Formik/Yup",
        icon: <FaWpforms />,
      },
    ],
    image: casaarte,
    link: "https://casa-arte-oz78.onrender.com/",
  },
  {
    title: "Reddit Clone",
    descname: "reddit",
    description:
      "A clone of Reddit with a functioning login and register, using Firebase as the database with user communities and user feed",
    technologies: [
      {
        name: "NextJS",
        icon: <TbBrandNextjs />,
      },
      {
        name: "Firebase",
        icon: <SiFirebase />,
      },
      {
        name: "Typescript",
        icon: <SiTypescript />,
      },
      {
        name: "Chakra UI",
        icon: <SiChakraui />,
      },
    ],
    image: reddit,
    link: "https://reddit-clone-gravyon.vercel.app/",
  },
  {
    title: "Dreamview",
    descname: "dreamview",
    description:
      "As a technical test, I was tasked with building a website for a fictional cinema theater where they would display the movies for viewing and users can review them",
    technologies: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "Material UI",
        icon: <FaUikit />,
      },
      {
        name: "Formik/Yup",
        icon: <FaWpforms />,
      },
    ],
    image: dreamview,
    link: "https://dream-view.vercel.app/",
  },
  {
    title: "Portfolio",
    descname: "portfolio",
    description:
      "My very own portfolio where I got a bit experimental and tried more animations and colors than usual, adding translations for the first time and inspired by synthwave aesthetics",
    technologies: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },
      {
        name: "Formik/Yup",
        icon: <FaWpforms />,
      },
      {
        name: "Formspree",
        icon: <SiFormstack />,
      },
      {
        name: "React i18next",
        icon: <SiI18Next />,
      },
      {
        name: "Motion Framer",
        icon: <MdOutlineAnimation />,
      },
    ],
    image: portfolio,
    link: "https://github.com/Gravyon/rdjmdev",
  },
  {
    title: "Norpe",
    descname: "norpe",
    description:
      "A completely new frontend design for the security and monitoring company Norpe, ",
    technologies: [
      {
        name: "React",
        icon: <FaReact />,
      },
      {
        name: "CSS",
        icon: <FaCss3Alt />,
      },
      {
        name: "Tailwind",
        icon: <SiTailwindcss />,
      },
      {
        name: "Formik/Yup",
        icon: <FaWpforms />,
      },
      {
        name: "Formspree",
        icon: <SiFormstack />,
      },
    ],
    image: norpe,
    link: "https://github.com/Gravyon/NorpeLtda",
  },
];
