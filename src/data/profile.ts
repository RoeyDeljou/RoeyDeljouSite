/**
 * PROFILE — the single place for your personal details.
 * Everything on the site (hero, footer, SEO tags, resume page) reads from here.
 */
export const profile = {
  name: 'Roey Deljou',
  firstName: 'Roey',
  title: 'Software Engineer · Unity & Full-Stack · AI-Native Developer',
  // Short line under your name in the hero.
  tagline:
    'I build real-time simulations, games and production web platforms — and I ship them fast by engineering with AI agents, not just alongside them.',
  location: 'Israel',
  citizenship: 'Israeli · American',
  languages: ['Hebrew (native)', 'English (native)'],
  email: 'roeydeljou1@gmail.com',
  // Leave empty to keep your phone number off the public site (it is still in the PDF).
  phone: '' as string,
  openToWork: true,
  openToWorkLabel: 'Open to new opportunities',
  resumePdf: '/Roey_Deljou_Resume.pdf',
  socials: {
    github: 'https://github.com/RoeyDeljou',
    linkedin: 'https://www.linkedin.com/in/roey-deljou-73b345242',
    // Media portfolio (videos / captures of game & simulation work)
    portfolio: 'https://drive.google.com/drive/folders/1aaNp_dXmqLAaZsxSyDo9jqhWSnrCewPK?usp=sharing',
  },

  /** About section — each string is a paragraph. */
  about: [
    'I’m a software engineer who started in Unity and C# — building 3D simulations, combat-training scenarios and games — and grew into a full-stack builder who ships end-to-end products: TypeScript monorepos, real-time multiplayer backends, PWAs, data pipelines and AI automation.',
    'At Bagira Systems I led the move from a legacy in-house engine to Unity, which helped the company deploy its first international simulator site in Europe. Before that I led a Unity team at AddForce Gaming and worked on ML-driven pose-estimation systems for NFL Health & Safety.',
    'Today my edge is AI-native engineering: I run Claude Code, Cursor and Codex as a coordinated team of agents — with written specs, contracts, tests and review gates — to deliver production software at a pace that usually takes a whole team. The projects below are the proof.',
  ],

  /** Quick-fact tiles in the About section. Keep to 4. */
  stats: [
    { value: '4+', label: 'Years building software professionally' },
    { value: '15+', label: 'Products shipped — games, simulators, PWAs, AI tools' },
    { value: '1st', label: 'International simulator site — delivered at Bagira' },
    { value: '94K', label: 'Lines of TypeScript in my largest solo client app' },
  ],
} as const;

export type Profile = typeof profile;
