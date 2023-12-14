import { Payload } from 'payload';

export const showsByCategoryResolver = async (
  obj,
  args: { categoryName: string },
  context: { req: { payload: Payload } }
) => {
  const { docs } = await context.req.payload.find({
    collection: 'categories',
    where: {
      name: {
        equals: args.categoryName,
      },
    },
  });
  if (!docs || docs[0] == null) return { docs: [] };
  const categoryId = docs[0].id;
  const results = await context.req.payload.find({
    collection: 'shows',
    depth: 0,
    where: {
      categories: {
        contains: categoryId,
      },
    },
  });
  return results;
};

export const showBySlugResolver = async (
  obj,
  args: { slug: string },
  context: { req: { payload: Payload } }
) => {
  const { docs } = await context.req.payload.find({
    collection: 'shows',
    depth: 0,
    where: {
      slug: {
        equals: args.slug,
      },
    },
  });

  if (!docs || docs.length === 0) return null;

  return docs[0];
};

export const newsPostBySlugResolver = async (
  obj,
  args: { slug: string },
  context: { req: { payload: Payload } }
) => {
  const { docs } = await context.req.payload.find({
    collection: 'newsPosts',
    depth: 0,
    where: {
      slug: {
        equals: args.slug,
      },
    },
  });

  if (!docs || docs.length === 0) return null;

  return docs[0];
};
