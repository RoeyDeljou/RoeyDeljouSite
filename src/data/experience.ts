/**
 * EXPERIENCE — newest first. To add a job, copy one object and edit it.
 * `projectSlug` (optional) links the role to a page in src/content/projects/.
 */
export interface Role {
  company: string;
  companyUrl?: string;
  role: string;
  location?: string;
  start: string; // e.g. 'Dec 2023'
  end: string; // e.g. 'Jul 2026' or 'Present'
  summary: string;
  highlights: string[];
  tech: string[];
  projectSlug?: string;
}

export const experience: Role[] = [
  {
    company: 'Independent / Freelance',
    role: 'Full-Stack & AI Engineer',
    location: 'Remote',
    start: '2026',
    end: 'Present',
    summary:
      'Designing, building and operating production web platforms and AI automation for clients and my own products — end to end, from architecture to deployment — with AI agents embedded in every stage of the engineering workflow.',
    highlights: [
      'Built Fantasyonerim, the official app of an Israeli Fantasy Premier League podcast: a TypeScript monorepo (Fastify, Prisma/Postgres, Next.js PWA) with zero-touch content ingestion from six platforms, a live FPL points engine, web push and a full admin console — live in production.',
      'Built HR Finder: share a LinkedIn job to the app and get the company’s current HR and talent people, fused from six search sources, each with a personalised AI-written Hebrew message.',
      'Built PostPublisher, an autonomous LinkedIn content engine — multi-agent copywriting, AI imagery, narrated video generation and scheduled publishing on GitHub Actions.',
      'Shipped real-time multiplayer, data-aggregation and sports-prediction apps across React, Next.js, Fastify, Socket.IO, Python/FastAPI and Base44.',
      'Applied Cursor, Claude Code and OpenAI Codex extensively in end-to-end development — AI agents for code generation, debugging, workflow automation and custom productivity tooling — to accelerate delivery, raise code quality and streamline engineering workflows.',
      'Run agents as a disciplined engineering process: written specs and shared contracts first, specialised agents for exploration, planning and implementation, then type checks, automated tests and review gates before anything ships.',
    ],
    tech: ['TypeScript', 'Next.js', 'Fastify', 'Prisma', 'PostgreSQL', 'Python', 'Claude API', 'Claude Code', 'Cursor', 'Codex', 'Vercel'],
    projectSlug: 'fantasyonerim',
  },
  {
    company: 'Bagira Systems',
    role: 'C# Developer',
    location: 'Modi’in, Israel',
    start: 'Dec 2023',
    end: 'Jul 2026',
    summary:
      'Simulation and training-systems company. Drove the technological shift of the company’s simulation platform to Unity.',
    highlights: [
      'Led the transition from a legacy in-house game engine to Unity — a major technology upgrade across the company’s simulation platform.',
      'Developed advanced 3D simulation environments and realistic combat / training scenarios in Unity and C#.',
      'Designed smarter simulation systems, immersive animation pipelines and high-performance gameplay mechanics that improved realism, flexibility and product quality.',
      'Built scalable architectures and optimized performance for complex real-time training applications.',
      'Introduced AI-assisted development workflows and custom productivity tooling that shortened iteration cycles.',
      'Contributed to the company’s expansion into Europe, including deployment of its first international simulator site.',
    ],
    tech: ['C#', 'Unity 3D', 'Animation Systems', 'AI Behaviours', 'Performance Optimization'],
    projectSlug: 'bagira-simulation-platform',
  },
  {
    company: 'AddForce Gaming',
    companyUrl: 'https://www.linkedin.com/company/add-force-gaming/',
    role: 'Game Development Team Leader',
    start: 'Jun 2023',
    end: 'Oct 2024',
    summary: 'Led a Unity development team through full game-development cycles.',
    highlights: [
      'Led and mentored a team of Unity developers from concept to release.',
      'Owned project planning, milestone definitions, development pipelines and resource allocation.',
      'Ran code reviews and set technical direction focused on code quality and optimization.',
      'Designed and implemented gameplay systems and internal development tools in Unity and C#.',
      'Worked closely with stakeholders to deliver game features on schedule.',
    ],
    tech: ['Unity', 'C#', 'Team Leadership', 'Code Review', 'Gameplay Systems'],
    projectSlug: 'addforce-gaming',
  },
  {
    company: 'NFL Health & Safety',
    role: 'Junior Unity Developer',
    start: 'Oct 2022',
    end: 'Jan 2024',
    summary: 'Sports-technology projects focused on athlete safety and injury reduction.',
    highlights: [
      'Worked on ML / AI-driven pose-estimation and simulation systems for sports-performance analysis.',
      'Helped develop advanced simulation platforms using Unity and Python.',
      'Collaborated with teams integrating computer vision and AI into interactive systems.',
    ],
    tech: ['Unity', 'Python', 'OpenCV', 'Pose Estimation', 'Computer Vision'],
    projectSlug: 'nfl-pose-estimation',
  },
];
