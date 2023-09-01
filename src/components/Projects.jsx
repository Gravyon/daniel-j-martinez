import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { data } from "../data/projects";
import { Slide, Zoom } from "react-awesome-reveal";
import "./styles.css";
import { Trans, useTranslation } from "react-i18next";

const Projects = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Slide triggerOnce delay={100} direction="left" duration={1000}>
        <h1 className="flex m-4 p-2 mt-8">
          <Trans i18nKey="projects">Projects</Trans>
        </h1>
      </Slide>
      <div className="flex flex-wrap justify-center">
        {data.map((project, index) => (
          <Zoom key={index} delay={index * 100}>
            <Card
              color="gray"
              variant="gradient"
              className="mt-6 w-80 m-2 border rounded-2xl cursor-pointer transition-all card-hover hover:border-2 typography-hover"
            >
              <CardHeader color="blue-gray" className="relative h-56">
                <img className="mt-2" src={project.image} alt="card-image" />
              </CardHeader>
              <CardBody>
                <Typography variant="h3" color="blue-gray" className="mb-2">
                  {project.title}
                </Typography>
                <Typography className="m-2">
                  <Trans i18nKey={project.descname}></Trans>
                </Typography>
                <Typography className="m-2">
                  <Trans i18nKey="tech"></Trans>
                  {project.tecnologies}
                </Typography>
              </CardBody>
              <CardFooter className="pt-1 m-4">
                <a target="_blank" href={project.link}>
                  <Button>
                    <Trans i18nKey="checkitout"></Trans>
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </Zoom>
        ))}
      </div>
    </div>
  );
};

export default Projects;
