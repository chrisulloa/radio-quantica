import NodeCache from 'node-cache';

const AppCache = new NodeCache();

const TTL = 15;

const setCache = (key: string, value: unknown) => AppCache.set(key, value, TTL);

const getCache = (key: string) => AppCache.get(key);

export default { setCache, getCache };
