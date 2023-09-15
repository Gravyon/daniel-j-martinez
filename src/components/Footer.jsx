import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import React from "react";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="md:flex md:justify-between grid place-items-center h-20 sm:h-32 py-4 bg-gray-900 shadow-lg shadow-pink-600 transition-all">
      <div>
        <p className="text-sm text-white sm:text-center dark:text-white">
          © Desde el {year}.
        </p>
      </div>{" "}
      <div>
        <p className="text-sm text-white sm:text-center dark:text-white">
          Hecho en Uruguay 🇺🇾 🧉
        </p>
      </div>
      <div>
        <ul className="flex justify-center mt-3 text-sm font-medium sm:mt-0">
          <li className="mr-2">
            <a href="https://www.linkedin.com/in/danieljmartinezdev/">
              <FaLinkedin
                className="cursor-pointer hover:text-bright-blue"
                style={{ height: 30, width: 30 }}
              />
            </a>
          </li>
          <li className="mr-2">
            <a href="https://github.com/Gravyon">
              <FaGithub
                className="cursor-pointer typography-hover"
                typograhy-hover
                bgColor="white"
                url="https://www.linkedin.com/in/danieljmartinezdev/"
                style={{ height: 30, width: 30 }}
              />
            </a>
          </li>
          <li className="mr-2">
            <a href="mailto:rdjmartinez95@gmail.com">
              <FaMailBulk
                className="cursor-pointer hover:text-pink-700 "
                bgColor="white"
                url="https://www.linkedin.com/in/danieljmartinezdev/"
                style={{ height: 30, width: 30 }}
              />
            </a>
          </li>{" "}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
