import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
// import { data } from "../data/projects";
import "./styles.css";
import { Slide } from "react-awesome-reveal";
import { Trans } from "react-i18next";
import devsafio from "../assets/devsafio.png";
import reddit from "../assets/reddit.png";
import dreamview from "../assets/dreamview.png";
import casaarte from "../assets/casaarte.png";
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
} from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

export function BookingCard() {
  const data = [
    {
      title: "Devsafio",
      descname: "devsafio",
      description:
        "A fullstack overhaul of Devsafio's main website where employers can request talent and applicants can find jobs",
      tecnologies: [
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
          name: "Formik",
          icon: <FaWpforms />,
        },
      ],
      image: devsafio,
      link: "https://c8-frontend.vercel.app/",
    },
    {
      title: "Casa Arte",
      descname: "casaarte",
      description:
        "A full-stack interactive web application where users can buy and sell art, comment and rate others artwork",
      tecnologies: [
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
          name: "Formik",
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
      tecnologies: [
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
      tecnologies: [
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
          name: "Formik UI",
          icon: <FaWpforms />,
        },
      ],
      image: dreamview,
      link: "https://github.com/Gravyon/4geeks-final-project",
    },
  ];

  return (
    <div>
      <Slide triggerOnce delay={100} direction="left" duration={1000}>
        <h1 className="flex m-4 p-2 mt-8">
          <Trans i18nKey="projects">Projects</Trans>
        </h1>
      </Slide>
      <div className="flex flex-wrap justify-center">
        {data.map((project, index) => (
          <Card
            key={index}
            // style={{ minHeight: "100%" }}
            className="py-3 shadow-lg shadow-pink-600 max-w-[26rem] m-2 transition-all"
          >
            <CardHeader floated={false}>
              <img className="rounded-xl" src={project.image} alt="Image" />
              <div className="rounded-xl to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 hover:to-blue-600 " />
            </CardHeader>
            <CardBody>
              <div className="mb-3 mt-3 m-3 items-center">
                <Typography variant="h3" className="font-medium">
                  {project.title}
                </Typography>
              </div>
              <Typography className="m-3">{project.description}</Typography>
            </CardBody>
            <CardFooter className="pt-3 mt-auto">
              <div className="m-8 mx-auto inline-flex flex-wrap items-center gap-3">
                {project.tecnologies.map((tech, id) => (
                  <Tooltip key={id} content={tech.name}>
                    <span className="flex mb-auto cursor-pointer rounded-full border border-bright-blue p-3 transition-colors hover:border-pink-700 typography-hover">
                      {tech.icon}
                    </span>
                  </Tooltip>
                ))}
              </div>
              <Button className="nav-text" size="lg" fullWidth={true}>
                Reserve
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
