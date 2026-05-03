"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/components/ui/LanguageContext";
import { experience } from "@/data/experience";

export function Experience() {
  const { t, lang } = useLanguage();

  return (
    <Section id="experience">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-sm font-bold uppercase tracking-widest text-brand mb-4">{t.experience.sectionSub}</h2>
          <h3 className="text-4xl font-bold text-slate-900 dark:text-white">{t.experience.sectionTitle}</h3>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-12">
          {experience.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative pl-8 md:pl-0"
            >
              <div className="hidden md:absolute md:left-1/2 md:-translate-x-1/2 md:top-0 md:bottom-0 md:w-px md:bg-slate-200 dark:md:bg-slate-800" />
              
              <div className={`md:w-1/2 ${idx % 2 === 0 ? "md:pr-16 md:ml-0" : "md:pl-16 md:ml-auto"}`}>
                <div className="bg-white dark:bg-slate-900 p-10 rounded-3xl border border-slate-100 dark:border-white/5 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none relative group hover:shadow-lg transition-shadow">
                  {/* Icon Marker */}
                  <div className={`hidden md:flex absolute top-10 w-10 h-10 rounded-full glass items-center justify-center -translate-y-1/2 z-10 transition-colors group-hover:bg-brand group-hover:text-white ${idx % 2 === 0 ? "-right-5" : "-left-5"}`}>
                    <Briefcase size={18} />
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4 gap-2">
                    <h4 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role[lang]}</h4>
                    <span className="text-xs font-mono font-bold text-brand uppercase tracking-widest">
                      {exp.startDate} - {exp.endDate}
                    </span>
                  </div>
                  <h5 className="text-brand font-semibold mb-6 flex items-center gap-2">
                    {exp.company}
                  </h5>
                  
                  <ul className="space-y-4 mb-8">
                    {exp.description[lang].map((bullet, i) => (
                      <li key={i} className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed flex gap-3 text-left">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack?.[lang].map(tech => (
                      <span key={tech} className="text-[10px] font-mono bg-slate-50 dark:bg-slate-800 text-slate-500 dark:text-slate-400 px-3 py-1 rounded-full border border-slate-100 dark:border-white/5 group-hover:border-brand/20 transition-colors">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
