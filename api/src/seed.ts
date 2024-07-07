import type { Payload } from 'payload';

const seed = async (payload: Payload) => {
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
      author: authorId,
      title: 'FUNDRAISER ALERT!',
      blurb:
        'Please help us stay afloat and keep giving u the cutest content on the digi airwaves!',
      _status: 'published',
      content: [
        {
          children: [
            {
              text: "QTCers! we need your support in these trying times. as you know, we are a non-profit organization who doesn't have a business model by nature, so we don't have a way to make money to keep the station running if we don't rely on public funding (which we get very little of and quite late each year, making the first 6 months of the year extra hard) or support from our listeners. That's why we launched this fundraiser, as we start 2023 with very little options, as money is running as low as it gets and all of our equipment needs to either be serviced or replaced for industry standard models that community stations around the world have – like the CDJs2000, proper decks, and a mixer that works, for example. Furthermore, we need financial support to the pay salaries of our studio managers and assistants, given that curation and scheduling has always happened on a volunteer basis.\n\nAny amount you can afford to help us is extremely valued and will go to:\n\n– essential equipment\n\n– salaries in 2023\n\nPlease help us stay afloat and keep giving u the cutest content on the digi airwaves! donate via this gofundme linky https://www.gofundme.com/f/help-community-station-radio-quantica-stay-afloat?utm_source=widget&utm_medium=referral&utm_campaign=p_cp+share-sheet 💘",
            },
          ],
        },
      ],
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

  const { id: ambientCatgeoryId } = await payload.create({
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
      email: 'laurie@particle.fm',
      type: 'resident',
    },
  });
  const { id: atrevidoHostId } = await payload.create({
    collection: 'hosts',
    data: {
      name: 'Atrevido',
      email: 'christian@particle.fm',
      type: 'resident',
    },
  });

  const { id: atrevidoShowId } = await payload.create({
    collection: 'shows',
    data: {
      showName: 'Planet V',
      slug: 'atrevido',
      primaryHosts: [atrevidoHostId],
      categories: [
        leftfieldCategoryId,
        ambientCatgeoryId,
        downtempoCategoryId,
        electronicCategoryId,
      ],
      description: [
        {
          children: [
            {
              text: 'Rare Charm is a treasure box of prismatic sounds with delightfully odd allure across genre, source material, and mood. Each session is an hour-long deep dive exploring a unique theme or concept. Get lost in the sonic curio cabinet every last Wednesday of the month.',
            },
          ],
        },
      ],
    },
  });
  const { id: laurieShowId } = await payload.create({
    collection: 'shows',
    data: {
      showName: 'Rare Charm',
      slug: 'lauriepina',
      primaryHosts: [laurieHostId],
      categories: [
        popCategoryId,
        leftfieldCategoryId,
        ambientCatgeoryId,
        downtempoCategoryId,
        electronicCategoryId,
      ],
      description: [
        {
          children: [
            {
              text: 'Rare Charm is a treasure box of prismatic sounds with delightfully odd allure across genre, source material, and mood. Each session is an hour-long deep dive exploring a unique theme or concept. Get lost in the sonic curio cabinet every last Wednesday of the month.',
            },
          ],
        },
      ],
    },
  });
};

export default seed;
