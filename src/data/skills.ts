import { SkillCategory } from "@/types";

export const skills: SkillCategory[] = [
  {
    title: { en: "Frontend", fr: "Frontend" },
    skills: [
      { name: "React" },
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "JavaScript" },
      { name: "Tailwind CSS" },
      { name: "HTML/CSS" },
    ],
  },
  {
    title: { en: "Backend", fr: "Backend" },
    skills: [
      { name: "PHP" },
      { name: "Laravel" },
      { name: "Java" },
      { name: "Spring Boot" },
      { name: "REST APIs" },
    ],
  },
  {
    title: { en: "Database", fr: "Base de Données" },
    skills: [
      { name: "MySQL" },
      { name: "PostgreSQL" },
    ],
  },
  {
    title: { en: "Tools", fr: "Outils" },
    skills: [
      { name: "Git/GitHub" },
      { name: "Docker basics" },
      { name: "Postman" },
      { name: "Linux/SSH" },
    ],
  },
  {
    title: { en: "Architecture", fr: "Architecture" },
    skills: [
      { name: "DDD" },
      { name: "CQRS" },
      { name: "Event Sourcing basics" },
      { name: "Clean Architecture" },
      { name: "API Design" },
    ],
  },
];
