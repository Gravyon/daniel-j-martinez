import React from "react";
import { Slide } from "react-awesome-reveal";
import { Trans, useTranslation } from "react-i18next";
import daniel from "../assets/daniel.jpg";
const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Slide triggerOnce delay={100} direction="down" duration={1000}>
        <h1 className="flex m-4 p-2">
          <Trans i18nKey="aboutme"></Trans>
        </h1>
      </Slide>
      <img
        src={daniel}
        alt="Yo"
        className="photo w-40 mt-10 inline sm:float-right"
      />
      <div className="about-me">
        <div className="about-me-content">
          <Slide triggerOnce direction="left">
            <p className="about-me-text m-5 sm:m-2">
              <Trans i18nKey="info1"></Trans>
            </p>
          </Slide>
          <Slide triggerOnce direction="right">
            <p className="about-me-text m-5 sm:m-2">
              <Trans i18nKey="info2"></Trans>
            </p>
          </Slide>
          <Slide triggerOnce direction="left">
            <p className="about-me-text m-5 sm:m-2">
              <Trans i18nKey="info3"></Trans>
            </p>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
