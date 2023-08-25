import { FaArrowUp } from "react-icons/fa";
import React, { useState, useEffect } from "react";
const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 0);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleClick() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <footer className="flex w-full h-32 px-9 py-10">
      <div
        className="flex flex-wrap justify-center items-center  w-full   "
        style={{ paddingLeft: "4rem", paddingRight: "4rem" }}
      >
        <div className="flex flex-grow justify-center items-center text-white m-5">
          <div className="flex flex-wrap mt-3 text-sm font-medium sm:mt-0">
            {isVisible && (
              <button
                className="flex justify-center align-center  m-auto right-4 bottom-2 sm:bottom-2 md:bottom-2 lg:bottom-12 p-3 text-white nav-text rounded-full transition-colors duration-300"
                style={{ marginBottom: "2rem", height: 40, width: 40 }}
                onClick={handleClick}
              >
                <FaArrowUp />
              </button>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
