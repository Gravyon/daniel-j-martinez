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
import { data } from "../data/projects";
import "./styles.css";
import { Slide } from "react-awesome-reveal";
import { Trans } from "react-i18next";
export function BookingCard() {
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
            className=" py-3 shadow-lg shadow-pink-600 max-w-[26rem] m-2 transition-all"
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
              <Typography className="m-3" color="gray">
                {project.description}
              </Typography>
              <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
                {project.tecnologies.map((tech, icon) => (
                  <Tooltip content={tech}>
                    <span className="cursor-pointer rounded-full border border-bright-blue p-3 transition-colors hover:border-pink-700 typography-hover">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="h-5 w-5"
                      >
                        <path d="M12 7.5a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z" />
                        <path
                          fillRule="evenodd"
                          d="M1.5 4.875C1.5 3.839 2.34 3 3.375 3h17.25c1.035 0 1.875.84 1.875 1.875v9.75c0 1.036-.84 1.875-1.875 1.875H3.375A1.875 1.875 0 011.5 14.625v-9.75zM8.25 9.75a3.75 3.75 0 117.5 0 3.75 3.75 0 01-7.5 0zM18.75 9a.75.75 0 00-.75.75v.008c0 .414.336.75.75.75h.008a.75.75 0 00.75-.75V9.75a.75.75 0 00-.75-.75h-.008zM4.5 9.75A.75.75 0 015.25 9h.008a.75.75 0 01.75.75v.008a.75.75 0 01-.75.75H5.25a.75.75 0 01-.75-.75V9.75z"
                          clipRule="evenodd"
                        />
                        <path d="M2.25 18a.75.75 0 000 1.5c5.4 0 10.63.722 15.6 2.075 1.19.324 2.4-.558 2.4-1.82V18.75a.75.75 0 00-.75-.75H2.25z" />
                      </svg>
                    </span>
                  </Tooltip>
                ))}
              </div>
            </CardBody>
            <CardFooter className="pt-3">
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
