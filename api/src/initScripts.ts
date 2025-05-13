import type { Payload } from 'payload';
import { UUIDv7 } from 'uuidv7-js';

export const populateSortableId = async (payload: Payload) => {
  const archives = await payload.find({
    collection: 'liveVideos',
    depth: 0,
    limit: 1200,
  });
  const chunkSize = 50;
  console.log(`Processing ${archives.totalDocs} archive records...`);
  for (let i = 0; i < archives.docs.length; i += chunkSize) {
    const chunk = archives.docs.slice(i, i + chunkSize);
    console.log(`Chunk ${i} - ${i + chunkSize}`);
    await Promise.all(
      chunk.map(async (val) => {
        if (!val.sortableId && val.date) {
          const uuid = new UUIDv7();
          const date = Date.parse(val.date);
          val.sortableId = uuid.gen(date);
          return await payload.update({
            collection: 'liveVideos',
            id: val.id,
            data: val,
          });
        }
        return;
      })
    );
  }
};
