import React from "react";
import { Slide, Zoom } from "react-awesome-reveal";
import { SocialIcon } from "react-social-icons";

const HeroSection = () => {
  return (
    <section className="mb-8">
      <div className="bg-hero bg-cover relative bg-no-repeat bg-center h-full">
        <div className="flex flex-col mx-4 px-5 py-24 md:mx-0 md:px-0 md:pl-5 md:py-0 md:pt-16 lg:pt-12 h-full">
          <Slide delay={100} direction="down" duration={1000}>
            <div className="text-center md:text-text">
              <h1 className="text-white text-7xl font-bold leading-27 md:pl-10 lg:pl-14 xl:pl-28">
                <span>Daniel Martinez</span>
              </h1>
            </div>
          </Slide>
          <div className="md:flex h-full">
            <div className="md:w-1/2 mt-6 mb-20 md:pl-10 lg:pl-14 xl:pl-28">
              <Slide delay={100} direction="up" duration={1000}>
                <div className="w-full xl:w-10/12 mb-6 text-center md:text-left">
                  <h3 className="text-3xl font-normal text-white leading-10">
                    Fullstack Developer
                  </h3>
                </div>
              </Slide>
              {/* <Slide delay={100} direction="up" duration={1000} triggerOnce>
                <div className="w-full xl:w-11/12 mb-24 text-center md:text-left">
                  <p className="text-sm font-normal leading-7 text-white">
                    Te encontramos profesionales en 5 días y los acompañamos por
                    3 meses con tutores senior para potenciar y acelerar sus
                    habilidades técnicas
                  </p>
                </div>
              </Slide> */}
              <Slide delay={100} direction="right" duration={1000}>
                <div className="w-full flex items-center justify-center md:justify-start">
                  <a href="mailto:rdjmartinez95@gmail.com?subject=Hello!">
                    <button
                      type="button"
                      className="outline mx-2 py-2 px-4 text-sm lg:text-base font-bold uppercase leading-9 rounded-2xl w-40 lg:w-52 h-14 focus:ring-4 focus:ring-blue-300"
                    >
                      <SocialIcon
                        bgColor="white"
                        target="_blank"
                        url="mailto:rdjmartinez95@gmail.com?subject=Hello!"
                        style={{ height: 40, width: 40 }}
                      />
                      {"  "}
                      Contact
                    </button>
                  </a>
                </div>
              </Slide>
            </div>

            <div className="w-1/2 flex flex-col justify-end mb-0 mx-0 place-items-end ">
              <img
                className="hidden md:block mt-auto"
                src="/home/img-landing-hero.png"
                alt="Hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
