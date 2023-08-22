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

const Projects = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {data.map((project, index) => (
        <Zoom key={index} delay={index * 100}>
          {" "}
          {/* Apply Zoom animation with delay */}
          <Card
            color="gray"
            variant="gradient"
            className="mt-6 w-96 m-2 outline outline-neutral-50 rounded cursor-pointer"
          >
            <CardHeader color="blue-gray" className="relative h-56">
              <img src={project.image} alt="card-image" />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                {project.title}
              </Typography>
              <Typography>{project.description}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>{project.repo}</Button>
            </CardFooter>
          </Card>
        </Zoom>
      ))}
    </div>
  );
};

export default Projects;
