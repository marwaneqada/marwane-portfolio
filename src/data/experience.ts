import { Experience } from "@/types";

export const experience: Experience[] = [
  {
    id: "1",
    company: "Elavi",
    role: {
      en: "Backend Developer",
      fr: "Developpeur Backend",
    },
    startDate: "Mar 2025",
    endDate: "Present",
    description: {
      en: [
        "Developed and maintained backend services for production SaaS and e-commerce platforms",
        "Built REST APIs, webhook integrations, and asynchronous workflow processing",
        "Worked on performance optimization, production debugging, and service reliability",
        "Refactored invoice generation logic, reducing processing time from around 15s to around 3s",
      ],
      fr: [
        "Developpement et maintenance de services backend pour des plateformes SaaS et e-commerce en production",
        "Mise en place d'APIs REST, d'integrations par webhooks et de traitements asynchrones",
        "Travail sur l'optimisation des performances, le debogage en production et la fiabilite des services",
        "Refonte de la logique de generation des factures, reduisant le temps de traitement d'environ 15s a environ 3s",
      ],
    },
    techStack: {
      en: ["PHP", "Laravel", "REST APIs", "Event Sourcing", "Observability"],
      fr: ["PHP", "Laravel", "APIs REST", "Event Sourcing", "Observabilite"],
    },
  },
  {
    id: "2",
    company: "BlindSpot",
    role: {
      en: "Backend Developer Intern",
      fr: "Developpeur Backend Stagiaire",
    },
    startDate: "Mar 2024",
    endDate: "Aug 2024",
    description: {
      en: [
        "Contributed to backend API development using Spring Boot",
        "Worked with relational and NoSQL databases",
        "Participated in data modeling and backend feature implementation",
      ],
      fr: [
        "Contribution au developpement d'APIs backend avec Spring Boot",
        "Travail avec des bases de donnees relationnelles et NoSQL",
        "Participation a la modelisation des donnees et a l'implementation de fonctionnalites backend",
      ],
    },
    techStack: {
      en: ["Java", "Spring Boot", "REST APIs", "Databases"],
      fr: ["Java", "Spring Boot", "APIs REST", "Bases de donnees"],
    },
  },
];
