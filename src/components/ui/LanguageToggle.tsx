"use client";

import * as React from "react";
import { useLanguage } from "./LanguageContext";

export function LanguageToggle() {
  const { lang, setLang } = useLanguage();

  return (
    <button
      onClick={() => setLang(lang === "en" ? "fr" : "en")}
      className="text-sm font-bold text-slate-600 dark:text-slate-400 hover:text-brand dark:hover:text-brand transition-colors uppercase tracking-widest px-2"
      aria-label="Toggle language"
    >
      {lang}
    </button>
  );
}
