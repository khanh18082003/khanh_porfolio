export interface ProjectHighlight {
  label: string;
  value: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  /** Short overview shown on the card; if omitted, falls back to description */
  overview?: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  demoLabel?: string;
  /** Key metrics / achievements shown in the detail page */
  highlights?: ProjectHighlight[];
  /** Ordered list of what was built / implemented */
  features?: string[];
  /** Challenges faced and how they were solved */
  challenges?: string[];
}
