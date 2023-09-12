import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "./../assets/logo.gif";
import { useTranslation, Trans } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const navigation = [
  { name: "About Me", href: "#aboutme", navkey: "aboutme", current: false },
  { name: "Projects", href: "#projects", navkey: "projects", current: false },
  { name: "Contact", href: "#contact", navkey: "contact", current: false },
];

export default function Navbar() {
  const { t, i18n } = useTranslation();
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 nav-text focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex items-center ml-10 md:ml-1">
                  <img
                    className="h-12 w-auto "
                    src={logo}
                    alt="Daniel Martinez"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block mt-2">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="text-gray-300 nav-text rounded-md px-3 py-2 text-sm font-medium"
                        aria-current={item.current ? "page" : undefined}
                      >
                        <Trans i18nKey={item.navkey}></Trans>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div>
                <LanguageSwitcher
                  currentLanguage={i18n.language}
                  onChangeLanguage={(lng) => i18n.changeLanguage(lng)}
                />
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="text-gray-300 hover:outline block nav-text rounded-md px-3 py-2 text-sm font-medium"
                  aria-current={item.current ? "page" : undefined}
                >
                  <Trans i18nKey={item.navkey}></Trans>
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
