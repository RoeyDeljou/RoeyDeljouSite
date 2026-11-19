import { getCollection, type CollectionEntry } from 'astro:content';

export type Project = CollectionEntry<'projects'>;

export const categoryLabel: Record<Project['data']['category'], string> = {
  work: 'Professional',
  client: 'Client',
  personal: 'Personal',
  collab: 'Collaboration',
};

export async function getProjects(): Promise<Project[]> {
  const all = await getCollection('projects');
  return all.sort((a, b) => a.data.order - b.data.order);
}
