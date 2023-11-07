import { FaGithub, FaLinkedin, FaMailBulk } from "react-icons/fa";
import { Trans, useTranslation } from "react-i18next";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="md:flex md:justify-between grid place-items-center h-32 py-4 sm:px-48 bg-gray-900 shadow-lg shadow-pink-600">
      <div>
        <p className="text-sm text-white text-center dark:text-white">
          © <Trans i18nKey="footer.since"></Trans> {year}
        </p>
        <p className="md:hidden text-sm mt-1 text-white sm:text-center dark:text-white">
          <Trans i18nKey="footer.made"></Trans>
        </p>
      </div>
      <div>
        <p className="hidden lg:block text-sm text-white sm:text-center dark:text-white">
          <Trans i18nKey="footer.made"></Trans>
        </p>
      </div>
      <div className="m-1">
        <ul className="flex justify-center text-sm font-medium sm:mt-0">
          <li className="mr-2">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/danieljmartinezdev/"
            >
              <FaLinkedin
                className="cursor-pointer hover:text-bright-blue"
                style={{ height: 30, width: 30 }}
              />
            </a>
          </li>
          <li className="mr-2">
            <a target="_blank" href="https://github.com/Gravyon">
              <FaGithub
                className="cursor-pointer typography-hover"
                url="https://www.linkedin.com/in/danieljmartinezdev/"
                style={{ height: 30, width: 30 }}
              />
            </a>
          </li>
          <li className="mr-2">
            <a target="_blank" href="mailto:rdjmartinez95@gmail.com">
              <FaMailBulk
                className="cursor-pointer hover:text-pink-700 "
                style={{ height: 30, width: 30 }}
              />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
