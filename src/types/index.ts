export type Language = "en" | "fr";

export interface LocalizedString {
  en: string;
  fr: string;
}

export interface LocalizedStringArray {
  en: string[];
  fr: string[];
}

export type LocalizedContent = LocalizedString | LocalizedStringArray;

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface Profile {
  name: string;
  email: string;
  socials: SocialLink[];
  cv: {
    en: string;
    fr: string;
  };
}

export interface Skill {
  name: string;
  icon?: string;
}

export interface SkillCategory {
  title: LocalizedString;
  skills: Skill[];
}

export interface Project {
  id: string;
  slug: string;
  visibility: "public" | "private";
  context: "personal" | "professional";
  caseStudyOnly: boolean;
  title: LocalizedString;
  description: LocalizedString;
  cardDescription?: LocalizedString;
  techStack: string[];
  mainStack?: string[];
  imagePath?: string;
  githubUrl?: string;
  liveUrl?: string;
  confidentialityNote?: LocalizedString;
  keyHighlights?: LocalizedStringArray;
  roleSummary?: LocalizedString;
  architecture?: LocalizedString;
  observability?: LocalizedString;
  overview?: LocalizedString;
  problem?: LocalizedString;
  myRole?: LocalizedString;
  features?: LocalizedContent;
  challenges?: LocalizedContent;
  technicalDecisions?: LocalizedContent;
  results?: LocalizedContent;
}

export interface Experience {
  id: string;
  company: string;
  role: LocalizedString;
  startDate: string;
  endDate: string;
  description: LocalizedStringArray;
  techStack?: LocalizedStringArray;
}

export interface Translations {
  personalInfo: {
    title: string;
    subtitle: string;
    about: string;
  };
  nav: {
    about: string;
    skills: string;
    projects: string;
    experience: string;
    contact: string;
    downloadCv: string;
  };
  hero: {
    badge: string;
    introPrefix: string;
    titleStart: string;
    titleHighlight: string;
    titleEnd: string;
    description: string;
    viewProjects: string;
    findMeOn: string;
    codeCard: {
      passion: string;
      motto: string;
      role: string;
    };
  };
  about: {
    sectionSub: string;
    sectionTitleStart: string;
    sectionTitleHighlight: string;
    sectionTitleEnd: string;
    description: string;
    highlights: {
      title: string;
      desc: string;
    }[];
  };
  skills: {
    sectionSub: string;
    sectionTitle: string;
  };
  projects: {
    sectionSub: string;
    sectionTitle: string;
    description: string;
    viewProject: string;
    viewCode: string;
    caseStudy: string;
    publicProject: string;
    privateProject: string;
    personalProject: string;
    professionalCaseStudy: string;
    defaultConfidentialityNote: string;
    liveDemo: string;
    code: string;
    backToProjects: string;
    overview: string;
    keyHighlights: string;
    projectType: string;
    role: string;
    architecture: string;
    mainStack: string;
    observability: string;
    problemSolved: string;
    myRole: string;
    mainFeatures: string;
    technicalDecisions: string;
    challenges: string;
    results: string;
    techStack: string;
    caseStudyOutline: string;
  };
  experience: {
    sectionSub: string;
    sectionTitle: string;
  };
  contact: {
    sectionSub: string;
    sectionTitleStart: string;
    sectionTitleHighlight: string;
    sectionTitleEnd: string;
    description: string;
    sayHello: string;
    connectOnLinkedin: string;
  };
  footer: {
    tagline: string;
    builtWith: string;
  };
}
