"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/components/ui/LanguageContext";
import { profile } from "@/data/profile";

export function Hero() {
  const { t, lang } = useLanguage();

  return (
    <section className="min-h-screen flex items-center pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-3 py-1 bg-brand-light dark:bg-brand/10 text-brand text-xs font-bold rounded-full mb-6 tracking-wider uppercase border border-brand/20"
          >
            {t.hero.badge}
          </motion.div>
          <p className="text-lg md:text-xl font-semibold text-slate-700 dark:text-slate-300 mb-3">
            {t.hero.introPrefix} <span className="text-brand">{profile.name}</span>
          </p>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-4 leading-[1.05] text-slate-900 dark:text-white">
            {t.personalInfo.title}
          </h1>
          <p className="text-2xl md:text-3xl font-semibold tracking-tight mb-5 leading-snug text-slate-800 dark:text-slate-200 max-w-2xl">
            {t.hero.titleStart}<span className="text-brand">{t.hero.titleHighlight}</span>{t.hero.titleEnd}
          </p>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-xl leading-relaxed">
            {t.hero.description}
          </p>
          
          <div className="flex flex-wrap gap-4 mb-10">
            <Link href="/#projects" className="flex items-center gap-2 bg-slate-900 dark:bg-white dark:text-slate-950 text-white px-8 py-4 rounded-full font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-all group shadow-md hover:shadow-lg">
              {t.hero.viewProjects}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <a href={profile.cv[lang]} download target="_blank" rel="noreferrer" className="flex items-center gap-2 border-2 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 px-8 py-4 rounded-full font-semibold hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-900 transition-all">
              <Download size={18} />
              {t.nav.downloadCv}
            </a>
          </div>
          
          <div className="flex gap-6 items-center">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">{t.hero.findMeOn}</span>
            <div className="flex gap-4">
              {profile.socials.map((social) => {
                let Icon = null;
                if (social.icon === "github") Icon = FaGithub;
                if (social.icon === "linkedin") Icon = FaLinkedin;

                return (
                  <a
                    key={social.name}
                    href={social.url}
                    className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 rounded-full hover:bg-brand-light dark:hover:bg-brand/20 hover:text-brand hover:border-brand/30 dark:hover:border-brand/30 transition-all shadow-sm"
                    aria-label={social.name}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {Icon ? <Icon size={20} /> : social.name}
                  </a>
                );
              })}
            </div>
          </div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
          className="relative hidden lg:block"
        >
          <div className="relative z-10 bg-white dark:bg-slate-900 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-slate-200 dark:border-white/5 p-8 overflow-hidden">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-amber-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
            </div>
            <pre className="font-mono text-sm text-slate-700 dark:text-slate-300 space-y-1">
              <code>{`const developer = {
  name: "${profile.name}",
  role: "${t.hero.codeCard.role}",
  passion: "${t.hero.codeCard.passion}",
  stack: ["Laravel", "Spring Boot", "React", "Next.js"],
  motto: "${t.hero.codeCard.motto}"
};

function buildExcellent(idea) {
  return idea
    .plan()
    .validate()
    .implement()
    .optimize();
}`}</code>
            </pre>
          </div>
          <div className="absolute -top-12 -right-12 w-64 h-64 bg-brand/10 dark:bg-brand/20 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-12 -left-12 w-64 h-64 bg-indigo-500/10 dark:bg-indigo-500/20 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
}
