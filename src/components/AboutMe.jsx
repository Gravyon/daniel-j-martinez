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
            Hi there! I'm [Your Name], a passionate [Your Profession] with a
            love for [Your Interests]. I enjoy [Some Hobbies], and I'm
            constantly learning new things in the field of [Your Field]. I
            believe in the power of [Something You Believe In].
          </p>
        </Slide>
        <Slide direction="right">
          <p className="about-me-text">
            This blog is a platform where I share my thoughts, experiences, and
            insights about [Topics You Write About]. Join me on this journey as
            we explore the fascinating world of [Your Expertise].
          </p>
        </Slide>
        <Slide direction="left">
          <p className="about-me-text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit
            dolores est quod cumque sint eligendi beatae facilis accusantium a
            adipisci saepe ipsam officia expedita, corporis voluptate cum
            eveniet illo non?
          </p>
        </Slide>
      </div>
    </div>
  );
}
