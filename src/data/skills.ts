/**
 * SKILLS — grouped. Add/remove items freely; groups render in this order.
 */
export const skills: { category: string; icon: string; items: string[] }[] = [
  {
    category: 'AI Engineering',
    icon: 'sparkles',
    items: [
      'Claude Code',
      'Cursor',
      'OpenAI Codex',
      'Multi-agent workflows',
      'Claude / OpenAI / Gemini APIs',
      'Prompt & pipeline design',
      'AI image & voice generation',
      'Stable Diffusion',
    ],
  },
  {
    category: 'Languages',
    icon: 'code',
    items: ['TypeScript', 'JavaScript', 'C#', 'Python', 'Java', 'SQL'],
  },
  {
    category: 'Game & Simulation',
    icon: 'cube',
    items: [
      'Unity 3D',
      'Gameplay systems',
      'Animation pipelines',
      'Combat & training simulation',
      'AI behaviours',
      'Performance optimization',
    ],
  },
  {
    category: 'Frontend',
    icon: 'layout',
    items: ['React', 'Next.js', 'Vite', 'Tailwind CSS', 'PWA & Web Push', 'TanStack Query', 'Zustand', 'i18n / RTL'],
  },
  {
    category: 'Backend & Data',
    icon: 'server',
    items: [
      'Node.js',
      'Fastify',
      'Socket.IO',
      'FastAPI',
      'Prisma',
      'PostgreSQL',
      'SQLite',
      'Redis',
      'REST API design',
      'Zod contracts',
    ],
  },
  {
    category: 'Computer Vision & ML',
    icon: 'eye',
    items: ['OpenCV', 'Pose estimation', 'AI-assisted workflows'],
  },
  {
    category: 'DevOps & Tools',
    icon: 'tool',
    items: ['Git', 'GitHub Actions', 'Vercel', 'Render', 'Neon', 'Vitest', 'Playwright', 'Base44', 'Photoshop', 'Adobe Firefly'],
  },
];
