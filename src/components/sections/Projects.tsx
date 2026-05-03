"use client";

import { motion } from "framer-motion";
import { ExternalLink, Layout } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/components/ui/LanguageContext";
import { projects } from "@/data/projects";

export function Projects() {
  const { t, lang } = useLanguage();

  return (
    <Section id="projects" className="bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-brand mb-4">{t.projects.sectionSub}</h2>
            <h3 className="text-4xl font-bold text-slate-900 dark:text-white">{t.projects.sectionTitle}</h3>
          </div>
          <p className="text-slate-500 dark:text-slate-400 max-w-md text-sm md:text-base leading-relaxed">
            {t.projects.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => {
            const isPrivate = project.visibility === "private";
            const isProfessional = project.context === "professional";
            const isCaseStudyOnly = project.caseStudyOnly || isPrivate;
            const projectBadges = [
              isPrivate ? t.projects.privateProject : null,
              isProfessional ? t.projects.professionalCaseStudy : null,
            ].filter(Boolean);
            const visibleTechStack = project.techStack.slice(0, 6);
            const hiddenTechCount = project.techStack.length - visibleTechStack.length;
            const cardDescription = project.cardDescription?.[lang] ?? project.description[lang];

            return (
            <motion.article
              key={project.id}
              whileHover={{ y: -10 }}
              className="relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-none hover:shadow-xl transition-all border border-slate-100 dark:border-white/5 flex flex-col group cursor-pointer"
            >
              <Link
                href={`/projects/${project.slug}`}
                aria-label={`${t.projects.viewProject}: ${project.title[lang]}`}
                className="absolute inset-0 z-10 rounded-3xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand focus-visible:ring-offset-2 dark:focus-visible:ring-offset-slate-900"
              />

              <div className="relative h-64 overflow-hidden bg-slate-100 dark:bg-slate-800">
                {project.imagePath ? (
                  <Image 
                    src={project.imagePath} 
                    alt={project.title[lang]}
                    fill
                    sizes="(min-width: 1024px) 33vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex flex-col relative bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 overflow-hidden pt-8 px-8">
                    <div className="w-full flex-grow bg-white dark:bg-slate-950 rounded-t-xl border-t border-l border-r border-slate-300 dark:border-slate-700 shadow-2xl flex flex-col">
                      <div className="h-8 border-b border-slate-200 dark:border-slate-800 flex items-center px-4 gap-1.5 bg-slate-50 dark:bg-slate-900 rounded-t-xl">
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                        <div className="w-2.5 h-2.5 rounded-full bg-slate-300 dark:bg-slate-700" />
                      </div>
                      <div className="flex-grow flex items-center justify-center text-slate-300 dark:text-slate-800">
                        <Layout size={48} className="opacity-50" />
                      </div>
                    </div>
                  </div>
                )}
                {project.githubUrl && !isCaseStudyOnly && (
                  <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 z-20">
                    <a 
                      href={project.githubUrl} 
                      className="p-3 bg-white text-slate-900 hover:bg-brand hover:text-white transition-all shadow-lg rounded-full"
                      aria-label="View Source"
                      target="_blank"
                      rel="noreferrer"
                      title={t.projects.code}
                    >
                      <FaGithub size={20} />
                    </a>
                  </div>
                )}
              </div>
               
              <div className="relative z-20 p-8 flex flex-col flex-grow pointer-events-none">
                {projectBadges.length > 0 && (
                  <div className="mb-4 flex flex-wrap gap-2">
                    {projectBadges.map((badge) => (
                      <span key={badge} className="w-fit text-[10px] uppercase font-bold tracking-widest text-brand bg-brand/10 border border-brand/20 px-2.5 py-1 rounded-full">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex flex-wrap gap-2 mb-4">
                  {visibleTechStack.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                  {hiddenTechCount > 0 && (
                    <span className="text-[10px] uppercase font-bold tracking-widest text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-slate-800 px-2 py-0.5 rounded-md">
                      +{hiddenTechCount}
                    </span>
                  )}
                </div>
                <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-brand transition-colors line-clamp-3">
                  {project.title[lang]}
                </h4>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 flex-grow line-clamp-4">
                  {cardDescription}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-slate-50 dark:border-white/5">
                  {isCaseStudyOnly ? (
                    <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      {t.projects.caseStudy} <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  ) : project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      className="pointer-events-auto text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2 hover:text-brand dark:hover:text-brand transition-colors"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {t.projects.viewCode} <ExternalLink size={14} />
                    </a>
                  ) : (
                    <span className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
                      {t.projects.viewProject} <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
