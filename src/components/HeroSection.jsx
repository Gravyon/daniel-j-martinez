import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { SocialIcon } from "react-social-icons";
import { useTranslation, Trans } from "react-i18next";
import { motion } from "framer-motion";
import "./styles.css";

const HeroSection = () => {
  const { t } = useTranslation();
  const buttonVariants = {
    hover: { scale: 1.1 },
  };
  return (
    <section className="mb-8">
      <div className="bg-hero md:bg-cyan-900 relative bg-no-repeat bg-center h-full">
        <div className="flex flex-col mx-4 px-5 py-24 md:mx-0 md:px-0 md:pl-5 md:py-0 md:pt-16 lg:pt-12 h-full">
          <Slide triggerOnce delay={100} direction="down" duration={1000}>
            <div className="text-center md:text-left">
              <h1 className="text-white md:text-7xl sm:text-6xl font-bold leading-27 md:pl-10 lg:pl-14 xl:pl-28">
                <span>Daniel Martinez</span>
              </h1>
            </div>
          </Slide>
          <div className="md:flex h-full">
            <div className="md:w-1/2 mt-6 mb-20 md:pl-10 lg:pl-14 xl:pl-28">
              <Slide triggerOnce delay={100} direction="up" duration={1000}>
                <div className="w-full xl:w-10/12 mb-6 text-center md:text-left">
                  <Trans i18nKey="developer">
                    <h3 className="text-3xl font-normal text-white leading-10">
                      Fullstack Developer
                    </h3>
                  </Trans>
                </div>
              </Slide>
              <Slide delay={100} direction="up" duration={1000} triggerOnce>
                <div className="w-full xl:w-11/12 mb-24 text-center md:text-left">
                  <p className="text-sm font-normal leading-7 text-white">
                    <Trans i18nKey="intro"></Trans>
                  </p>
                </div>
              </Slide>
              <Slide triggerOnce delay={100} direction="right" duration={1000}>
                <div className="w-full flex items-center justify-center md:justify-start">
                  <motion.button
                    type="button"
                    className="nav-text uppercase text-sm mx-2 py-2 px-4 bg-purple rounded-2xl font-bold "
                    whileHover="hover"
                    variants={buttonVariants}
                  >
                    <SocialIcon
                      bgColor="white"
                      target="_blank"
                      url="mailto:rdjmartinez95@gmail.com"
                      className="nav-text"
                      style={{ height: 40, width: 40 }}
                    />{" "}
                    <a href="mailto:rdjmartinez95@gmail.com">
                      <Trans i18nKey="gmail"></Trans>
                    </a>
                  </motion.button>
                </div>
              </Slide>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
