import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const seoSchema = z.object({
    title: z.string().min(5).max(120).optional(),
    description: z.string().min(15).max(160).optional(),
    image: z
        .object({
            src: z.string(),
            alt: z.string().optional()
        })
        .optional(),
    pageType: z.enum(['website', 'article']).default('website')
});

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        publishDate: z.coerce.date(),
        image: z.object({ src: z.string(), alt: z.string().optional() }).optional(),
        updatedDate: z.coerce.date().optional(),
        isFeatured: z.boolean().default(false),
        tags: z.array(z.string()).default([]),
        seo: seoSchema.optional()
    })
});

const projects = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
        publishDate: z.coerce.date(),
        image: z.object({ src: z.string(), alt: z.string().optional() }).optional(),
        isFeatured: z.boolean().default(false),
        seo: seoSchema.optional()
    })
});

const research = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
    schema: z.object({
        title: z.string(),
        shortTitle: z.string(),
        subtitle: z.string(),
        researchContext: z.string(),
        frameworks: z.array(z.string()),
        doi: z.string().regex(/^10\.\d{4,9}\/\S+$/),
        repositories: z.object({
            kcworks: z.string().url(),
            researchGate: z.string().url(),
            academia: z.string().url()
        }),
        image: z.object({ src: z.string(), alt: z.string().optional() }).optional(),
        pageCount: z.number().int().positive(),
        excerpt: z.string().optional(),
        publishDate: z.coerce.date(),
        paperType: z.string(),
        pdfUrl: z.string(),
        readingTime: z.number().optional(),
        isFeatured: z.boolean().default(false),
        seo: seoSchema.optional()
    })
});

export const collections = { blog, projects, research };
