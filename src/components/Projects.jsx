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
import { Zoom } from "react-awesome-reveal";
import "./styles.css";

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((project, index) => (
        <Zoom key={index} delay={index * 100}>
          <Card
            color="gray"
            variant="gradient"
            className="mt-6 w-96 m-2 border rounded cursor-pointer transition-all hover:border-blue-500 hover:border-2 typography-hover"
          >
            <CardHeader color="blue-gray" className="relative h-56">
              <img className="mt-2" src={project.image} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h3" color="blue-gray" className="mb-2">
                {project.title}
              </Typography>
              <Typography className="m-2">{project.description}</Typography>
              <Typography className="m-2">
                Technologies used: {project.tecnologies}
              </Typography>
            </CardBody>
            <CardFooter className="pt-1 m-2">
              <a target="_blank" href={project.repo}>
                <Button>Check it out</Button>
              </a>
            </CardFooter>
          </Card>
        </Zoom>
      ))}
    </div>
  );
};

export default Projects;
