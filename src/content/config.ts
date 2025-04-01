// Import the defineCollection and z (zod) functions from Astro's content module
import { defineCollection, z } from 'astro:content';

// Define a collection for the solutions content
// This will tell Astro how to handle and validate the content
const solutionsCollection = defineCollection({
  type: 'data', // Use 'data' type since we're storing data as JS/TS files
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Add other fields as needed (optional fields can use .optional())
    cta: z.string().optional(),
    color: z.string().optional(),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    features: z.any().optional(),
    specifications: z.any().optional(),
  }),
});

// Export the collections configuration
export const collections = {
  'solutions': solutionsCollection,
};
