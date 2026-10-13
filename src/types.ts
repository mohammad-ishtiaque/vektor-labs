export interface Project {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: 'Web Platform' | 'Mobile App' | 'Enterprise SaaS' | 'UI/UX & Design';
  tagline: string;
  description: string;
  challenge: string;
  solution: string;
  impactMetrics: {
    label: string;
    value: string;
    subtext: string;
  }[];
  techStack: string[];
  year: string;
  duration: string;
  deliverables: string[];
  bannerGradient: string;
  accentColor: string;
  featured: boolean;
  mockupType: 'web' | 'mobile' | 'dashboard';
  highlights: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  projectRef: string;
  metricBadge: string;
  linkedinVerified: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  keyTakeaways: string[];
  category: 'Architecture' | 'Engineering' | 'UI/UX Design' | 'Performance' | 'DevOps';
  readTime: string;
  publishedDate: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  tags: string[];
}

export interface DriveFile {
  id: string;
  name: string;
  mimeType: string;
  iconLink?: string;
  webViewLink?: string;
  modifiedTime?: string;
  size?: string;
}

export interface ProjectInquiry {
  fullName: string;
  email: string;
  company: string;
  serviceTypes: string[];
  budget: string;
  timeline: string;
  description: string;
  attachedDriveFiles: DriveFile[];
}
