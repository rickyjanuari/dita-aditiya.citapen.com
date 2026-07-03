import type { EntryGenerator } from './$types';
import projects from '$lib/data/projects.json';

export const entries: EntryGenerator = () => {
  return projects.map((p) => ({ slug: p.slug }));
};

export const prerender = true;