export interface ContactInfo {
  email: string;
  phone?: string;
  location?: string;
  website?: string;
  github?: string;
  linkedin?: string;
  twitter?: string;
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location?: string;
  bullets: string[];
}

export interface SkillGroup {
  category: string;
  level: number;
  items: string[];
}

export interface ProjectItem {
  name: string;
  description: string;
  url?: string;
  repo?: string;
  tags: string[];
}

export interface EducationItem {
  institution: string;
  degree: string;
  year: string;
  location?: string;
  notes?: string;
}

export interface CVConfig {
  name: string;
  title: string;
  photo?: string;
  /** If set (e.g. "/cv.pdf"), "Download CV" links to this file in /public. Otherwise print dialog (Save as PDF). */
  cvPdfPath?: string;
  contact: ContactInfo;
  summary: string;
  experience: ExperienceItem[];
  skills: SkillGroup[];
  projects: ProjectItem[];
  education: EducationItem[];
}
