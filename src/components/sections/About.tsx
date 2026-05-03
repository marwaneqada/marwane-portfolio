"use client";

import { useLanguage } from "@/components/ui/LanguageContext";
import { Section } from "@/components/ui/Section";
import { Coffee, Code, Layers, Zap } from "lucide-react";

export function About() {
  const { t } = useLanguage();

  const highlightIcons = [
    <Code key="code" size={24} />,
    <Layers key="layers" size={24} />,
    <Zap key="zap" size={24} />,
    <Coffee key="coffee" size={24} />,
  ];

  return (
    <Section id="about" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center px-4 sm:px-6 lg:px-8">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand mb-4">{t.about.sectionSub}</h2>
          <h3 className="text-4xl font-bold mb-6 text-slate-900 dark:text-white leading-tight">
            {t.about.sectionTitleStart}<span className="text-slate-400 dark:text-slate-500 italic">{t.about.sectionTitleHighlight}</span>{t.about.sectionTitleEnd}
          </h3>
          <div className="space-y-4 text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            <p>{t.about.description}</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {t.about.highlights.map((item, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-brand-light dark:bg-brand/10 text-brand rounded-xl flex items-center justify-center mb-6">
                {highlightIcons[idx]}
              </div>
              <h4 className="font-bold text-slate-900 dark:text-white mb-2">{item.title}</h4>
              <p className="text-sm text-slate-500 dark:text-slate-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
