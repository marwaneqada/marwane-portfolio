"use client";

import { motion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/components/ui/LanguageContext";
import { skills } from "@/data/skills";

export function Skills() {
  const { t, lang } = useLanguage();

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <Section id="skills" className="bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center lg:text-left">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand mb-4">{t.skills.sectionSub}</h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">{t.skills.sectionTitle}</h3>
        </div>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8"
        >
          {skills.map((category) => (
            <motion.div 
              key={category.title.en}
              variants={item}
              className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-100 dark:border-white/5 hover:border-brand/20 dark:hover:border-brand/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-lg transition-all group"
            >
              <h4 className="font-mono font-bold text-slate-400 dark:text-slate-500 text-xs uppercase tracking-widest mb-6 group-hover:text-brand transition-colors">
                {category.title[lang]}
              </h4>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill.name} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-slate-200 dark:bg-slate-700 group-hover:bg-brand transition-colors" />
                    <span className="text-slate-600 dark:text-slate-400 font-medium group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
}
