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
  subtitle: 'Frontend Platform & AI Engineering',
  location: 'Espoo, Finland',
  email: 'nguyenloan150492@gmail.com',
  phone: '+358 504706222',
  avatar: '/portfolio-web/avatar.png',
}

export const summary =
  'Software Engineer with 8+ years of experience building customer-facing web applications in SaaS and marketing analytics. At Supermetrics, owned key platform features — license management, billing, and navigation — while architecting dashboard experiences serving 40+ marketing data sources.'

export const summaryExtended =
  'Recently expanded into AI-powered product development using Google ADK, Gemini, and multi-agent systems. Strong track record of shipping end-to-end features in React/TypeScript monorepos with a focus on reusable component systems, developer experience, and quality through comprehensive E2E testing.'

export const experience: WorkExperience[] = [
  {
    company: 'Supermetrics Oy',
    role: 'Software Engineer',
    period: 'Dec 2021 – Present',
    location: 'Helsinki, Finland',
    categories: [
      {
        title: 'Dashboard Platform & Data Visualization',
        bullets: [
          'Owned the development of interactive dashboard experiences with chart widgets, data source management, filtering, and search — serving analytics workflows across 40+ marketing data sources.',
          'Architected reusable widget system (text widgets, line charts, metric selectors) adopted across multiple product teams within a pnpm monorepo.',
        ],
      },
      {
        title: 'AI-assisted Product Development',
        bullets: [
          'Implemented Human-in-the-Loop (HITL) tooling for a multi-agent AI system built with Google ADK and Gemini, enabling interactive data source and connection selection in AI-driven dashboard generation.',
          'Designed tool propagation architecture to decouple HITL frontend tools from backend agent runtime, improving modularity across the agent tree.',
          'Leveraged Claude Code as a daily AI-assisted development tool to accelerate feature delivery, code review, and test authoring.',
        ],
      },
      {
        title: 'Platform Features & Ownership',
        bullets: [
          'Led the license page system end-to-end — license management, user assignment, upgrade modals, and billing with progressive rollout via feature flags.',
          'Built the billing infrastructure from the ground up: billing history with search/sort, payment methods, and billing entity management.',
          'Designed and shipped the navigation sidebar redesign — team switching, expandable sections, animations, and responsive states.',
        ],
      },
      {
        title: 'Testing & Quality',
        bullets: [
          'Authored comprehensive E2E test suites for dashboard features using Playwright — covering widgets, data sources, filtering, sorting, and role-based access with robust test isolation patterns.',
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
    skills: ['Google ADK', 'Gemini', 'HITL tooling', 'Multi-agent systems', 'Claude Code', 'Prompt engineering'],
  },
  {
    name: 'Testing & Observability',
    skills: ['Playwright', 'Jest', 'Datadog'],
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
