const slugify = (title: string) =>
  title
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9\\-_]+/g, '-')
    .replace(/\\-+$/g, '')
    .replace(/^\\-/g, '');

export default slugify;
