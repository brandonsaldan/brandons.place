export function slugify(input?: string) {
    if (!input) return '';

    var slug = input.toLowerCase().trim();

    slug = slug.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

    slug = slug.replace(/[^a-z0-9\s-]/g, ' ').trim();

    slug = slug.replace(/[\s-]+/g, '-');

    return slug;
}
