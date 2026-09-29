import type { CollectionEntry } from 'astro:content';

export const formatResearchDate = (date: Date) =>
    new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC' }).format(date);

export function researchCitation(paper: CollectionEntry<'research'>) {
    const { title, publishDate, doi } = paper.data;
    return `Saldan, B. (${publishDate.getUTCFullYear()}). ${title}. https://doi.org/${doi}`;
}

export function researchBibTeX(paper: CollectionEntry<'research'>) {
    const { title, publishDate, doi, repositories, paperType } = paper.data;
    const escape = (value: string) => value.replace(/[\\{}%&_$#~^]/g, (character) => {
        if (character === '\\') return '\\textbackslash{}';
        if (character === '~') return '\\textasciitilde{}';
        if (character === '^') return '\\textasciicircum{}';
        return `\\${character}`;
    });

    return `@misc{saldan${publishDate.getUTCFullYear()}${paper.id.replaceAll('-', '')},
  author = {Saldan, Brandon},
  title = {${escape(title)}},
  year = {${publishDate.getUTCFullYear()}},
  doi = {${doi}},
  url = {https://doi.org/${doi}},
  howpublished = {KCWorks},
  note = {${escape(paperType)}. University of North Carolina at Charlotte. Repository record: ${repositories.kcworks}}
}
`;
}
