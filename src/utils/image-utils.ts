import { getImage } from 'astro:assets';

export async function socialImage(image?: { src: ImageMetadata; alt?: string }) {
    if (!image) return undefined;
    const { src } = await getImage({ src: image.src, width: 1200, format: 'jpg' });
    return { src, alt: image.alt };
}
