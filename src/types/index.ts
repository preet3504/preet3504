export interface Experience {
  id: number;
  company: string;
  position: string;
  location: string;
  duration: string;
  type: string;
  achievements: string[];
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  duration: string;
}

export interface FocusArea {
  title: string;
  description: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Skill {
  category: string;
  items: string[];
}
