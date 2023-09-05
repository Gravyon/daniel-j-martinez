import React from "react";
import { Slide } from "react-awesome-reveal";
import { Trans, useTranslation } from "react-i18next";

const AboutMe = () => {
  const { t } = useTranslation();

  return (
    <div className="about-me mb-8">
      <Slide triggerOnce delay={100} direction="down" duration={1000}>
        <h1 className="flex m-4 p-2">
          <Trans i18nKey="aboutme">About me</Trans>
        </h1>
      </Slide>
      <div className="about-me-content">
        <Slide triggerOnce direction="left">
          <p className="about-me-text">
            <Trans i18nKey="info1"></Trans>
          </p>
        </Slide>
        <Slide triggerOnce direction="right">
          <p className="about-me-text m-2">
            <Trans i18nKey="info2"></Trans>
          </p>
        </Slide>
        <Slide triggerOnce direction="left">
          <p className="about-me-text m-2">
            <Trans i18nKey="info3"></Trans>
          </p>
        </Slide>
      </div>
    </div>
  );
};

export default AboutMe;
