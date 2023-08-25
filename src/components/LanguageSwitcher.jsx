import React from "react";
const LanguageSwitcher = ({ currentLanguage, onChangeLanguage }) => {
  const lngs = {
    en: { nativeName: "En" },
    es: { nativeName: "Es" },
  };
  return (
    <div className="ml-auto">
      <select
        className="text-gray-300 cursor-pointer nav-text rounded-md px-3 py-2 uppercase text-sm font-medium bg-transparent"
        value={currentLanguage}
        onChange={(e) => onChangeLanguage(e.target.value)}
      >
        {Object.keys(lngs).map((lng) => (
          <option key={lng} value={lng}>
            {lngs[lng].nativeName}
          </option>
        ))}
      </select>
    </div>
  );
};

export default LanguageSwitcher;
