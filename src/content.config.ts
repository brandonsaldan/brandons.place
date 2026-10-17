import { defineCollection, z, type ImageFunction } from 'astro:content';
import { glob } from 'astro/loaders';

const imageSchema = (image: ImageFunction) => z.object({ src: image(), alt: z.string().optional() }).optional();

const seoSchema = (image: ImageFunction) =>
    z.object({
        title: z.string().min(5).max(120).optional(),
        description: z.string().min(15).max(160).optional(),
        image: imageSchema(image),
        pageType: z.enum(['website', 'article']).default('website')
    });

const blog = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        excerpt: z.string().optional(),
        publishDate: z.coerce.date(),
        image: imageSchema(image),
        updatedDate: z.coerce.date().optional(),
        subject: z.string().optional(),
        repository: z.object({ label: z.string(), href: z.string().url() }).optional(),
        notice: z.object({ label: z.string().default('A note on this post'), text: z.string(), link: z.object({ label: z.string(), href: z.string() }).optional() }).optional(),
        isFeatured: z.boolean().default(false),
        seo: seoSchema(image).optional()
    })
});

const projects = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string().optional(),
        publishDate: z.coerce.date(),
        image: imageSchema(image),
        status: z.string(),
        focus: z.string(),
        repository: z.string().url().optional(),
        isFeatured: z.boolean().default(false),
        seo: seoSchema(image).optional()
    })
});

const research = defineCollection({
    loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/research' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        shortTitle: z.string(),
        navTitle: z.string().optional(),
        subtitle: z.string(),
        researchContext: z.string(),
        frameworks: z.array(z.string()),
        doi: z.string().regex(/^10\.\d{4,9}\/\S+$/),
        repositories: z.object({
            kcworks: z.string().url(),
            researchGate: z.string().url(),
            academia: z.string().url()
        }),
        image: imageSchema(image),
        pageCount: z.number().int().positive(),
        summary: z.array(z.string()).min(1).max(4).optional(),
        excerpt: z.string().optional(),
        publishDate: z.coerce.date(),
        paperType: z.string(),
        pdfUrl: z.string(),
        replicationUrl: z.string().url().optional(),
        readingTime: z.number().optional(),
        isFeatured: z.boolean().default(false),
        seo: seoSchema(image).optional()
    })
});

export const collections = { blog, projects, research };
