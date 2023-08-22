import React from "react"; // Import React
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { data } from "../data/projects";

const Projects = () => {
  return (
    
    <div className="flex flex-wrap justify-center">
        
      {data.map((project, index) => (
        <Card
          key={index} // Adding a unique key to each Card component
          color="gray"
          variant="gradient"
          className="mt-6 w-96 m-2 outline outline-neutral-50 rounded cursor-pointer"
        >
          <CardHeader color="blue-gray" className="relative h-56">
            <img src={project.image} alt="card-image" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {project.title} {/* Use the title from the project data */}
            </Typography>
            <Typography>
              {project.description}{" "}
              {/* Use the description from the project data */}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Button>{project.repo}</Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default Projects;
