"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { translations } from "@/data/translations";
import { Language } from "@/types";

type LanguageContextType = {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Language>("en");
  useEffect(() => {
    const storedLang = localStorage.getItem("portfolio_lang") as Language;
    if (storedLang && (storedLang === "en" || storedLang === "fr")) {
      const timeoutId = window.setTimeout(() => setLangState(storedLang), 0);
      return () => window.clearTimeout(timeoutId);
    }
  }, []);

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    localStorage.setItem("portfolio_lang", newLang);
  };

  const value = {
    lang,
    setLang,
    t: translations[lang],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
