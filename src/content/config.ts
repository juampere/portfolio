import { z, defineCollection } from 'astro:content';

const projectsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tags: z.array(z.string()),
    img: z.string(),
    repoLink: z.string().url(),
    liveLink: z.string().url(),
  }),
});

export const collections = {
  projects: projectsCollection,
};