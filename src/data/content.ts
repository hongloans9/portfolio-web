export interface WorkExperience {
  company: string
  role: string
  period: string
  location: string
  categories: {
    title: string
    bullets: string[]
  }[]
}

export interface Education {
  degree: string
  field: string
  institution: string
  period: string
}

export interface SkillCategory {
  name: string
  skills: string[]
}

export interface SocialLink {
  platform: string
  url: string
}

export const personalInfo = {
  name: 'Nguyen Hong Loan',
  title: 'Software Engineer',
  subtitle: 'Frontend Platform & AI Experiences',
  location: 'Espoo, Finland',
  email: 'nguyenloan150492@gmail.com',
  phone: '+358 504706222',
  avatar: '/portfolio-web/avatar.png',
}

export const summary =
  'Software Engineer specializing in frontend platform architecture, data visualization systems, and AI-assisted product development. Experienced in building scalable dashboard platforms, interactive analytics workflows, and high-performance web applications using React, Next.js, and TypeScript.'

export const summaryExtended =
  'Strong background in reusable component systems, frontend scalability, and cross-functional product development. Passionate about developer experience, modern UI architecture, and applying AI technologies to improve workflows and user experiences.'

export const experience: WorkExperience[] = [
  {
    company: 'Supermetrics Oy',
    role: 'Software Engineer',
    period: 'Dec 2021 – Present',
    location: 'Helsinki / Espoo, Finland',
    categories: [
      {
        title: 'Dashboard Platform & Data Visualization',
        bullets: [
          'Built scalable frontend applications using React, Next.js, TypeScript, and Chakra UI.',
          'Developed dashboard experiences for querying, visualizing, and managing data through interactive charts, widgets, filtering systems, and AI agents using Python.',
          'Built reusable dashboard components and shared UI architecture to support internal and public-facing analytics experiences.',
          'Improved dashboard scalability and reduced duplicate rendering logic through reusable widget systems and shared component libraries.',
        ],
      },
      {
        title: 'AI-assisted Product Development',
        bullets: [
          'Built AI-assisted dashboard workflows and Python-based AI agents to improve automation, dashboard generation, and developer productivity.',
          'Integrated AI-powered experiences into dashboard workflows to support data exploration and configuration flows.',
        ],
      },
      {
        title: 'Frontend Architecture & Developer Experience',
        bullets: [
          'Contributed to frontend platform architecture within a multi-package monorepo using shared libraries and modular package boundaries.',
          'Improved frontend architecture, performance, developer experience, and reusable component systems across multiple product initiatives.',
          'Implemented automated testing improvements using Playwright and TypeScript to improve product quality and release confidence.',
        ],
      },
      {
        title: 'Platform Features & Product Development',
        bullets: [
          'Contributed to internal tools, license management, purchasing flows, onboarding experiences, and team management features.',
          'Collaborated closely with backend engineers, designers, QA, and product teams to deliver scalable customer-facing features.',
          'Contributed across CSTools, Hub, and Dashboard initiatives while expanding into Vue.js and modern AI tooling.',
        ],
      },
    ],
  },
  {
    company: 'HyperIn Inc.',
    role: 'Front-end Developer',
    period: 'Aug 2018 – Nov 2021',
    location: 'Helsinki, Finland',
    categories: [
      {
        title: 'Shopping Center Platforms',
        bullets: [
          'Web development for shopping center websites (isoomena.fi, dixi.fi, and others) using HTML, SCSS, Bootstrap, JS, jQuery, Angular, and Liferay Velocity.',
          'Campaign theme for shopping centers, service UI and UX development and implementation.',
        ],
      },
    ],
  },
  {
    company: 'ORYS',
    role: 'Front-end Developer',
    period: 'Dec 2016 – Aug 2017',
    location: 'Helsinki, Finland',
    categories: [
      {
        title: 'Web Application Development',
        bullets: [
          'Built web applications using HTML, CSS, SCSS, Bootstrap, and Angular.',
          'Testing web and mobile applications.',
        ],
      },
    ],
  },
]

export const education: Education[] = [
  {
    degree: 'Master of Engineering',
    field: 'Modern Software and Computing Solutions',
    institution: 'Oulu University of Applied Sciences',
    period: '2026 – Present',
  },
  {
    degree: 'Bachelor of Information Technology',
    field: 'Mobile Solutions',
    institution: 'Metropolia University of Applied Sciences',
    period: 'Sep 2015 – May 2020',
  },
  {
    degree: 'Bachelor of International Business',
    field: 'Marketing',
    institution: 'University of Economics Ho Chi Minh City',
    period: 'Sep 2010 – Jun 2014',
  },
]

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Vue.js', 'Angular', 'Chakra UI'],
  },
  {
    name: 'Architecture & DX',
    skills: ['Turborepo', 'pnpm workspaces', 'Micro-frontends', 'Shared component libraries'],
  },
  {
    name: 'State & Data',
    skills: ['React Query', 'Zustand', 'XState', 'Zod'],
  },
  {
    name: 'AI Integration',
    skills: ['Python AI agents', 'AI-assisted workflows', 'Prompt engineering'],
  },
  {
    name: 'Testing & Observability',
    skills: ['Playwright', 'Jest', 'Datadog', 'OpenTelemetry'],
  },
  {
    name: 'Backend & Infra',
    skills: ['Node.js', 'PHP', 'Python', 'Git', 'CI/CD'],
  },
]

export const coreStrengths = [
  'Frontend Platform Architecture',
  'Data Visualization Systems',
  'AI-assisted Product Development',
  'Reusable Component Design',
  'Performance Optimization',
  'Cross-functional Collaboration',
  'Developer Experience',
  'Scalable Product Engineering',
]

export const socialLinks: SocialLink[] = [
  { platform: 'github', url: 'https://github.com/hongloans9' },
  { platform: 'linkedin', url: 'https://www.linkedin.com/in/loan-nguyen-1303/' },
]

export const navItems = ['About', 'Experience', 'Skills', 'Education', 'Contact']
