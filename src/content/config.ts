import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    description: z.string().optional(),
    categories: z.array(z.string()).optional(),
    image: z.string().optional(),
    slug: z.string(),
  }),
});

export const collections = { blog };
