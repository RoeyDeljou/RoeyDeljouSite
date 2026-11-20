import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * PROJECTS collection — one Markdown file per project in src/content/projects/.
 * The schema below validates every file at build time, so a missing or
 * misspelled field fails the build with a clear message instead of a broken page.
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    /** One–two sentence pitch shown on cards. */
    summary: z.string(),
    /**
     * personal  – your own product
     * client    – built for a client
     * collab    – co-built with someone else (list them in `collaborators`)
     * work      – built at an employer (usually confidential, no repo)
     */
    category: z.enum(['personal', 'client', 'collab', 'work']),
    featured: z.boolean().default(false),
    /** Lower numbers appear first. */
    order: z.number().default(100),
    period: z.string(),
    role: z.string(),
    tech: z.array(z.string()),
    /** 3–4 punchy bullets shown on the featured card. */
    highlights: z.array(z.string()).default([]),
    /** Optional big numbers shown on the project page. */
    metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
    repo: z.string().url().optional(),
    /** true → shows a "Private repository" badge instead of a GitHub link. */
    repoPrivate: z.boolean().default(false),
    demo: z.string().url().optional(),
    /** Label for the main demo button (default: 'Visit live app'). */
    demoLabel: z.string().optional(),
    /** Extra links shown on the project page, e.g. a second live version. */
    links: z.array(z.object({ label: z.string(), url: z.string().url() })).default([]),
    /** e.g. 'Base44', 'Unity' — shown as a badge. */
    platform: z.string().optional(),
    company: z.string().optional(),
    collaborators: z.array(z.object({ name: z.string(), url: z.string().url().optional() })).default([]),
    /** Hue (0–360) for the generated cover art when there is no image. */
    hue: z.number().min(0).max(360).default(250),
    /** Optional MOBILE screenshot in /public (portrait, ~390px wide), shown in a phone mockup over the cover art. */
    image: z.string().optional(),
    /** How `image` is framed: 'phone' (portrait app screenshot), 'browser' (desktop screenshot) or 'logo'. */
    imageFrame: z.enum(['phone', 'browser', 'logo']).default('phone'),
    /** Short label for cover art, e.g. an emoji-free monogram like 'FPL'. */
    mark: z.string().optional(),
  }),
});

export const collections = { projects };
