import { getCollection, type CollectionEntry } from 'astro:content';
import type { APIRoute } from 'astro';
import { researchBibTeX } from '../../utils/research-utils';

export async function getStaticPaths() {
    return (await getCollection('research')).map((paper) => ({
        params: { id: paper.id }, props: { paper }
    }));
}

export const GET: APIRoute = ({ props }) => {
    const paper = props.paper as CollectionEntry<'research'>;
    return new Response(researchBibTeX(paper), {
        headers: {
            'Content-Type': 'application/x-bibtex; charset=utf-8',
            'Content-Disposition': `attachment; filename="${paper.id}.bib"`
        }
    });
};
