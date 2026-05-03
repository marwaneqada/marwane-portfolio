"use client";

import { motion } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { LanguageToggle } from "@/components/ui/LanguageToggle";
import { useLanguage } from "@/components/ui/LanguageContext";
import { profile } from "@/data/profile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, lang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: t.nav.about, href: "/#about" },
    { name: t.nav.skills, href: "/#skills" },
    { name: t.nav.projects, href: "/#projects" },
    { name: t.nav.experience, href: "/#experience" },
    { name: t.nav.contact, href: "/#contact" },
  ];

  return (
    <>
      {mobileMenuOpen && (
        <motion.button
          type="button"
          aria-label="Close navigation menu"
          className="fixed inset-0 z-[80] bg-slate-950/30 backdrop-blur-sm md:hidden dark:bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-[100] transition-all duration-300",
        mobileMenuOpen
          ? "bg-white py-4 shadow-sm dark:bg-slate-950"
          : isScrolled
            ? "glass py-4 shadow-sm"
            : "bg-transparent py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="font-mono font-bold text-xl tracking-tighter dark:text-white"
        >
          <Link href="/">
            <span className="text-brand uppercase">{profile.name.split(" ")[0]}</span>.DEV
          </Link>
        </motion.div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-8 text-sm font-medium dark:text-slate-300">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="hover:text-brand transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand transition-all group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="flex items-center gap-4 border-l border-slate-200 dark:border-slate-800 pl-8">
            <LanguageToggle />
            <ThemeToggle />
            <a href={profile.cv[lang]} download target="_blank" rel="noreferrer" className="flex items-center gap-2 bg-brand text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-brand-dark transition-all transform hover:scale-105 shadow-md shadow-brand/20">
              <Download size={16} />
              {t.nav.downloadCv}
            </a>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageToggle />
          <ThemeToggle />
          <button
            className="text-slate-900 dark:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute left-0 top-full z-[110] w-full border-t border-slate-200 bg-white p-6 shadow-2xl md:hidden dark:border-slate-800 dark:bg-slate-950"
        >
          <ul className="flex flex-col gap-6 text-center text-lg font-medium text-slate-900 dark:text-slate-100">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block hover:text-brand transition-colors"
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <a href={profile.cv[lang]} download target="_blank" rel="noreferrer" className="w-full flex justify-center items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-semibold">
                <Download size={20} />
                {t.nav.downloadCv}
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </nav>
    </>
  );
}
