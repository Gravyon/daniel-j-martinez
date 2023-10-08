import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  Tooltip,
} from "@material-tailwind/react";
import "./styles.css";
import { Slide, Zoom } from "react-awesome-reveal";
import { Trans, useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { data } from "../data/projects";

const Projects = () => {
  const { t } = useTranslation();
  const cardhover = {
    hover: { scale: 1.1 },
  };

  return (
    <div>
      <Slide triggerOnce delay={100} direction="left" duration={1000}>
        <h1 className="flex m-4 p-2 mt-8">
          <Trans i18nKey="projects"></Trans>
        </h1>
      </Slide>
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
        {data.map((project, index) => (
          <Zoom key={index} delay={index * 100} triggerOnce>
            <motion.div key={index} whileHover="hover" variants={cardhover}>
              <Card
                key={index}
                className="m-5 mt-5 mb-5 py-3 flex-grow shadow-lg shadow-pink-600 max-w-[26rem]"
              >
                <CardHeader floated={false}>
                  <img className="rounded-xl" src={project.image} alt="Image" />
                  <div className="rounded-xl to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60 hover:to-blue" />
                </CardHeader>
                <CardBody>
                  <div className="mb-3 mt-3 items-center">
                    <Typography variant="h3" className="font-medium">
                      {project.title}
                    </Typography>
                  </div>
                  <p className="m-3 grid place-items-center ">
                    <Trans i18nKey={project.descname}></Trans>
                  </p>
                </CardBody>
                <CardFooter className="py-3 mt-auto mx-2">
                  <div className="m-8 mx-auto inline-flex flex-wrap items-center gap-2">
                    {project.technologies.map((tech, id) => (
                      <Tooltip key={id} content={tech.name}>
                        <span className="place-items-center mx-auto cursor-pointer rounded-full border border-bright-blue p-3 transition-colors hover:border-pink-700 typography-hover">
                          {tech.icon}
                        </span>
                      </Tooltip>
                    ))}
                  </div>
                  <a target="_blank" href={project.link}>
                    {project.link.includes("github") ? (
                      <Button
                        type="button"
                        className="nav-text"
                        size="lg"
                        fullWidth={true}
                      >
                        <Trans i18nKey="repo"></Trans>
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        className="nav-text"
                        size="lg"
                        fullWidth={true}
                      >
                        <Trans i18nKey="checkitout"></Trans>
                      </Button>
                    )}
                  </a>
                </CardFooter>
              </Card>
            </motion.div>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Projects;
