import type { Payload } from 'payload';

const lexicalText = (text: string) => ({
  type: 'text',
  text,
  format: 0,
  detail: 0,
  mode: 'normal',
  style: '',
  version: 1,
});

const lexicalParagraph = (children: unknown[]) => ({
  type: 'paragraph',
  children,
  direction: 'ltr' as const,
  format: '' as const,
  indent: 0,
  textFormat: 0,
  version: 1,
});

const lexicalDoc = (paragraphs: unknown[][]) => ({
  root: {
    type: 'root',
    children: paragraphs.map(lexicalParagraph),
    direction: 'ltr' as const,
    format: '' as const,
    indent: 0,
    version: 1,
  },
});

const fundraiserBlurb =
  "QTCers! we need your support in these trying times. as you know, we are a non-profit organization who doesn't have a business model by nature, so we don't have a way to make money to keep the station running if we don't rely on public funding (which we get very little of and quite late each year, making the first 6 months of the year extra hard) or support from our listeners. That's why we launched this fundraiser, as we start 2023 with very little options, as money is running as low as it gets and all of our equipment needs to either be serviced or replaced for industry standard models that community stations around the world have – like the CDJs2000, proper decks, and a mixer that works, for example. Furthermore, we need financial support to the pay salaries of our studio managers and assistants, given that curation and scheduling has always happened on a volunteer basis.\n\nAny amount you can afford to help us is extremely valued and will go to:\n\n– essential equipment\n\n– salaries in 2023\n\nPlease help us stay afloat and keep giving u the cutest content on the digi airwaves! donate via this gofundme linky https://www.gofundme.com/f/help-community-station-radio-quantica-stay-afloat?utm_source=widget&utm_medium=referral&utm_campaign=p_cp+share-sheet 💘";

const showDescription =
  'Rare Charm is a treasure box of prismatic sounds with delightfully odd allure across genre, source material, and mood. Each session is an hour-long deep dive exploring a unique theme or concept. Get lost in the sonic curio cabinet every last Wednesday of the month.';

const seed = async (payload: Payload) => {
  await payload.updateGlobal({
    slug: 'aboutPage',
    data: {
      content: lexicalDoc([[lexicalText('foo')]]),
    },
    locale: 'en',
  });
  await payload.updateGlobal({
    slug: 'aboutPage',
    data: {
      content: lexicalDoc([[lexicalText('bar')]]),
    },
    locale: 'pt',
  });
  await payload.updateGlobal({
    slug: 'donatePage',
    data: {
      content: lexicalDoc([[lexicalText('foo')]]),
    },
    locale: 'en',
  });
  await payload.updateGlobal({
    slug: 'donatePage',
    data: {
      content: lexicalDoc([[lexicalText('bar')]]),
    },
    locale: 'pt',
  });
  const { id: authorId } = await payload.create({
    collection: 'users',
    data: {
      email: 'christian@particle.fm',
      password: 'test',
      firstName: 'Christian',
      lastName: 'Gonzalez',
      roles: ['admin'],
    },
  });

  await payload.create({
    collection: 'users',
    data: {
      email: 'info@particle.fm',
      password: 'admin',
      firstName: 'API',
      lastName: 'USER',
      roles: ['admin'],
    },
  });

  await payload.create({
    collection: 'newsPosts',
    data: {
      author: `${authorId}`,
      title: 'FUNDRAISER ALERT!',
      blurb:
        'Please help us stay afloat and keep giving u the cutest content on the digi airwaves!',
      _status: 'published',
      content: lexicalDoc([[lexicalText(fundraiserBlurb)]]),
    },
  });
  await payload.create({
    collection: 'newsPosts',
    data: {
      author: `${authorId}`,
      title: 'New Event Coming Up',
      blurb: 'Join us for a new event',
      _status: 'published',
      content: lexicalDoc([[lexicalText(fundraiserBlurb)]]),
    },
  });
  await payload.create({
    collection: 'newsPosts',
    data: {
      author: `${authorId}`,
      title: 'New Event Coming Up',
      blurb: 'Join us for a new event',
      _status: 'published',
      content: lexicalDoc([[lexicalText(fundraiserBlurb)]]),
    },
  });
  await payload.create({
    collection: 'newsPosts',
    data: {
      author: `${authorId}`,
      title: 'New Event Coming Up',
      blurb: 'Join us for a new event',
      _status: 'published',
      content: lexicalDoc([[lexicalText(fundraiserBlurb)]]),
    },
  });
  await payload.create({
    collection: 'newsPosts',
    data: {
      author: `${authorId}`,
      title: 'New Event Coming Up',
      blurb: 'Join us for a new event',
      _status: 'published',
      content: lexicalDoc([[lexicalText(fundraiserBlurb)]]),
    },
  });
  await payload.create({
    collection: 'newsPosts',
    data: {
      author: `${authorId}`,
      title: 'Another news post!',
      blurb: 'News news news',
      _status: 'published',
      content: lexicalDoc([[lexicalText(fundraiserBlurb)]]),
    },
  });
  const { id: popCategoryId } = await payload.create({
    collection: 'categories',
    data: {
      name: 'pop',
    },
  });

  const { id: leftfieldCategoryId } = await payload.create({
    collection: 'categories',
    data: {
      name: 'leftfield',
    },
  });

  const { id: downtempoCategoryId } = await payload.create({
    collection: 'categories',
    data: {
      name: 'downtempo',
    },
  });

  const { id: ambientCategoryId } = await payload.create({
    collection: 'categories',
    data: {
      name: 'ambient',
    },
  });

  const { id: electronicCategoryId } = await payload.create({
    collection: 'categories',
    data: {
      name: 'electronic',
    },
  });

  const { id: laurieHostId } = await payload.create({
    collection: 'hosts',
    data: {
      name: 'Laurie Piña',
    },
  });
  const { id: atrevidoHostId } = await payload.create({
    collection: 'hosts',
    data: {
      name: 'Atrevido',
    },
  });

  const { id: atrevidoShowId } = await payload.create({
    collection: 'shows',
    data: {
      showName: 'Planet V',
      slug: 'atrevido',
      primaryHosts: [`${atrevidoHostId}`],
      categories: [
        `${leftfieldCategoryId}`,
        `${ambientCategoryId}`,
        `${downtempoCategoryId}`,
        `${electronicCategoryId}`,
      ],
      description: lexicalDoc([[lexicalText(showDescription)]]),
    },
  });
  const { id: laurieShowId } = await payload.create({
    collection: 'shows',
    data: {
      showName: 'Rare Charm',
      slug: 'lauriepina',
      primaryHosts: [`${laurieHostId}`],
      categories: [
        `${popCategoryId}`,
        `${leftfieldCategoryId}`,
        `${ambientCategoryId}`,
        `${downtempoCategoryId}`,
        `${electronicCategoryId}`,
      ],
      description: lexicalDoc([[lexicalText(showDescription)]]),
    },
  });
};

export default seed;
