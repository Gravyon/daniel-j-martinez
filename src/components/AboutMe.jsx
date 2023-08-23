import React from "react";
import { Slide } from "react-awesome-reveal";

export default function AboutMe() {
  return (
    <div className="about-me mb-8">
      <Slide delay={100} direction="down" duration={1000}>
        <h1 className="flex m-4 p-2">About me</h1>
      </Slide>
      <div className="about-me-content">
        <Slide direction="left">
          <p className="about-me-text">
            Hello there! I'm a web developer, I like to learn new technologies,
            try new things, succeed and fail, but overcome the challenges in the
            end. Programming is my passion and I love the feeling when starting
            a new project with all kinds of new ideas and plans.
          </p>
        </Slide>
        <Slide direction="right">
          <p className="about-me-text m-2">
            I am also familiar with Agile Methodologies like SCRUM and Lean
            Software Development using Kanban and Jira. I am looking for an
            opportunity in the IT field to continue learning and broaden my
            horizons, not only in technical knowledge, but also to meet new
            people and exchange ideas and knowledge.
          </p>
        </Slide>
        <Slide direction="left">
          <p className="about-me-text m-2">
            My academic studies include a Bachelor's degree in Computer Science
            and a Bachelor's degree in Information Technology, which has given
            me a strong foundation in programming fundamentals and software
            concepts. Additionally, the full-stack bootcamp I went to allowed me
            to gain practical skills in developing web applications using a
            variety of technologies. I'm always learning the new cool thing
            around the IT block.
          </p>
        </Slide>
      </div>
    </div>
  );
}
