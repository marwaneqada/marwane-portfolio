"use client";

import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { FaLinkedin } from "react-icons/fa";
import { Section } from "@/components/ui/Section";
import { useLanguage } from "@/components/ui/LanguageContext";
import { profile } from "@/data/profile";

export function Contact() {
  const { t } = useLanguage();

  const linkedinUrl = profile.socials.find(
    (s) => s.icon === "linkedin"
  )?.url;

  return (
    <Section id="contact" className="bg-slate-900 text-white overflow-hidden relative pb-32">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-brand/10 blur-[120px] -translate-y-1/2 rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/2 bg-indigo-500/10 blur-[80px] translate-y-1/2 rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           transition={{ duration: 0.6 }}
        >
          <h2 className="text-brand font-bold uppercase tracking-widest text-sm mb-6">{t.contact.sectionSub}</h2>
          <h3 className="text-4xl md:text-6xl font-bold mb-10 leading-tight">
            {t.contact.sectionTitleStart}<span className="text-slate-400 dark:text-slate-500">{t.contact.sectionTitleHighlight}</span>{t.contact.sectionTitleEnd}
          </h3>
          <p className="text-slate-400 dark:text-slate-400 text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
            {t.contact.description}
          </p>
          
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <a 
              href={`mailto:${profile.email}`}
              className="flex items-center justify-center gap-3 bg-brand text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-brand-dark transition-all transform hover:scale-105 shadow-[0_10px_40px_rgba(37,99,235,0.2)] group"
            >
              <Mail size={22} />
              {t.contact.sayHello}
              <ArrowUpRight size={18} className="opacity-50 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
            {linkedinUrl && (
              <a 
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 bg-white/10 text-white px-10 py-5 rounded-2xl font-bold text-lg hover:bg-white/20 transition-all backdrop-blur-sm border border-white/10 group"
              >
                <FaLinkedin size={22} className="text-[#0A66C2]" />
                {t.contact.connectOnLinkedin}
                <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-50 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
              </a>
            )}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}
