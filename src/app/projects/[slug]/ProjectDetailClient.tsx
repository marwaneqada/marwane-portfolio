"use client";

import { useLanguage } from "@/components/ui/LanguageContext";
import { ArrowLeft, ExternalLink, Layout, ShieldCheck } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { LocalizedContent, Project } from "@/types";
import { useEffect, useState } from "react";

function splitCommaList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim().replace(/\.$/, ""))
    .filter(Boolean);
}

function splitDecisionList(value: string) {
  const bySentence = value
    .split(".")
    .map((item) => item.trim())
    .filter(Boolean);

  return bySentence.length > 1 ? bySentence : splitCommaList(value);
}

function localizedItems(content: LocalizedContent | undefined, lang: "en" | "fr") {
  if (!content) return [];

  const value = content[lang];
  return Array.isArray(value) ? value : splitCommaList(value);
}

function localizedText(content: LocalizedContent | undefined, lang: "en" | "fr") {
  if (!content) return undefined;

  const value = content[lang];
  return Array.isArray(value) ? value.join(" ") : value;
}

function ParagraphSection({
  id,
  title,
  content,
}: {
  id: string;
  title: string;
  content?: string;
}) {
  if (!content) return null;

  return (
    <section id={id} className="scroll-mt-28 space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">{content}</p>
    </section>
  );
}

function BulletSection({
  id,
  title,
  items,
}: {
  id: string;
  title: string;
  items?: string[];
}) {
  if (!items?.length) return null;

  return (
    <section id={id} className="scroll-mt-28 space-y-4">
      <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h2>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-slate-600 dark:text-slate-400 leading-relaxed">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ProjectDetailClient({ project }: { project: Project }) {
  const { t, lang } = useLanguage();
  const [activeSection, setActiveSection] = useState("");
  const isPrivate = project.visibility === "private";
  const isProfessional = project.context === "professional";
  const typeBadges = [
    isPrivate ? t.projects.privateProject : t.projects.publicProject,
    isProfessional ? t.projects.professionalCaseStudy : t.projects.personalProject,
  ];
  const confidentialityNote =
    project.confidentialityNote?.[lang] ??
    (isPrivate ? t.projects.defaultConfidentialityNote : null);
  const featureItems = localizedItems(project.features, lang);
  const decisionItems = project.technicalDecisions
    ? Array.isArray(project.technicalDecisions[lang])
      ? project.technicalDecisions[lang]
      : splitDecisionList(project.technicalDecisions[lang])
    : [];
  const challengeItems = localizedItems(project.challenges, lang);
  const resultItems = localizedItems(project.results, lang);
  const keyHighlightItems = project.keyHighlights?.[lang] ?? featureItems.slice(0, 5);
  const heroTechStack = (project.mainStack ?? project.techStack).slice(0, 8);
  const mainStack = project.mainStack ?? project.techStack.slice(0, 6);
  const roleSummary = project.roleSummary?.[lang] ?? project.myRole?.[lang];
  const architecture = project.architecture?.[lang];
  const observability = project.observability?.[lang];
  const caseStudySections = [
    keyHighlightItems.length > 0 && { id: "highlights", label: t.projects.keyHighlights },
    project.overview && { id: "overview", label: t.projects.overview },
    project.problem && { id: "problem", label: t.projects.problemSolved },
    project.myRole && { id: "role", label: t.projects.myRole },
    featureItems.length > 0 && { id: "features", label: t.projects.mainFeatures },
    decisionItems.length > 0 && { id: "decisions", label: t.projects.technicalDecisions },
    project.challenges && { id: "challenges", label: t.projects.challenges },
    project.results && { id: "results", label: t.projects.results },
  ].filter(Boolean) as { id: string; label: string }[];
  const sectionIds = caseStudySections.map((section) => section.id).join(",");

  useEffect(() => {
    const ids = sectionIds.split(",").filter(Boolean);
    if (!ids.length) return;

    let animationFrame = 0;

    const updateActiveSection = () => {
      const headerOffset = 140;
      let currentSection = ids[0];

      ids.forEach((id) => {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= headerOffset) {
          currentSection = id;
        }
      });

      const pageBottom =
        window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 12;

      if (pageBottom) {
        currentSection = ids[ids.length - 1];
      }

      setActiveSection((current) =>
        current === currentSection ? current : currentSection
      );
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
    };
  }, [sectionIds]);

  return (
    <div className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto min-h-screen">
      <Link href="/#projects" className="inline-flex items-center gap-2 text-slate-500 hover:text-brand transition-colors font-medium mb-12">
        <ArrowLeft size={16} />
        {t.projects.backToProjects}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <section className="mb-14">
          <div className="flex flex-wrap gap-2 mb-6">
            {typeBadges.map((badge) => (
              <span key={badge} className="text-xs uppercase font-bold tracking-widest text-brand bg-brand/10 border border-brand/20 px-3 py-1 rounded-full">
                {badge}
              </span>
            ))}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 max-w-4xl">
            {project.title[lang]}
          </h1>

          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl leading-relaxed">
            {project.description[lang]}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {heroTechStack.map((tech) => (
              <span key={tech} className="text-xs uppercase font-bold tracking-widest text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 px-3 py-1 rounded-full">
                {tech}
              </span>
            ))}
          </div>

          {confidentialityNote && (
            <div className="mb-8 max-w-3xl rounded-2xl border border-brand/20 bg-brand/5 p-5 text-slate-600 dark:text-slate-300 flex gap-4">
              <ShieldCheck size={22} className="text-brand shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">{confidentialityNote}</p>
            </div>
          )}

          {(project.githubUrl || project.liveUrl) && (
            <div className="flex flex-wrap gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-brand text-white px-6 py-3 rounded-xl font-semibold hover:bg-brand-dark transition-all shadow-md"
                >
                  <ExternalLink size={18} />
                  {t.projects.liveDemo}
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-xl font-semibold hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-md"
                >
                  <FaGithub size={18} />
                  {t.projects.code}
                </a>
              )}
            </div>
          )}
        </section>

        <div className="w-full rounded-3xl overflow-hidden bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-800 shadow-2xl mb-20">
          {project.imagePath ? (
            <Image
              src={project.imagePath}
              alt={project.title[lang]}
              width={1600}
              height={900}
              sizes="(min-width: 1280px) 1152px, 100vw"
              priority
              className="h-auto w-full"
            />
          ) : (
            <div className="w-full aspect-video flex flex-col relative bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 overflow-hidden pt-8 px-8 md:pt-16 md:px-16">
              <div className="w-full flex-grow bg-white dark:bg-slate-950 rounded-t-2xl border-t border-l border-r border-slate-300 dark:border-slate-700 shadow-2xl flex flex-col">
                <div className="h-10 border-b border-slate-200 dark:border-slate-800 flex items-center px-6 gap-2 bg-slate-50 dark:bg-slate-900 rounded-t-2xl">
                  <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                  <div className="w-3 h-3 rounded-full bg-slate-300 dark:bg-slate-700" />
                </div>
                <div className="flex-grow flex items-center justify-center text-slate-300 dark:text-slate-800">
                  <Layout size={64} className="opacity-50" />
                </div>
              </div>
            </div>
          )}
        </div>

        {keyHighlightItems.length > 0 && (
          <section id="highlights" className="scroll-mt-28 mb-20 space-y-6">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.projects.keyHighlights}</h2>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {keyHighlightItems.slice(0, 6).map((item) => (
                <li key={item} className="rounded-2xl border border-slate-100 bg-slate-50 p-5 text-sm leading-relaxed text-slate-600 dark:border-white/5 dark:bg-slate-900 dark:text-slate-300">
                  <span className="mb-3 block h-1.5 w-8 rounded-full bg-brand" />
                  {item}
                </li>
              ))}
            </ul>
          </section>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_320px] gap-12 items-start">
          <div className="space-y-12">
            <ParagraphSection id="overview" title={t.projects.overview} content={project.overview?.[lang]} />
            <ParagraphSection id="problem" title={t.projects.problemSolved} content={project.problem?.[lang]} />
            <ParagraphSection id="role" title={t.projects.myRole} content={project.myRole?.[lang]} />
            <BulletSection id="features" title={t.projects.mainFeatures} items={featureItems} />
            <BulletSection id="decisions" title={t.projects.technicalDecisions} items={decisionItems} />
            {Array.isArray(project.challenges?.[lang]) ? (
              <BulletSection id="challenges" title={t.projects.challenges} items={challengeItems} />
            ) : (
              <ParagraphSection id="challenges" title={t.projects.challenges} content={localizedText(project.challenges, lang)} />
            )}
            {Array.isArray(project.results?.[lang]) ? (
              <BulletSection id="results" title={t.projects.results} items={resultItems} />
            ) : (
              <ParagraphSection id="results" title={t.projects.results} content={localizedText(project.results, lang)} />
            )}
          </div>

          <aside className="lg:sticky lg:top-28 space-y-6">
            <div className="bg-slate-50 dark:bg-slate-900 p-8 rounded-2xl border border-slate-100 dark:border-white/5">
              <div className="space-y-6 mb-8">
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">{t.projects.projectType}</h3>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white">{typeBadges.join(" / ")}</p>
                </div>
                {roleSummary && (
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">{t.projects.role}</h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{roleSummary}</p>
                  </div>
                )}
                {architecture && (
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">{t.projects.architecture}</h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{architecture}</p>
                  </div>
                )}
                <div>
                  <h3 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">{t.projects.mainStack}</h3>
                  <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{mainStack.join(", ")}</p>
                </div>
                {observability && (
                  <div>
                    <h3 className="text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mb-2">{t.projects.observability}</h3>
                    <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-300">{observability}</p>
                  </div>
                )}
              </div>

              <h3 className="font-bold text-slate-900 dark:text-white mb-5">{t.projects.caseStudyOutline}</h3>
              <nav aria-label={t.projects.caseStudyOutline} className="space-y-3">
                {caseStudySections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    className={[
                      "flex items-center gap-3 text-sm font-medium transition-colors hover:text-brand dark:hover:text-brand",
                      activeSection === section.id
                        ? "text-brand"
                        : "text-slate-600 dark:text-slate-400",
                    ].join(" ")}
                  >
                    <div
                      className={[
                        "w-1.5 h-1.5 rounded-full transition-colors",
                        activeSection === section.id ? "bg-brand" : "bg-slate-300 dark:bg-slate-700",
                      ].join(" ")}
                    />
                    <span>{section.label}</span>
                  </a>
                ))}
              </nav>
            </div>
          </aside>
        </div>
      </motion.div>
    </div>
  );
}
