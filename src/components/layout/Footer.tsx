"use client";

import { Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useLanguage } from "@/components/ui/LanguageContext";
import { profile } from "@/data/profile";

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-white/5 py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <div className="font-mono font-bold text-xl tracking-tighter mb-2 dark:text-white">
            <span className="text-brand uppercase">{profile.name.split(" ")[0]}</span>.DEV
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm">{t.footer.tagline}</p>
        </div>
        
        <div className="flex gap-6">
          {profile.socials.map((social) => {
            let Icon = null;
            if (social.icon === "github") Icon = FaGithub;
            if (social.icon === "linkedin") Icon = FaLinkedin;

            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="text-slate-400 dark:text-slate-500 hover:text-brand dark:hover:text-brand transition-colors"
                aria-label={social.name}
              >
                {Icon ? <Icon size={20} /> : social.name}
              </a>
            );
          })}
          <a
            href={`mailto:${profile.email}`}
            className="text-slate-400 dark:text-slate-500 hover:text-brand dark:hover:text-brand transition-colors"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </div>
        
        <div className="text-slate-400 dark:text-slate-500 text-sm font-medium">
          © {currentYear} {profile.name}. {t.footer.builtWith}
        </div>
      </div>
    </footer>
  );
}
