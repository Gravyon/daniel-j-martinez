import React from "react";
import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
const LanguageSwitcher = ({ currentLanguage, onChangeLanguage }) => {
  const lngs = {
    en: { nativeName: "EN" },
    es: { nativeName: "ES" },
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
  return (
    <Menu>
      <div>
        <Menu.Button className="inline-flex w-full justify-center uppercase gap-x-1.5 rounded-md nav-text  px-3 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ">
          {lngs[currentLanguage].nativeName}
          <ChevronDownIcon
            className="-mr-1 h-5 w-5 text-gray-400"
            aria-hidden="true"
          />
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-28 origin-top-right rounded-md shadow-lg ring-1 ring-black ring-opacity-10 bg-purple">
          <div className="py-1">
            {Object.keys(lngs).map((lng) => (
              <Menu.Item key={lng}>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={() => onChangeLanguage(lng)}
                    className={`${
                      active ? "nav-text typography-hover" : ""
                    } block px-4 py-2 text-sm w-full`}
                  >
                    {lngs[lng].nativeName}
                  </button>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default LanguageSwitcher;
