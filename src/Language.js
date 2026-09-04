import React, { createContext, useContext, useState } from "react";

const LanguageContext = createContext(null);
let translations = {};

export function setTranslations(nextTranslations) {
  translations = nextTranslations;
}

export function Language({ lang, children }) {
  const [currentLanguage, setCurrentLanguage] = useState(lang || "en");
  const value = {
    lang: currentLanguage,
    handleSetLanguage: setCurrentLanguage,
    get: (key) => translations[currentLanguage]?.[key] || translations.en?.[key] || key,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

Language.Consumer = function LanguageConsumer({ children }) {
  const value = useContext(LanguageContext);
  return children(value);
};
